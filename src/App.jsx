import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Footer, Container } from './components/index';
import AuthClassObject from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    AuthClassObject.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((erro) => {
        console.log("Error fetching user data:", erro);
        dispatch(logout());
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && !authStatus) {
      navigate('/login');
    }
  }, [loading, authStatus]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="mb-4 loader" />
          <p className="font-semibold text-xl">Checking session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#FFFDF6] min-h-screen">
      <Header />
      <main className="flex-grow py-4 overflow-hidden">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
