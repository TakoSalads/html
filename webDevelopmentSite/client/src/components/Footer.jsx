import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2024 MyWebsite. All rights reserved.</p>
            <nav>
            <ul class="footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
        </div>
        </footer>
    )
}

export default Footer;