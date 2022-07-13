import React from 'react'
import { RouteObject } from 'react-router';
import Course from './layouts/Course';
import Courses from './layouts/Courses';
import CoursesIndex from './layouts/CoursesIndex';
import Home from './layouts/Home';
import Layout from './layouts/Layout';
import Nomatch from './layouts/Nomatch';

export const routes: RouteObject[] = [
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

