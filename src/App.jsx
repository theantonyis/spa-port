import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contacts from './pages/Contacts';
import Layout from './components/Layout';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
