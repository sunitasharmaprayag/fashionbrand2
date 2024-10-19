// src/components/Home.js
import React from 'react';
import './Home.css';
import ProductList from './ProductList';
import heroImage from '../assets/Hero.jpg';


const Home = () => (
    <div className="home">
        <header className="hero">
        <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
                    <h1>Industrial design meets fashion</h1>
                    <h2>Atypical leather goods</h2>
                    <button className="shop-now">Shop Now</button>
                </div>
            </div>
        </header>
        <div className="mission-statement">
            <h3>Obsessive Attention. Intelligent Effort.</h3>
            <p>Functional handbags made of luxurious materials to improve people's lives in small but mighty ways.</p>
        </div>
        <ProductList />
    </div>
);

export default Home;
