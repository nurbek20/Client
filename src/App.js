import './App.css';
import React, { useEffect } from 'react'
import Container from "@mui/material/Container"
import { Registration, Login } from './pages';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Route, Routes, Navigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { getMeReduxServices } from './redux/services';
import { Post } from "./components/Post/Post"


function App() {
  const { user } = useSelector(state => state.authReducer)
  console.log(user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMeReduxServices())
  }, [])
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path='/' element={user.fullName ? <Home /> : <Registration />} />
          <Route exact path='/auth/sign-in' element={user.fullName ? <Navigate to="/" replace /> : <Login />} />
          <Route exact path='/auth/register' element={user.fullName ? <Navigate to="/" replace /> : <Registration />} />
          <Route path='/posts/create' element={<Post/>} />
        </Routes>
      </Container>

    </>
  );
}

export default App;
