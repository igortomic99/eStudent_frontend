import { withUrqlClient } from "next-urql";
import React from "react";
import { NavigationBar } from "../components/student/NavigationBar";
import { useStudentsSubjectsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Subjects = () => {
  const [{ data, error, fetching }] = useStudentsSubjectsQuery();
  return (
    <>
      <NavigationBar />
      <h1 className="text-center text-3xl font-bold text-gray-600 mt-4">
        Предмети
      </h1>
      {data ? (
        <div className="flex justify-center items-center">
          <div className="grid content-center grid-cols-1 gap-2 mt-4 p-5">
            {data?.studentsSubjects.map((s) => {
              return (
                <p
                  className="flex justify-center items-center
                             mt-3 bg-gray-800 p-3 w-80 rounded-md text-white shadow-lg"
                >
                  {s.subjectName} {s.type} {s.espp}
                </p>
              );
            })}
          </div>
        </div>
      ) : (
        <h2 className="text-center text-xl font-bold text-gray-600 mt-4">
          Предмети још нису убачени контактирајте студентску службу
        </h2>
      )}
    </>
  );
};

export default withUrqlClient(createUrqlClient)(Subjects);
