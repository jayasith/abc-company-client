import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Worker from '../pages/Worker';
import Manager from '../pages/Manager';
import ManagerMessage from '../components/MangerMessage';
import WorkerMessage from '../components/WorkerMessage';
import FileUploader from '../components/FileUploader';
import AdminDashboard from '../pages/AdminDashboard';
import ViewUser from '../components/ViewUser';

const NavigationRouter = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
      <Route element={<AdminDashboard />} path="admin/dashboard" />
      <Route element={<Worker />} path="worker/dashboard" />
      <Route element={<Manager />} path="manager/dashboard" />
      <Route element={<ManagerMessage />} path="manager/message" />
      <Route element={<WorkerMessage />} path="worker/message" />
      <Route element={<FileUploader />} path="file-uploader" />
      <Route element={<Register />} path="admin/register" />
      <Route element={<ViewUser />} path="admin/view" />
    </Routes>
  );
};

export default NavigationRouter;
