import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Posts from "../../components/Posts/post";
import '../home/home.css';
import ScrollTop from "../../components/scrollTop/scrollTop";

export default function Home(){
	
	function scrollToAboutSection(id){
		const element = document.getElementById(id)
		if(element){
			element.scrollIntoView({behavior: 'smooth'})
		}
	}

	return(
		<main className="">
			<section id="home-section" className="sec">
				<ScrollTop/>
				<div id="home-content-container" className="container">
					<h1 id="admin-name">Vicelino Chilua Simba</h1>
						<div>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores <br/> voluptas repellat  corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia,
						</div>
						<button id="goDown-tbn" onClick={()=>scrollToAboutSection('about-section')} className="btn">Explorar</button>
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
					<h4 className="sec-title p-3 text-center">Publicações</h4>
					<Posts/>
				</div>
			</section>
		</main>
	)
}