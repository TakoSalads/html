import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
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

