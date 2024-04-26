'use client'
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

import Footer from '../components/footerPage';
import WhatsAppContactButton from '../components/whatsapp';

import ClientsSection from '../components/client';
import ContactForm from '../components/contact';
import Navbar from '../components/navBar';
import VideoPage from '../components/video';
import AniText from '../../src/app/animatedText/page';
import LandingPage from '../../src/app/landingPage/page';




const images = [
  '/assets/marketingServices.jpg',
  '/assets/marketingServices.jpg',
  '/assets/marketingServices.jpg',
  '/assets/marketingServices.jpg',

  // Add more image URLs as needed
];

const videos = [
  '/assets/bgvideo.mp4',
  '/assets/bgvideo.mp4',
  '/assets/bgvideo.mp4',
  '/assets/bgvideo.mp4',
  // Add more video URLs as needed
];



const Home = () => {

  return (
    <main>
  <section>
    <AniText/>
    <LandingPage/>
    <VideoPage/>
  </section>
  
  <section style={{ backgroundColor: "#f8f9fa" }}>

    <section>
      <div className="servicescontainerStyle">
        <p className="servicesheadingStyle">We're innovators pushing boundaries, committed to excellence in every project. With deep understanding, we connect meaningfully for impactful results.</p>
        <Link href="/services"><button className="servicebuttonStyleabout">Our Services</button></Link>
      </div>
    </section>
    <section className="contactSectionStyle">
      <h1 className="contactHeadingStyle">Let's Work Together</h1>
      <p className="contactParagraphStyle">
        We work with clients from start-up to global company. If you've got a project, get in touch, and we'll get the ball rolling.
      </p>
      <Link href="/contact" className="contactLinkStyle">Contact Us Now</Link>
    </section>
    <section className="clientSection">
      <ClientsSection />
    </section>
    <section>
      <Footer />
    </section>
  </section>
</main>

  );
};

export default Home;

// Styles


// const sectionStyle = {
//   position: 'relative',
//   height: '100vh',
//   width: 'auto',
//   display: 'flex',
//   justifyContent: 'left',
//   alignItems: 'center',
//   paddingLeft: '200px',
// };

// const bgvideoStyle = {
//   position: 'absolute',
//   top: '-10px',
//   left: 0,
//   zIndex: -10,
//   height: "auto",
//   width: "100vw",
// };

// const contentStyle = {
//   textAlign: 'left',
// };

// const h1Style = {
//   fontSize: '3.5em',
//   margin: '20px 0',
//   color: '#000000',
//   fontWeight: '700',
// };

// const h3Style = {
//   fontSize: '1.2em',
//   margin: '10px 0',
//   color: '#000000',
//   fontWeight: '700',
// };

// const buttonStyle = {
//   padding: '10px 20px',
//   fontSize: '1em',
//   backgroundColor: '#',
//   color: 'white',
//   border: '2px solid white',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   fontWeight: '500',
//   marginTop: '20px',
//   boxShadow: '0 0 10px 5px white',



// };



// const servicescontainerStyle = {
//   maxWidth: '100vw',
//   height: 'auto',
//   marginTop: '50px',
//   padding: '40px 20px',
//   textAlign: 'center',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-evenly',
//   backgroundColor: '#f8f9fa',
//   color: '#000000',
// };

// const servicesheadingStyle = {

//   fontSize: '24px',
//   marginBottom: '30px',
//   lineHeight: '1.5',
//   width: "40vw",
// };

// const servicebuttonStyleabout = {


//   color: '#000000',
//   padding: '15px 30px',
//   fontSize: '16px',
//   borderRadius: '5px',
//   border: '2px solid #000000',
//   cursor: 'pointer',
//   alignSelf: 'flex-start',
//   fontWeight: '500',

// };

// // const buttonContainerStyle = {
// //   display: 'flex',
// //   justifyContent: 'space-evenly',
// //   width: '100%',
// //   marginTop: '20px',
// // };



// // about 

// const containerStyle = {
//   textAlign: 'center',
//   padding: '20px',
//   backgroundColor: '#f8f9fa',
//   color: "#000000",
// };

// const headingStyle = {
//   fontSize: '2.5em',
//   marginBottom: '20px',
// };

// const imageParaStyle = {
//   display: 'flex',
//   justifyContent: 'space-evenly', // Change to 'space-between'
//   alignItems: 'center',
//   gap: '20px',
// };

