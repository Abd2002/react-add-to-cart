import React from 'react';
import Home from '../pages/Home';
import List from '../pages/List';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';

const index = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/cart'} element={<List />} />
            </Routes>
        </Router>
    )
}

export default index