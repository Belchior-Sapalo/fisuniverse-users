import React from "react";
import { useEffect, useState } from "react";
import '../anexos/anexos.css'
import {FaMessage} from 'react-icons/fa6'
import {useNavigate} from 'react-router-dom'
import { formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale';
import Card from "../../components/card/card";

export default function Anexos(){
	const [books, setBooks] = useState([]);
	const [havebooksInDatabase, setHavebooksInDatabase] = useState(false);

	useEffect(()=>{
		const URL = 'http://localhost:8000/books'
		fetch(URL)
		.then((res)=>res.json())
		.then((json)=>{
			if(json.status != 404){
				setBooks(json.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
				setHavebooksInDatabase(true)
			}else{
				setHavebooksInDatabase(false)
			}
		})
	}, [])

	return(
		<section id="anexos-section">
			  <div id="posts-container">
				{
					havebooksInDatabase ? books.map(book => {
						return(
							<Card title={book.title} autor={book.autorName} editora={book.editora} ano={book.ano} img={book.cover} description={book.description} link={book.link}/>
						)
					}) : <h4 className="text-center">Sem livros publicados</h4> 
				}
			</div>
		</section>
	)
}