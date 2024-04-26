'use client'
import React from 'react';
import Image from 'next/image';
import styles from '../../css/landingPage.module.css'; // Importing a CSS module for custom styles
// import Navbar from '../../components/navBar';
import WhatsAppContactButton from '../../components/whatsapp';


const Landingpage = () => {
    return (
        <>
        <WhatsAppContactButton/>
            {/* <Navbar></Navbar> */}
            <main className={styles.main} style={{ backgroundImage: `url('/assets/bg3.jpg')` }}>
                <section className={styles.section}>
                    <div className={styles.content}>
                        <Image src='/assets/logoimg2.png' alt="Logo" width={500} height={350} className={styles.logo} />
                        <h1>Content Based Out Of Creative Concept</h1>
                        <button className={styles.button}>Let's Start</button>
                    </div>
                </section>

              
            </main>
        </>
    );
};

export default Landingpage;
