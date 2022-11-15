import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import CTAImage from './../assets/cta-img.png';

const Home = () => {

  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font h-[calc(100vh-80px)] flex items-center">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-5xl text-3xl mb-4 font-bold text-gray-900 max-w-[750px]">
              Upload Your Files and Messages in One Place
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt dolor nesciunt consectetur perspiciatis
              quia saepe delectus ab et beatae.
            </p>
            <div className="flex justify-center">
              {
                <Link to="/login">
                  <button className="inline-flex items-center bg-indigo-500 border-0 py-2 px-4 focus:outline-none text-white hover:bg-indigo-600 rounded text-base md:mt-0">
                    Login
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              }
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded transform -scale-x-100" alt="hero" src={CTAImage} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
