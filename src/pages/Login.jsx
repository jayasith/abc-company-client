import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from '../components/Header';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '', role: '' });
  const [error, setError] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);
  const navigate = useNavigate();

  const roles = ['manager', 'worker'];

  const login = async (e) => {
    e.preventDefault();
    setButtonStatus(true);
    console.log(user);

    try {
      await axios.post('user/login', user);
      setUser({});
      setButtonStatus(false);
      navigate('/');
    } catch (err) {
      setError(err.response.data.message);
      setButtonStatus(false);
    }
  };

  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        {error && <p className="text-red-500">{error}</p>}
        <div className="container px-5 sm:py-40 p-20 mx-auto flex flex-wrap items-center justify-center xl:w-1/3 lg:w-1/2 md:w-3/4 w-full">
          <div className="border-gray-100 border-2 rounded-xl p-16 flex flex-col ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-2xl font-medium title-font mb-5 text-center">Welcome Back</h2>
            <div className="relative mb-4">
              <label htmlFor="username" className="leading-7 text-sm text-gray-600">
                Username
              </label>
              <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                required
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
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex">
              <div className="flex my-4">
                <div className="form-check mr-5">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-indigo-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={roles[0]}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                  />
                  <label
                    className="form-check-label inline-block text-gray-600 cursor-pointer"
                    htmlFor="flexRadioDefault1"
                  >
                    Manager
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-indigo-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value={roles[1]}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                  />
                  <label
                    className="form-check-label inline-block text-gray-600 cursor-pointer"
                    htmlFor="flexRadioDefault2"
                  >
                    Worker
                  </label>
                </div>
              </div>
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-8 my-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={login}
              disabled={buttonStatus}
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
