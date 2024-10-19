// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import VideoSection from './components/VideoSection';
import QuoteSection from './components/QuoteSection';
import QuickLinks from './components/QuickLinks';
import Subscription from './components/Subscription';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
    return (
        <div>
           <AnimatePresence>
            <motion.div
                key="header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <Header />
            </motion.div>
            <motion.div
                key="hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <Hero />
            </motion.div>
            <motion.div
                key="featured-products"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <FeaturedProducts />
            </motion.div>
        </AnimatePresence>
        </div>
    );
};

export default App;
