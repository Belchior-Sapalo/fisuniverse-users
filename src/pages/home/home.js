import React, { useState } from "react";
import '../home/home.css'
import admImg from '../../assets/images/about-img.png'
import Posts from "../../components/Posts/post";

export default function Home(){
	return(
		<main className="">
			<section id="home-section" className="sec">
				<div id="home-content-container" className="row">
					<div id="home-text-form-search" className="col-sm-12 col-md-12 col-lg-6">
						<h1>Vicelino Chilua</h1>
					</div>
					<div id="home-img" className="col-sm-12 col-md-12 col-lg-6">
						<img src={admImg} className="img-fluid"></img>
					</div>
				</div>
			</section>
			<section id="about-section" className="sec container">

				<div id="about-content" className="row container">
					<div className="col-12 about-content-div">
						<h4 className="sec-title text-center">Sobre mim</h4>
						
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 about-content-div">
						<h4 className="sec-title">Formação</h4>
						
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 about-content-div">
						<h4 className="sec-title">Obras</h4>
						
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis asperiores voluptas repellat corporis, quam tempore vel enim officia itaque adipisci eveniet doloremque mollitia, consequatur architecto? Dicta sint aliquid est.
					</div>
				</div>
			</section>
			<section id="post-section" className="sec container">
				<h4 className="text-center sec-title">Publicações</h4>
				<Posts/>
			</section>
		</main>
	)
}