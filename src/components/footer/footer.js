import React from "react";
import '../footer/footer.css'
import {FaFacebook, FaInstagram, FaTelegram} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'


export default function Footer(){
    return(
        <footer id="footer-container" className="bg-dark">
            <div id="content">
                <div id="contact-area"
                >
                    <Link className="external-link">
                        <FaFacebook className="icon"/>
                    </Link>
                    <Link className="external-link">
                        <FaInstagram className="icon"/>
                    </Link>
                    <Link className="external-link">
                        <FaTelegram className="icon"/>
                    </Link>
                </div>
                <div className="navigate-area">
                        <Link className="internal-link" to='/'>Início</Link> <p>.</p>
                        <Link className="internal-link" to='/anexos'>Anexos</Link>
                    </div>
                <div className="info-area">
                    <p> &copy; 2024 Belchior Cassumba Sapalo</p>
                </div>
            </div>
        </footer>
    )
}