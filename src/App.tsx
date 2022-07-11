import React, { useEffect } from 'react';
import { Routes, Route, RouteObject, useRoutes } from "react-router-dom";
import './App.css';
import LoggerProvider from './components/LoggerProvider';
import useRequest from './hooks/useRequest';
import Course from './layouts/Course';
import Courses from './layouts/Courses';
import CoursesIndex from './layouts/CoursesIndex';
import Home from './layouts/Home';
import Layout from './layouts/Layout';
import Nomatch from './layouts/Nomatch';
import Navigation from './page/Navigation';
import Newtitle from './page/Newtitle';
import Request from './page/Request';
// import Request2 from './page/Request2';

function App() {

  const { api, loading } = useRequest()

  useEffect(() => {
    loadUser()
  }, [])


  const loadUser = () => {
    api('https://api.github.com/users')
      .then((e) => { console.log('success') })
      .catch((e) => { console.log('err') })
  }

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/courses",
          element: <Courses />,
          children: [
            { index: true, element: <CoursesIndex /> },
            { path: "/courses/:id", element: <Course /> },
          ],
        },
        { path: "*", element: <Nomatch /> },
      ],
    },
  ];

  const element = useRoutes(routes);

  if (loading) return <div>Loading</div>


  return (
    <LoggerProvider handler={(args: any) => console.log('xxxx', ...args)}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="title" element={<Newtitle />} />
          <Route path='/request' element={<Request />} />
          {/* <Route path='/request2' element={Request2}/> */}
        </Routes>

        <h1>Route Objects Example</h1>

        <p>
          ABC
        </p>

        <p>
          React Router exposes a <code>useRoutes()</code> hook that allows you to
          hook into the same matching algorithm that <code>&lt;Routes&gt;</code>{" "}
          uses internally to decide which <code>&lt;Route&gt;</code> to render.
          When you use this hook, you get back an element that will render your
          entire route hierarchy.
        </p>

        {element}
      </div>
    </LoggerProvider>
  );
}

export default App;
