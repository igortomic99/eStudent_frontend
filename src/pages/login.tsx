import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import { NavigationBar } from "../components/NavigationBar";
import {
  useLoginMutation,
  useMeProfessorQuery,
  useMeQuery,
} from "../generated/graphql";
import grbUniverziteta from "../public/grbuniverziteta.png";
import { createUrqlClient } from "../utils/createUrqlClient";

const Login = () => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  const [{ data, error, fetching }] = useMeQuery();
  useEffect(() => {
    if (data?.me) {
      router.push("/");
    }
  }, [fetching, data, router]);
  const [alert, setAlert] = useState<JSX.Element | null>(null);
  return (
    <>
      <NavigationBar />
      {alert}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="text-center -mt-16">
              <Image
                src={grbUniverziteta}
                alt="Workflow"
                height={120}
                width={150}
              />
            </div>
            <h1 className="text-center text-4xl font-extrabold text-gray-900">
              Универзитет одбране
            </h1>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-800">
              Пријавите се у свој налог
            </h2>
          </div>
          <Formik
            initialValues={{ brind: "", password: "" }}
            onSubmit={async (values) => {
              const response = await login(values);
              if (response.error?.message.includes("ER001")) {
                setAlert(
                  <div className="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300">
                    <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                      <span className="text-red-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="h-6 w-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="alert-content ml-4">
                      <div className="alert-title font-semibold text-lg text-red-800">
                        Грешка
                      </div>
                      <div className="alert-description text-sm text-red-600">
                        Погрешан број индекса или шифра
                      </div>
                    </div>
                  </div>
                );
              } else if (response.data?.login) {
                router.push("/");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label className="sr-only">Brind</label>
                    <InputField
                      id="brind"
                      name="brind"
                      type="brind"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Број индекса"
                    />
                  </div>
                  <div>
                    <label className="sr-only">Password</label>
                    <InputField
                      id="password"
                      name="password"
                      type="password"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Шифра"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <a
                      onClick={() => {
                        router.push("/professor_panel/login");
                      }}
                      className=" block cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-500"
                    >
                      Професорска пријава?
                    </a>
                  </div>

                  <div className="text-sm">
                    <a className="font-medium text-gray-600 hover:text-gray-500 cursor-pointer">
                      Заборавили сте шифру?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Пријави се
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