// const imageStyle = {
//   width: '500px',
//   height: "auto",
//   borderRadius: '5px',
//   marginBottom: '20px',
// };

// const paragraphStyle = {
//   fontSize: '24',
//   marginBottom: '20px',
//   width: '40%',
// };



// // gallery css

// const gallerySection = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: '#f8f9fa',
//   color: '#000000'
// }

// const galleryContainerStyle = {

//   width: "80%",
//   height: "auto",
//   textAlign: 'center',
//   padding: '20px',
//   right: 0,
// };

// const galleryHeadingStyle = {
//   fontSize: '2.5em',
//   marginBottom: '20px',
// };

// const galleryImageContainerStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Adjust based on your requirement
//   gap: '10px',
//   justifyContent: 'center',
// };

// const galleryimageStyle = {
//   maxWidth: '100%',
//   height: 'auto',
//   borderRadius: '5px',
// };

// //video css

// const videoContainerStyle = {
//   textAlign: 'center',
//   padding: '20px',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   color: 'black',
//   backgroundColor: '#f8f9fa',
// };

// const videoHeadingStyle = {
//   fontSize: '2.5em',
//   marginBottom: '20px',
//   textAlign: 'center',
// };

// const videoPlayerContainerStyle = {
//   display: 'flex',
//   flexWrap: 'wrap',
//   gap: '10px',
//   justifyContent: 'center',
// };

// const videoStyle = {
//   width: '275px',
//   height: 'auto',
//   borderRadius: '5px',
//   transition: 'transform 0.3s ease',
// };

// // contact

// const contactSectionStyle = {
//   padding: '50px',
//   textAlign: 'center',
//   backgroundColor: '#f9f9f9',
// };

// const contactHeadingStyle = {
//   fontSize: '36px',
//   color: '#333',
//   marginBottom: '20px',
// };

// const contactParagraphStyle = {
//   fontSize: '18px',
//   color: '#666',
//   marginBottom: '30px',
// };

// const contactLinkStyle = {
//   display: 'inline-block',
//   padding: '10px 20px',
//   // backgroundColor: '#007bff',
//   border: " 2px solid black",
//   color: '#000000',
//   textDecoration: 'none',
//   borderRadius: '5px',
//   fontSize: '20px',
// };


// const clientSection = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
  

// }




// const mediaQuery = '@media (max-width: 768px)';

// const sectionMediaQuery = {
//   [mediaQuery]: {
//     paddingLeft: '20px',
//   },
// };

// const servicesheadingMediaQuery = {
//   [mediaQuery]: {
//     width: '80vw',
//   },
// };

// const paragraphMediaQuery = {
//   [mediaQuery]: {
//     width: '80%',
//   },
// };

// const imageParaMediaQuery = {
//   [mediaQuery]: {
//     flexDirection: 'column',
//     gap: '10px',
//   },
// };

// const imageMediaQuery = {
//   [mediaQuery]: {
//     width: '100%',
//   },
// };

// const galleryImageContainerMediaQuery = {
//   [mediaQuery]: {
//     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//     gap: '5px',
//   },
// };

// const videoPlayerContainerMediaQuery = {
//   [mediaQuery]: {
//     flexDirection: 'column',
//   },
// };

// const videoMediaQuery = {
//   [mediaQuery]: {
//     width: '100%',
//   },
// };

// // Merge base styles with media query styles

// const mergeStyles = (base, query) => {
//   return { ...base, ...query };
// };

// // Apply media query styles to your components

// const sectionStyleMerged = mergeStyles(sectionStyle, sectionMediaQuery);
// const servicesheadingStyleMerged = mergeStyles(servicesheadingStyle, servicesheadingMediaQuery);
// const paragraphStyleMerged = mergeStyles(paragraphStyle, paragraphMediaQuery);
// const imageParaStyleMerged = mergeStyles(imageParaStyle, imageParaMediaQuery);
// const imageStyleMerged = mergeStyles(imageStyle, imageMediaQuery);
// const galleryImageContainerStyleMerged = mergeStyles(galleryImageContainerStyle, galleryImageContainerMediaQuery);
// const videoPlayerContainerStyleMerged = mergeStyles(videoPlayerContainerStyle, videoPlayerContainerMediaQuery);
// const videoStyleMerged = mergeStyles(videoStyle, videoMediaQuery);

// // ... (Your JSX code where you apply the merged styles)