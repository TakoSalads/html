import React from "react";
import ContactForm from "./contact form/ContactForm";
import ContactInfo from "./contact info/ContactInfo";
import "./ContactPage.css";

function ContactPage() {
    return(
        <div className="contact-page">
            <ContactInfo/>
            <ContactForm/>
        </div>
    )

}

export default ContactPage;

