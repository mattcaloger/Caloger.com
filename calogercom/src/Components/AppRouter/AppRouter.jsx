import React, { useEffect } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
  } from "react-router-dom";

import HomePage from '../Pages/HomePage/HomePage'
import ProjectsPage from '../Pages/ProjectsPage/ProjectsPage';
import Blog from '../Blog/Blog';
import NavBar from '../NavBar/NavBar';
import BudgieProject from '../Pages/ProjectsPage/Projects/StasherProject';
import HelpdeskProject from '../Pages/ProjectsPage/Projects/HelpdeskProject';
import CanyonProject from '../Pages/ProjectsPage/Projects/CanyonProject';
import EmilySiteProject from '../Pages/ProjectsPage/Projects/EmilySiteProject';
import ReactChatProject from '../Pages/ProjectsPage/Projects/ReactChatProject';
import ShippingAppProject from '../Pages/ProjectsPage/Projects/ShippingAppProject';
import ShortcakeProject from '../Pages/ProjectsPage/Projects/ShortcakeProject'
import BuildsheetEditorBlog from '../Blog/BlogPages/BuildsheetEditorBlog';
import AutomatingAccountCreationBlog from '../Blog/BlogPages/AutomatingAccountCreationBlog';
import StasherProject from '../Pages/ProjectsPage/Projects/StasherProject';
import ScrollToTop from './ScrollToTop';



export default function AppRouter() {

    return (
        <BrowserRouter>
            <NavBar />
            <ScrollToTop />
            <Routes>
                
                <Route path="/" element={<HomePage />}>

                </Route>
                <Route path="projects" element={<ProjectsPage />}>
                    
                </Route>

                <Route path="projects/stasher" element={<StasherProject />} />
                <Route path="projects/budgie" element={<BudgieProject />} />
                <Route path="projects/helpdesk" element={<HelpdeskProject />} />
                <Route path="projects/canyon" element={<CanyonProject />} />
                <Route path="projects/emilysite" element={<EmilySiteProject />} />
                <Route path="projects/shortcake" element={<ShortcakeProject />} />
                <Route path="projects/instantchat" element={<ReactChatProject />} />
                <Route path="projects/shippingapp" element={<ShippingAppProject />} />

                <Route path="blog" element={<Blog />} />
                <Route path="blog/buildsheet-editor" element={<BuildsheetEditorBlog />} />
                <Route path="blog/automating-account-creation" element={<AutomatingAccountCreationBlog />} />
            </Routes>
        </BrowserRouter>
    )
}
