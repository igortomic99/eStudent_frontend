import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { NavigationBar } from "../../components/NavigationBar";
import { useExamsFromCurrentExamPeriodQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import NextLink from 'next/link'
import { ProfessorNavigationBar } from "../../components/professor_panel/ProfessorNavigationBar";

const RegisteredExams = ({}) => {
  const [{ data, error, fetching }] = useExamsFromCurrentExamPeriodQuery();
  const router = useRouter();
  return (
    <>
      <ProfessorNavigationBar />
      {data ? (
        <div className="flex flex-col mt-10 px-20">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-200">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Назив предмета
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Тип пријаве
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ЕСПБ
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Датум полагања
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        student
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data?.examsFromCurrentExamPeriod.length !== 0 ? (
                      data?.examsFromCurrentExamPeriod.map((e) => {
                        return (
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                {e.subject.subjectName}
                              </div>
                            </td>
                            <td className="px-8 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {e.subject.type}
                              </div>
                            </td>
                            <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-500">
                              {e.subject.espp}
                            </td>
                            <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
                              {e.date.split("T")[0]}
                            </td>
                            {e.examRecord?.student ? (
                              <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-500">
                                {e.examRecord?.student?.firstName}{" "}
                                {e.examRecord?.student?.lastName}
                              </td>
                            ) : (
                              <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-500">
                                Niko nije prijavio ispit
                              </td>
                            )}
                            <td className="px-8 py-4 whitespace-nowrap text-sm text-white">
                             <NextLink href="/professor_panel/students_who_singed_exam/[id]" as={`/professor_panel/students_who_singed_exam/${e.subject.id}`}>
                              <button
                                className="bg-gray-500 rounded-lg p-2"
                                onClick={async () => {
                                  
                                }}
                              >
                                Prijavi rezultate ispita
                              </button>
                              </NextLink>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <div className="px-8 py-4 whitespace-nowrap text-sm text-gray-500">
                        {/* {" "}
                      Сви испити из овог рока су већ {" "}
                      <a
                        className="cursor-pointer text-cyan-600"
                        onClick={() => {
                          router.push("/registered-exams");
                        }}
                      >
                        пријављени
                      </a>{" "}
                      или {" "}
                      <a
                        className="cursor-pointer text-cyan-600"
                        onClick={() => {
                          router.push("/passed_exams");
                        }}
                      >
                        положени
                      </a> */}
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-12 px-8 py-4 whitespace-nowrap text-md text-gray-500">
          {" "}
          Немате пријављених испита, то можете урадити &nbsp;{" "}
          <a
            className="cursor-pointer text-cyan-600"
            onClick={() => {
              router.push("/next_examination_period");
            }}
          >
            овде.
          </a>{" "}
        </div>
      )}
    </>
  );
};

export default withUrqlClient(createUrqlClient)(RegisteredExams);
