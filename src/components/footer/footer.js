import React from "react";
import '../footer/footer.css'
import {FaFacebook, FaInstagram, FaTelegram} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'


export default function Footer(){
    return(
        <footer id="footer-container" className="bg-dark">
            <div className="container">
                <div className="row">
                   <div className="col-sm-12 col-md-6 col-lg-6 someArea">
                        <h5 className="areaTitle">Navegar</h5>
                        <ul id="footer-link-list">
                            <li className=""><Link className="footer-link" to='/'>Início</Link></li>
                            <li className=""><Link className="footer-link" to='/anexos'>Anexos</Link></li>
                            <li className=""><Link className="footer-link">Artigos</Link></li>
                        </ul>
                   </div>
                   <div className="col-sm-12 col-md-6 col-lg-6 someArea">
                        <h5 className="areaTitle">Contactar</h5>
                        <div className="row">
                            <form id="form-contact" className="col-sm-12 col-md-6 col-lg-6">
                                <input className="form-contact-input" placeholder="Email"/>
                                <textarea className="form-contact-input" placeholder="Sua mensagem"/>
                                <button className="btn btn-primary">Enviar</button>
                            </form>
                            <div className="col-sm-12 col-md-6 col-lg-6" id="redes-area">
                                {/* <h6 id="redes-title">Redes</h6> */}
                                <ul id="redes-list">
                                    <li>
                                        <Link to='/' className="rede-link"><FaFacebook color="rgb(177, 177, 177)" size={25}/></Link>
                                    </li>
                                    <li>
                                        <Link to='/'  className="rede-link"><FaInstagram color="rgb(177, 177, 177)"  size={25}/></Link>
                                    </li>
                                    <li>
                                        <Link to='/'  className="rede-link"><FaTelegram color="rgb(177, 177, 177)"  size={25}/></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </footer>
    )
}