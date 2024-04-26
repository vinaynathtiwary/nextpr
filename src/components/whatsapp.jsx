// components/WhatsAppContactButton.js
'use client'
import React from 'react';
import Image from 'next/image';


const WhatsAppContactButton = () => {
    const handleWhatsAppClick = () => {
        // Replace the phone number with your own WhatsApp number
        window.open('https://api.whatsapp.com/send?phone=918376897716', '_blank');
    };

    return (
        <button style={whatsappButton} onClick={handleWhatsAppClick}>
            <Image src="/assets/whatsapp.png" alt="WhatsApp Icon" width={50} height={50} />
        </button>
    );
};



export default WhatsAppContactButton;



const whatsappButton = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: '999', // Ensure it's above other content
};