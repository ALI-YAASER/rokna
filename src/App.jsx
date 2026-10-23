import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./Collection";
import ProductItem from "./ProductItem.jsx";
import './App.css'
import Navbar from "./Navbar";
import Footer from "./Footer.jsx";

function App() {
    return (
        <Router>
            {/* Wrapper عمودي يملأ الشاشة */}
            <div className="flex flex-col min-h-screen">



                {/* المحتوى الرئيسي */}
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Collection />} />
                        <Route path="/product/:id" element={<ProductItem />} />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;