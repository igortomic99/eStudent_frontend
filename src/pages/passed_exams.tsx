import { withUrqlClient } from "next-urql";
import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import { PassedExamsTable } from "../components/PassedExamsTable";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useAuth } from "../utils/useAuth";

const passedExams = () => {
  useAuth();
  return (
    <div>
      <NavigationBar />
      <h1 className="text-center text-3xl font-bold text-gray-600 mt-4">Положени испити</h1>
      <PassedExamsTable/>
    </div>
  );
};

export default withUrqlClient(createUrqlClient,{ssr:true})(passedExams);
