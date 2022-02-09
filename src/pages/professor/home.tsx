import { withUrqlClient } from "next-urql";
import React from "react";
import { ProfessorNavigationBar } from "../../components/professor/ProfessorNavigationBar";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { isProfessor } from "../../utils/isProfessor";

const ProfessorHome = ({}) => {
  isProfessor();
  return (
    <>
      <ProfessorNavigationBar />
    </>
  );
};

export default withUrqlClient(createUrqlClient)(ProfessorHome);
