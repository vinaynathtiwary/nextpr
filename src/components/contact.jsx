'use client'

import React,{ useState }  from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [first_name, setfirstName] = useState('');
    const [last_name, setlastName] = useState('');
    const [number, setnumber] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    const firstnameHandler = (e) => {
        setfirstName(e.target.value);
    }
    const lastnameHandler = (e) => {
        setlastName(e.target.value);
    }
    const numberHandler = (e) => {
        setnumber(e.target.value);
    }
    const emailHandler = (e) => {
        setemail(e.target.value);
    }
    const messageHandler = (e) => {
        setmessage(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const serviceId = 'service_hvkx3ib';
        const templateId = 'template_el63tbs';
        const publicKey = 'UUgIhKuSy6_0B7pmO';

        const templateParams = {
            first_name: first_name,
            last_name: last_name,
            number: number,
            email: email,
            message:message,
            to_name: 'NextConcept',
        };
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Success Sent", response);
                setfirstName('');
                setlastName('');
                setnumber('');
                setemail('');
                setemessage('');
                
            })
            .catch((error) => {
                console.log("Error:", error)
            });
    }


    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-container">
                <label htmlFor="firstName">First Name</label>
                <input value={first_name} onChange={firstnameHandler} type="text" id="firstName" className="input-field" placeholder="Enter your first name" />
            </div>
            <div className="input-container">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" value={last_name} onChange={lastnameHandler} id="lastName" className="input-field" placeholder="Enter your last name" />
            </div>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={emailHandler} type="email" id="email" className="input-field" placeholder="Enter your email address" />
            </div>
            <div className="input-container">
                <label htmlFor="contactNo">Contact Number</label>
                <input value={number} onChange={numberHandler} type="text" id="contactNo" className="input-field" placeholder="Enter your contact number" />
            </div>
            <div className="input-container">
                <label htmlFor="message">Message</label>
                
                <textarea value={message} onChange={messageHandler} id="message" className="input-field pl-[10px]" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <input type="submit" className="submit-button"/>
        </form>
    );
};

export default Contact;
