import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import Contacts from '@/pages/Contacts';
import Layout from '@/components/Layout';
import Navigation from "@components/Navigation.jsx";
import { ThemeProvider } from '@hooks/ThemeContext.jsx';


const about = import.meta.env.VITE_ABOUT_PAGE;
const projects = import.meta.env.VITE_PROJECTS_PAGE;
const skills = import.meta.env.VITE_SKILLS_PAGE;
const contacts = import.meta.env.VITE_CONTACTS_PAGE;

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <Layout>
                    <div
                        className="flex justify-between items-center p-4 bg-blue-200 dark:bg-gray-900 sm:flex-col sm:items-start">
                        <h1 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl">SPA Portfolio</h1>
                        <Navigation/>
                    </div>
                    <Routes>
                        <Route path={about} element={<About/>}/>
                        <Route path={projects} element={<Projects/>}/>
                        <Route path={skills} element={<Skills/>}/>
                        <Route path={contacts} element={<Contacts/>}/>
                        </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
);
};

export default App;
