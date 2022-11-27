import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Reqlist from './pages/reqlist';
import Creation from './pages/creation';
import SignUp from './pages/signup';
import Request from './pages/request';




 
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/reqlist' element={<Reqlist/>} />
        <Route path='/request' element={<Request/>} />
        <Route path='/creation' element={<Creation/>} />
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>

);

}


 
export default App;