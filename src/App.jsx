
import './App.css'
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header, Footer } from './components';
import AuthClassObject from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    AuthClassObject.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }))
      } else {
        dispatch(logout())
      }
    }).catch((erro) => {
      console.log("Error fetching user data:", erro);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return !loading ? (
    <div className='bg-amber-200 min-h-screen'>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
