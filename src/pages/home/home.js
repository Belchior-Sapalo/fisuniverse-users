import React, { useState, useEffect } from "react";
import '../home/home.css'
import Posts from "../../components/Posts/post";
import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagram, FaTelegram, FaYoutube} from 'react-icons/fa'

export default function Home(){
	
	return(
		<main className="">
			<section id="home-section" className="sec">
				<div id="home-content-container" className="container">
					<h1>Vicelino Chilua Simba</h1>
						<div>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores <br/> voluptas repellat  corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia,
						</div>
						<a href="#about-section" id="goDown-tbn" className="btn">Explorar</a>
						<div id="link-container">
							<Link className="external-link-home">
							<FaFacebook className="icon"/>
							</Link>
							<Link className="external-link-home">
								<FaInstagram className="icon"/>
							</Link>
							<Link className="external-link-home">
								<FaTelegram className="icon"/>
							</Link>
							<Link className="external-link-home">
								<FaYoutube className="icon"/>
							</Link>
					</div>
				</div>
			</section>
			<section id="about-section" className="sec container">

				<div id="about-content" className="row container">
					<div className="col-12 about-content">
						<h4 className="sec-title text-center">Sobre mim</h4>
						
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 about-content">
						<h4 className="sec-title">Formação</h4>
						
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 about-content">
						<h4 className="sec-title">Obras</h4>
						
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
					</div>
				</div>
			</section>
			<section id="post-section" className="sec container">
				<div id="posts-container">
					<h4 className="sec-title text-center">Publicações</h4>
					<Posts/>
				</div>
			</section>
		</main>
	)
}