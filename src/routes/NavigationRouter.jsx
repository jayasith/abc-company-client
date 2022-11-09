import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from "../pages/Register";
import Worker from '../pages/Worker';
import Manager from "../pages/Manager";
import Message from '../components/Message';
import FileUploader from '../components/FileUploader';
const NavigationRouter = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
      <Route element={<Worker />} path="worker/dashboard" />
      <Route element={<Manager />} path="manager/dashboard" />
      <Route element={<Message />} path="message" />
      <Route element={<FileUploader />} path="fileuploader" />
    </Routes>
  );
};

export default NavigationRouter;
