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
import BudgieProject from '../Pages/ProjectsPage/Projects/BudgieProject';
import HelpdeskProject from '../Pages/ProjectsPage/Projects/HelpdeskProject';
import CanyonProject from '../Pages/ProjectsPage/Projects/CanyonProject';
import EmilySiteProject from '../Pages/ProjectsPage/Projects/EmilySiteProject';
import ReactChatProject from '../Pages/ProjectsPage/Projects/ReactChatProject';
import ShippingAppProject from '../Pages/ProjectsPage/Projects/ShippingAppProject';
import Contact from '../Pages/Contact/Contact';


export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />}>

                </Route>
                <Route path="projects" element={<ProjectsPage />}>
                    
                </Route>
                <Route path="projects/budgie" element={<BudgieProject />} />
                <Route path="projects/helpdesk" element={<HelpdeskProject />} />
                <Route path="projects/canyon" element={<CanyonProject />} />
                <Route path="projects/emilysite" element={<EmilySiteProject />} />
                <Route path="projects/reactchat" element={<ReactChatProject />} />
                <Route path="projects/shippingapp" element={<ShippingAppProject />} />

                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
