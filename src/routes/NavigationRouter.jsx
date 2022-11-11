import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Worker from '../pages/Worker';
import Manager from '../pages/Manager';
import ManagerMessage from '../components/MangerMessage';
import WorkerMessage from '../components/WorkerMessage';
import FileUploader from '../components/FileUploader';
import AdminDashboard from '../pages/AdminDashboard';
import ViewUsers from '../pages/ViewUsers';
import NotFound from '../pages/NotFound';

const NavigationRouter = () => {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="login" />
      <Route element={token ? <Register /> : <Navigate to="/login" />} path="admin/register" />
      <Route element={token ? <AdminDashboard /> : <Navigate to="/login" />} path="admin/dashboard" />
      <Route element={token ? <Worker /> : <Navigate to="/login" />} path="worker/dashboard" />
      <Route element={token ? <Manager /> : <Navigate to="/login" />} path="manager/dashboard" />
      <Route element={token ? <ManagerMessage /> : <Navigate to="/login" />} path="manager/message" />
      <Route element={token ? <WorkerMessage /> : <Navigate to="/login" />} path="worker/message" />
      <Route element={token ? <FileUploader /> : <Navigate to="/login" />} path="file-uploader" />
      <Route element={token ? <ViewUsers /> : <Navigate to="/login" />} path="admin/users" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export default NavigationRouter;
