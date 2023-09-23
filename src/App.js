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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
      path="/"
      element={
        <Root/>
      }
    >
    <Route index element={<Home/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div><Outlet/></div>
    </>
  )
}
export default App;
