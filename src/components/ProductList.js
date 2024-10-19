// src/components/ProductList.js
import React from 'react';
import './ProductList.css';
import flexImage from '../assets/flex.webp';
import flexImage1 from '../assets/flex1.webp';

import studioBagImage from '../assets/studio3.webp';
import studioBagImage1 from '../assets/studio4.webp';
import louiseSlideSandalImage from '../assets/louise-slide-sandal.webp';
import louiseSlideSandalImage1 from '../assets/louise-slide-sandal1.webp';

import miniNaomiBagImage from '../assets/mini-naomi-bag1.webp';
import miniNaomiBagImage1 from '../assets/mini-naomi-bag3.webp';

import helixImage from '../assets/Helix2.webp';
import helixImage1 from '../assets/Helix3.webp';

import boIvyImage from '../assets/Bo Ivy2.webp';
import boIvyImage1 from '../assets/Bo Ivy3.webp';

import pleatedHeelMuleImage from '../assets/Pleated Heel Mule1.webp';
import pleatedHeelMuleImage1 from '../assets/Pleated Heel Mule2.webp';

import brickImage from '../assets/Brick4.webp';
import brickImage1 from '../assets/Brick3.webp';









const products = [
    { name:  "Small Convertible Flex Bag",imageUrl: flexImage, hoverImageUrl:flexImage1 , 
        regularPrice: 395, salePrice: 320, onSale: true  },
    { name: "Studio Bag", regularPrice: 465, onSale: false, imageUrl: studioBagImage,hoverImageUrl:studioBagImage1  },
    { name: "Louise Slide Sandal", regularPrice: 430, salePrice: 395, onSale: true, imageUrl: louiseSlideSandalImage,hoverImageUrl:louiseSlideSandalImage1 },
    { name: "Mini Naomi Bag", regularPrice: 315, salePrice: 299, onSale: true, imageUrl: miniNaomiBagImage ,hoverImageUrl:miniNaomiBagImage1},
    { name: "Helix", regularPrice: 470, onSale: false, imageUrl: helixImage ,hoverImageUrl:helixImage1},
    { name: "Bo Ivy", regularPrice: 390, onSale: false, imageUrl: boIvyImage ,hoverImageUrl:boIvyImage1},
    { name: "Pleated Heel Mule", regularPrice: 495, onSale: false, imageUrl: pleatedHeelMuleImage,hoverImageUrl:pleatedHeelMuleImage1 },
    { name: "Brick", regularPrice: 385, onSale: false, imageUrl: brickImage ,hoverImageUrl:brickImage1},
];

const ProductList = () => (
    <div className="product-list">
    {products.map((product, index) => (
        <div className="product" key={index}>
              <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="product-image" 
                    onMouseEnter={(e) => e.currentTarget.src = product.hoverImageUrl}
                    onMouseLeave={(e) => e.currentTarget.src = product.imageUrl}
                />            <div>
                <h3>{product.name}</h3>
                <p>
                    {product.onSale ? (
                        <>
                            <span className="regular-price">${product.regularPrice}.00 CAD</span>{"  from "}
                            <span className="sale-price">${product.salePrice}.00 CAD</span>
                        </>
                    ) : (
                        <span>${product.regularPrice}.00 CAD</span>
                    )}
                </p>
            </div>
        </div>
    ))}
</div>
);

export default ProductList;
