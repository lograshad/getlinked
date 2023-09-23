import './App.css';
// import { Route, Routes } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from './Screens/HomeScreen/home';
import NavBar from './components/navbar/navbar';
import ContactPage from './Screens/ContactScreen/contact';
import RegisterPage from './Screens/RegisterScreen/register';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Cursor from "./components/Cursor/cursor";
import { useState } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {
  // handling the cursor interaction with links, across all components
  const [curse, setCurse] = useState(false);
  const updateCurse = () => {
    setCurse(true);
  }
  const updateLeave = () => {
    setCurse(false);
  }
  // Initializing lenis smooth scroll
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    // console.log(e)
    // maybe set duration and easing
  })
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Root />
        }
      >
        <Route index element={
          <Home
            updateCurse={updateCurse}
            updateLeave={updateLeave}
            // update curse and update leave are props handling animated cursor interactivity
          />
        } />
        <Route path='/contact' element={
          <ContactPage
            updateCurse={updateCurse}
            updateLeave={updateLeave}
          />
        } />
        <Route path='/register' element={
          <RegisterPage
            updateCurse={updateCurse}
            updateLeave={updateLeave}
          />
        } />
      </Route>
    )
  )
  return (
    <div className="App">
    {/* animated cursor component */}
      <Cursor curse={curse} />
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <ToastContainer />
      <div><Outlet /></div>
    </>
  )
}
export default App;
