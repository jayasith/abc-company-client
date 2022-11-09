import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const NavigationRouter = () => {
	return (
		<Routes>
			<Route element={<Home />} path="/" />
			<Route element={<Login />} path="login" />
			<Route element={<Register />} path="register" />
		</Routes>
	);
};

export default NavigationRouter;
