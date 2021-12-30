import { withUrqlClient } from "next-urql";
import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import { useStudentsSubjectsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Subjects = ({}) => {
  const [{ data, error, fetching }] = useStudentsSubjectsQuery();
  return (
    <>
      <NavigationBar />
      <h1 className="text-center text-3xl font-bold text-gray-600 mt-4">
        Предмети
      </h1>
      <div className="flex justify-center items-center">
        {data?.studentsSubjects.map((s) => {
          return (
            <p
              className="flex justify-center items-center
                             mt-6 bg-gray-800 p-6 w-80 rounded-md text-white shadow-lg"
            >
              {s.subjectName} {s.type} {s.espp}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(Subjects);
