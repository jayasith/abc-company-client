import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section class="text-gray-600 body-font h-[100vh] flex items-center">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 class="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">404</h1>
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font text-3xl mb-4 text-gray-500">We couldn't find the page you were looking for.</h1>
          <div class="flex justify-center">
            <Link to="/">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
