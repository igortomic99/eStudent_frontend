import { withUrqlClient } from "next-urql";
import React from "react";
import { createUrqlClient } from "../../utils/createUrqlClient";

const CreateStudent = ({}) => {
        // KORISTI FORMIK
  return (
    <>

      <div className="h-full">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-2xl p-6 mx-auto">
            <h2 className="text-2xl text-gray-900">Додај студента</h2>
            <form className="mt-6 border-t border-gray-400 pt-4">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    email адреса
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="text"
                    placeholder="Унеси нову email адресу"
                  />
                  <button className="appearance-none w-48 mt-4 bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">
                    Промени е-mail адресу
                  </button>
                </div>
                <div className="w-full md:w-full px-3 mb-6 ">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    шифра
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="password"
                    placeholder="Унеси нову шифру"
                  />
                  <button className="appearance-none mt-4 w-48 bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">
                    Промени шифру
                  </button>
                </div>
                <div className="w-full md:w-full px-3 mb-6 ">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    број мобилног телефона
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="text"
                    placeholder="Унеси нови број мобилног телефона"
                  />
                  <button className="appearance-none mt-4 w-48 bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">
                    Унеси
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(CreateStudent);
