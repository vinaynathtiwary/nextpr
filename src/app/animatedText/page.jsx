'use client'
import React from 'react';
import Navbar from '../../components/navBar';


const WaviyAnimation = () => {
    return (
        <section>
            <section>
                <Navbar />
            </section>
            <div className='mainSection' style={{ backgroundImage: `url('/assets/bg2.jpg')` }}>


                <div className="brand-container">
                    <div className="waviy">
                        <span style={{ '--i': 1 }}>Y</span>
                        <span style={{ '--i': 2 }}>o</span>
                        <span style={{ '--i': 3 }}>u</span>
                        <span style={{ '--i': 4 }}>r</span>
                        <span style={{ '--i': 5 }}>&nbsp;</span>
                        <span style={{ '--i': 6 }}>B</span>
                        <span style={{ '--i': 7 }}>r</span>
                        <span style={{ '--i': 8 }}>a</span>
                        <span style={{ '--i': 9 }}>n</span>
                        <span style={{ '--i': 10 }}>d</span>
                    </div>
                </div>
                <div className="passion-container">
                    <div className="waviy">
                        <span style={{ '--i': 1 }}>O</span>
                        <span style={{ '--i': 2 }}>u</span>
                        <span style={{ '--i': 3 }}>r</span>
                        <span style={{ '--i': 4 }}>&nbsp;</span>
                        <span style={{ '--i': 5 }}>P</span>
                        <span style={{ '--i': 6 }}>a</span>
                        <span style={{ '--i': 7 }}>s</span>
                        <span style={{ '--i': 8 }}>s</span>
                        <span style={{ '--i': 9 }}>i</span>
                        <span style={{ '--i': 10 }}>o</span>
                        <span style={{ '--i': 11 }}>n</span>
                    </div>
                </div>
                {/* <button className="swipeButton">Swipe Down</button> */}
            </div>
        </section>
    );
};

export default WaviyAnimation;
