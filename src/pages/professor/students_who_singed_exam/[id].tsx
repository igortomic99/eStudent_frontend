import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { ProfessorNavigationBar } from "../../../components/professor/NavigationBar";
import { useStudentsWhoSingedExamQuery } from "../../../generated/graphql";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import NextLink from "next/link";

const StudentsWhoSinged = ({}) => {
  const router = useRouter();
  const id = router.query.id as any;
  const [{ data, error, fetching }] = useStudentsWhoSingedExamQuery({
    variables: {
      subjectID: id,
    },
  });
  return (
    <>
      <ProfessorNavigationBar />
      { data?.studentsWhoSingedExam.length !== 0 ?
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-600 mt-4">
            Студенти који су пријавили{" "}
            {data?.studentsWhoSingedExam.map((sub) => {
              return sub.exam.subject.subjectName;
            })}
          </h1>
          <div className="flex justify-center items-center">
            {data?.studentsWhoSingedExam.map((s) => {
              return (
                <NextLink
                  href="/professor/sing_exam_results/[id]"
                  as={`/professor/sing_exam_results/${s.id}`}
                >
                  <p
                    className="flex justify-center items-center cursor-pointer
              mt-6 bg-white p-6 w-80 rounded-md text-gray-500 shadow-lg"
                  >
                    {s.student?.firstName} {s.student?.lastName}{" "}
                    {s.student?.brind}
                  </p>
                </NextLink>
              );
            })}
          </div>
        </div>
      :           <h1 className="text-center text-3xl font-bold text-gray-600 mt-4">
          Niko nije prijavio ispit
    </h1>}
    </>
  );
};

export default withUrqlClient(createUrqlClient)(StudentsWhoSinged);
