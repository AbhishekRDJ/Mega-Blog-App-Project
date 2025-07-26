import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Footer } from './components/index';
import AuthClassObject from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container } from './components/index';

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

  // 👇 Redirect to login after loading completes and user is NOT authenticated
  useEffect(() => {
    if (!loading && !authStatus) {
      navigate('/login');
    }
  }, [loading, authStatus]);

  // 👇 Loading spinner UI
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

  // 👇 App layout
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container>
        <main className="py-20">
          <Outlet />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
