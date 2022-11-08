import React from "react";
import Header from "../components/Header";

function Register(props) {
	return (
		<div>
			<Header />
			<section className="text-gray-600 body-font">
				<div className="container px-5 sm:py-40 p-20 mx-auto flex flex-wrap items-center justify-center xl:w-1/3 lg:w-1/2 md:w-3/4 w-full">
					<div className="border-gray-100 border-2 rounded-xl p-16 flex flex-col ml-auto w-full mt-10 md:mt-0">
						<h2 className="text-gray-900 text-2xl font-medium title-font mb-5 text-center">
							Register User
						</h2>
						<div className="relative mb-4">
							<label for="name" className="leading-7 text-sm text-gray-600">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div className="relative mb-4">
							<label for="email" className="leading-7 text-sm text-gray-600">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
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
							<label
								htmlFor="password"
								className="leading-7 text-sm text-gray-600"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div className="relative mb-8 mt-8">
							<div className="flex justify-left">
								<div className="flex">
									<div className="form-check mr-8">
										<input
											className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
											type="radio"
											name="flexRadioDefault"
											id="flexRadioDefault1"
										/>
										<label
											className="form-check-label inline-block text-gray-800"
											for="flexRadioDefault1"
										>
											Worker
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
											type="radio"
											name="flexRadioDefault"
											id="flexRadioDefault2"
											checked
										/>
										<label
											className="form-check-label inline-block text-gray-800"
											for="flexRadioDefault2"
										>
											Manager
										</label>
									</div>
								</div>
							</div>
						</div>
						<button className="text-white bg-indigo-500 border-0 py-2 px-8 my-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							Register
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Register;
