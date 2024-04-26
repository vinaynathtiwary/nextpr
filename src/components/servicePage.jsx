'use client'
import React from 'react';
import Footer from './footerPage';
import styles from "../css/servicePage.css.module.css";

const YourPage = () => {
    const dataArrays = [
        {
            heading: "Film & Motion",
            paragraph: "The video format has always been the go-to format for all marketers! The audience loves a crisp & engaging brand video with high production value. With the rise of platforms such as YouTube & Facebook, your video has a better chance of attaining viral success. And it's not just about digital; the traditional television format also has a legion of followers that you must look to engage",
            title: "Services",
            listItems: ["Art Direction", "Casting", "Styling", "Production", "Post Production", "Creative Content", "Color Correction", "Animated Video", "TV Commercials", "Corporate Video"]
        },
        {
            heading: "Photography",
            paragraph: "Unleash the power of stunning visuals with our photography services. Our team blends skill and creativity to capture your essence. Partner with Manchester's top creative agency for a portfolio that speaks volumes.",
            title: "Services",
            listItems: ["E-Commerce shoot", "Product Shoot", "Model Shoot", "Ghost Mannequin", "Campaign Shoot", "Lookbook Design", "Editorial & Advertising", "Industry Shoot", "TV Commercials", "Corporate Video"]
        },
        
        {
            heading: "Brand Strategy",
            paragraph: "The importance of having a solid strategy underpinning your brand can't be underestimated. We specialise in marrying creative and strategic thinking to create bespoke brand strategies that garner solid and measurable results. Work with our talented and creative team to create your brand strategy.",
            title: "Services",
            listItems: ["Corporate Identity", "Logo Design", "Brand Guidelines", "Copywriting", "Packaging", "Graphic Design", "Media Plan", "Marketing Plan", "Web Analysis", "Web Marketing", "SWOT Analysis"]
        },

        {
            heading: "Advertising Campaign",
            paragraph: "Successful advertising and marketing are essential to brand success. Creative Spark are Manchester's leading creative & branding agency, and offer advertising and marketing services to support your brand. Our talented team are full of creative spark, and we underpin all our work with solid strategy for great result",
            title: "Services",
            listItems: ["Concepts and campaigns", "Marketing collateral", "Corporate Identity", "Brand content", "Outdoor and OOH", "TV & Radio Advertising"]
        },

        {
            heading: "Web Design Development",
            paragraph: "We offer web design services with added creative spark. Our talented and creative web design team will work alongside you to create a site that perfectly sums up your brand, looks great, and has great usability and functionality. Work with Manchester's leading creative branding agency on your new website.",
            title: "Services",
            listItems: ["Web Strategy", "Web Design", "UI & UX", "Development", "E-Commerce", "Corporate Website", "Personal Website", "Mobile App", "CMS Development"]
        },


        {
            heading: "Digital Marketing",
            paragraph: "The digital landscape has grown emphatically and shows no signs of slowing down! More and more people are spending more and more time online. This is an opportunity that cannot be missed. And at Creative Mud, we've got the right people, right tools and the right skill set to help you become the master of the digital world.",
            title: "Services",
            listItems: ["Social Media Strategy", "Content Marketing", "Campaign Ads", "Analysis Marketing", "Reporting", "Search Engine Marketing", "Search Engine Advertising", "Search Engine Optimization"]
        },
    ];

    // Group dataArrays into rows with 2 cards each
    const rows = [];
    for (let i = 0; i < dataArrays.length; i += 2) {
        rows.push(dataArrays.slice(i, i + 2));
    }

    return (
        <>
            <div className={ `${styles.serviceTitle} ${styles.leftAlign}`}> {/* Added styles.leftAlign */}
                <h1>What We Do</h1>
                <p>We create work that captures both the <br />attention and the imagination</p>
            </div>

            <div className={styles.container}>
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className={styles.row}>
                        {row.map((data, index) => (
                            <div key={index} className={styles.card}>
                                <h1 className={styles.heading}>{data.heading}</h1>
                                <p className={styles.paragraph}>{data.paragraph}</p>
                                <h1 className={styles.service}>{data.title}</h1>
                                <ul className={styles.list}>
                                    {data.listItems.map((item, itemIndex) => (
                                        <li key={itemIndex} className={styles.listItem}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default YourPage;
