import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Header from "./components/Header.jsx";

import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Courses from './pages/Courses.jsx';
import Login from './pages/Login.jsx';
import ContactUs from "./pages/ContactUs.jsx";
import Enroll from './pages/Enroll.jsx';



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/enroll/:id" element={<Enroll />} />

            <Route path="/login" element={<Login />} />
            <Route path="/Contactus" element={<ContactUs />} />

          </Routes>
        </main>
        <Header />
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
