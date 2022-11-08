import React from 'react';
import Header from '../components/Header';

const Login = () => {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 sm:py-40 p-20 mx-auto flex flex-wrap items-center justify-center xl:w-1/3 lg:w-1/2 md:w-3/4 w-full">
          <div className="border-gray-100 border-2 rounded-xl p-16 flex flex-col ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-2xl font-medium title-font mb-5 text-center">Welcome Back</h2>
            <div className="relative mb-4">
              <label for="username" className="leading-7 text-sm text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 my-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
