import React from 'react';
import './QuotesSection.css';
import cutImage from '../assets/block1.webp'; // Adjust the path to your image
import refineryImage from '../assets/bb.png'; // Adjust the path to your Refinery 29 image

const QuotesSection = () => {
    return (
        <div className="quotes-container">
            <div className="quote-wrapper">
                <div className="quote-section">
                    <div>
                        <img src={refineryImage} alt="Refinery 29" className="refinery-image" /> <br></br>
                        <p>"The leather is sourced from environmentally friendly tanneries in Italy, France, and Turkey, where Rure is based and everything is assembled by hand."</p>
                    </div>
                </div>
                <div className="quote-section">
                    <div>
                        <img src={cutImage} alt="The CUT" className="cut-image" /><br></br>
                        <p>"All too often, we're forced to pick: style, or sustainability. Recently, more designers have been making environmental impact a top priority."</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuotesSection;
