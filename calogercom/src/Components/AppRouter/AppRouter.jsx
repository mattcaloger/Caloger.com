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
import BudgieProject from '../Pages/ProjectsPage/Projects/BudgieProject';
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
import Content from '../Layout/Content';
import Footer from '../Footer/Footer';
import SpringReactGuide from '../Blog/BlogPages/SpringReactGuide';

import NavBarPotential from '../NavBar/NavBarPotential';
import BookDBProject from '../Pages/ProjectsPage/Projects/BookDB';
import ScrollHandler from './ScrollHandler';
import SocialButtons from '../SocialButtons/SocialButtons';



export default function AppRouter() {

    

    return (
        <BrowserRouter>
            
                <NavBar />
                
<ScrollHandler />

                <ScrollToTop />

                    <Routes>
                    
                        <Route path="/" element={<HomePage />} />
     
                            <Route path="stasher" element={<StasherProject />} />
                            <Route path="budgie" element={<BudgieProject />} />
                            <Route path="helpdesk" element={<HelpdeskProject />} />
                            <Route path="/canyon" element={<CanyonProject />} />
                            <Route path="/projects/emilysite" element={<EmilySiteProject />} />
                            <Route path="/shortcake" element={<ShortcakeProject />} />
                            <Route path="/instantchat" element={<ReactChatProject />} />
                            <Route path="/shippingapp" element={<ShippingAppProject />} />
                            <Route path="/bookdb" element={<BookDBProject />} />
                        
                        

           
                            <Route path="/spring-react-guide" element={<SpringReactGuide />} />
                            <Route path="/buildsheet-editor" element={<BuildsheetEditorBlog />} />
                            <Route path="/automating-account-creation" element={<AutomatingAccountCreationBlog />} />

                            <Route path="*" exact element={<div>404</div>} />

                    </Routes>



            <SocialButtons />
        </BrowserRouter>
    )
}
