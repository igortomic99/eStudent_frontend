import { withUrqlClient } from "next-urql";
import React from "react";
import { ProfessorNavigationBar } from "../../components/professor/NavigationBar";
import { createUrqlClient } from "../../utils/createUrqlClient";

const ProfessorHome = ({}) => {
  return (
    <>
      <ProfessorNavigationBar />
    </>
  );
};

export default withUrqlClient(createUrqlClient)(ProfessorHome);
