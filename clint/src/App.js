import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import GetUser from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';

const routes = createBrowserRouter([
  {
    path:'/',
    element:<GetUser/>
  },
  {
    path:"/add",
    element:<Add/>
  },
  {
    path:"/edit/:id",
    element:<Edit/>
  }
])


function App() {
  return (
    <>
     <RouterProvider router = {routes}>
      <GetUser/>
     </RouterProvider>
    </>
  );
}

export default App;
