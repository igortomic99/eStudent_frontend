import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import router from "next/router";
import React from "react";
import { AdminNavigationBar } from "../../components/admin/NavigationBar";
import { InputField } from "../../components/InputField";
import { useCreateStudentMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const CreateStudent = ({}) => {
  const [, createStudent] = useCreateStudentMutation();
  return (
    <>
      <AdminNavigationBar />
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          brind: "",
          middleName: "",
          jmbg: "",
          moduleName: "",
          classNumber: "",
          birthDate: "",
        }}
        onSubmit={async (values) => {
          const response = await createStudent({
            input: {
              birthDate: values.birthDate,
              brind: values.brind,
              classNumber: parseInt(values.classNumber),
              email: values.email,
              firstName: values.firstName,
              lastName: values.lastName,
              jmbg: values.jmbg,
              middleName: values.middleName,
              moduleCode: values.moduleName,
            },
          });
          if (response.error?.message.includes("ER201")) {
            console.log("Module you entered does nost exist");
          } else if (response.error?.message.includes("ER100")) {
            console.log("Check input values");
          } else if (response.error?.message.includes("ER301")) {
            console.log("Class you entered does nost exist");
          } else if (response.data) {
            console.log("Success");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mt-3 space-y-6" action="#" method="POST">
            <div className="h-full">
              <div className="container mx-auto">
                <div className="inputs w-full max-w-2xl p-6 mx-auto">
                  <h2 className="text-2xl text-gray-900">?????????? ????????????????</h2>
                  <div className="mt-2 border-t border-gray-400 pt-4">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          ?????? ????????????????
                        </label>
                        <InputField
                          className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          id="firstName"
                          name="firstName"
                          type="firstName"
                          placeholder="?????????? email ????????????"
                        />
                      </div>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          ?????????????? ????????????????
                        </label>
                        <InputField
                          className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          id="lastName"
                          name="lastName"
                          type="lastName"
                          placeholder="?????????? email ????????????"
                        />
                      </div>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          ?????? ???????????? ????????????????
                        </label>
                        <InputField
                          className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          id="middleName"
                          name="middleName"
                          type="middleName"
                          placeholder="?????????? email ????????????"
                        />
                      </div>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          email ????????????
                        </label>
                        <InputField
                          className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="?????????? email ????????????"
                        />
                      </div>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          ???????? ??????????????
                        </label>
                        <InputField
                          className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          id="brind"
                          name="brind"
                          type="brind"
                          placeholder="?????????? email ????????????"
                        />
                      </div>

                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          ?????????? ????????????
                        </label>
                        <InputField
                          className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          id="birthDate"
                          name="birthDate"
                          type="birthDate"
                          placeholder="?????????? email ????????????"
                        />
                      </div>
                      <div className="w-full md:w-full px-3 mb-6 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          ??????????
                        </label>
                        <InputField
                          className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          id="moduleName"
                          name="moduleName"
                          type="moduleName"
                          placeholder="?????????? ???????? ??????????"
                        />
                      </div>
                      <div className="w-full md:w-full px-3 mb-6 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          ??????????
                        </label>
                        <InputField
                          className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          id="classNumber"
                          name="classNumber"
                          type="classNumber"
                          placeholder="?????????? ???????? ??????????"
                        />
                      </div>
                      <div className="w-full md:w-full px-3 mb-6 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          ????????
                        </label>
                        <InputField
                          className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          id="jmbg"
                          name="jmbg"
                          type="jmbg"
                          placeholder="?????????? ???????? ???????? ???????????????? ????????????????"
                        />
                        <button
                          type="submit"
                          className="appearance-none mt-4 w-48 bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md "
                        >
                          ??????????
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(CreateStudent);
