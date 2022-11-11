import { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';

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
  const [loggedIn, setLoggedIn] = useState({ state: false, role: '' });

  const getLoggedIn = async () => {
    try {
      const res = await axios.get('/user/logged', { headers: { token: localStorage.getItem('token') } });
      setLoggedIn({ state: res.data.state, role: res.data.role });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={loggedIn.state ? <Navigate to="/" replace /> : <Login />} path="login" />
      <Route
        element={loggedIn.state && loggedIn.role === 'admin' ? <Register /> : <Navigate to="/" replace />}
        path="admin/register"
      />
      <Route
        element={loggedIn.state && loggedIn.role === 'admin' ? <AdminDashboard /> : <Navigate to="/" replace />}
        path="admin/dashboard"
      />
      <Route
        element={loggedIn.state && loggedIn.role === 'worker' ? <Worker /> : <Navigate to="/" replace />}
        path="worker/dashboard"
      />
      <Route
        element={loggedIn.state && loggedIn.role === 'manager' ? <Manager /> : <Navigate to="/" replace />}
        path="manager/dashboard"
      />
      <Route
        element={loggedIn.state && loggedIn.role === 'manager' ? <ManagerMessage /> : <Navigate to="/" replace />}
        path="manager/message"
      />
      <Route
        element={loggedIn.state && loggedIn.role === 'worker' ? <WorkerMessage /> : <Navigate to="/" replace />}
        path="worker/message"
      />
      <Route
        element={loggedIn.state && loggedIn.role === 'manager' ? <FileUploader /> : <Navigate to="/" replace />}
        path="file-uploader"
      />
      <Route
        element={loggedIn.state && loggedIn.role === 'admin' ? <ViewUsers /> : <Navigate to="/" replace />}
        path="admin/users"
      />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export default NavigationRouter;
