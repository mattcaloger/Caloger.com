import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import HomePage from '../Pages/HomePage/HomePage'
import ProjectsPage from '../Pages/ProjectsPage/ProjectsPage';
import NavBar from '../NavBar/NavBar';
import StylizedSlant from '../StylizedSlant/StylizedSlant';


export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />}>

                </Route>
                <Route path="projects" element={<ProjectsPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
