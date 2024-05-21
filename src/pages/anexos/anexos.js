import React from "react";
import '../anexos/anexos.css'
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import cover1 from '../../assets/images/back6.jpg'

export default function Anexos(){
	return(
		<section id="anexos-section">
			<div className="row">
				<Card 
					image={cover1}
					title="Fisica das coisas" description="livro de fisica" 
					ano="2024"
				/>
				<Card 
					image={cover1}
					title="Fisica das coisas" description="livro de fisica" 
					ano="2024"
				/>
				<Card 
					image={cover1}
					title="Fisica das coisas" description="livro de fisica" 
					ano="2024"
				/>
				<Card 
					image={cover1}
					title="Fisica das coisas" description="livro de fisica" 
					ano="2024"
				/>
				<Card 
					image={cover1}
					title="Fisica das coisas" description="livro de fisica" 
					ano="2024"
				/>
			</div>
		</section>
	)
}