import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Cardapio from "../pages/Cardapio";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cardapio" element={<Cardapio />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;