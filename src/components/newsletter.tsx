import React, { useRef, useState, useEffect, ReactElement } from 'react';
import './newsletter.css';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
    const serviceId = 'service_wwilbgk';
    const templateId = 'template_t1eorf4';
    const userId = 'user_3BapLzl1Omjc3DfZgRJWp';
    const form = useRef(null);

    const [subscribed, setSubscribed] = useState<boolean>(false);
    const [emailSubscription, setEmailSubscription] = useState<ReactElement<any, any>>();

    useEffect(() => {
        setEmailSubscription(subscribed ?
        <div className='succes-message'> Thank you !</div>
        :
        <form ref={form} className='newsletter-subscribe' method='POST' onSubmit={sendEmail} id="contact-form">
            <input className='newsletter-input' type="email" placeholder='Email' name="to_name" id="to_name" required />
            <input className='newsletter-button' type="submit" value="SUBMIT" />
        </form>);

        console.log(emailSubscription);
      }, [subscribed]);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElement = form.current;
        if(formElement) {
            emailjs.sendForm(serviceId, templateId, formElement, userId)
            .then((result) => {
                console.log(`SUCCESS --> ${result.text}`);
                setSubscribed(true);
            }, (error) => {
                console.log(`ERROR --> ${error.text}`);
                setSubscribed(false);
            });
        }
    }
  
    return (
        <div className='newsletter'>
            <h2> Newsletter </h2>
            <p className='message'>
                Want to know all the things? Announcements, behind the scenes, new games ?<br/>
                <strong>Subscribe to the newsletter.</strong> No spam, no passing your email address around. 
            </p>
            {emailSubscription}
        </div>
    );
}

export default Newsletter;