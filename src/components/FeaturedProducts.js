// src/components/FeaturedProducts.js
import React from 'react';
import './FeaturedProducts.css';
import bigBagImage from '../assets/Ml.webp'; // Adjust the path to your image
import smallBagImage from '../assets/MI1.webp'; // Adjust the path to your image
import smallBagImage2 from '../assets/MI2.webp'; // Adjust the path to your second small bag image

import VideoSection from './VideoSection';
import QuotesSection from './QuotesSection';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';




const FeaturedProducts = () => {
    const products = [
        { category: "Bags", name: "Mini Eddy", price: 375, onSale: false, image: smallBagImage},
        { category: "Shoes", name: "Louise Slide Sandal", price: 430, onSale: false ,image: smallBagImage2},

    ];

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="featured-products">
        <div className="featured-products">
            <h2>Back in Stock!</h2>

            {/* Bags Section with Images */}
            <div className="product-category">
                
                <div className="bags-layout">
                    <div className="big-bag">
                        <img src={bigBagImage} alt="Big Bag" />
                    </div>
                    
                    <div className="small-bags-container">
                        {products.map((product, index) => (
                            <div className="small-bag" key={index}>
                                <img src={product.image} alt={product.name} />
                                {index === 0 ? ( // Check if it's the first product
                                    <>
                                        <h4 >{product.name}</h4>
                                        <p> ${product.price}.00 CAD</p>
                                    </>
                                ) : null} {/* Render only for the first product */}
                            </div>
                        ))}
                       
                    </div>
                    
                </div>
                <div className="arrow-labels">
        <div className="arrow-label">
            <span>Bags<span className="arrow">→</span></span>
            
        </div>
        <div className="arrow-label">
            <span>Shoes <span className="arrow">→</span></span>
           
        </div>
    </div>
                       
                
            </div>


           
            
        </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <VideoSection />
            </motion.div>
            {/* Quotes Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>

            <QuotesSection />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Footer />
            </motion.div>
            
        </AnimatePresence>
        
    );
};

export default FeaturedProducts;
