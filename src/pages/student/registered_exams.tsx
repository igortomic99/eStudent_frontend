import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { NavigationBar } from "../components/student/NavigationBar";
import { RegisteredExamsTable } from "../components/student/tables/RegisteredExamsTable";
import { useRegisteredExamsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useAuth } from "../utils/useAuth";

const RegisteredExams = ({}) => {
  const router = useRouter();
  const [{ data, error, fetching }] = useRegisteredExamsQuery();
  useAuth();
  return (
    <>
      <NavigationBar />
      <h1 className="text-center text-3xl font-bold text-gray-600 mt-4">
        Пријављени испити
      </h1>
      <RegisteredExamsTable />
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(RegisteredExams);
