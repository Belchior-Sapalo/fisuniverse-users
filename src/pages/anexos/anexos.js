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
	const navigate = useNavigate()
	useEffect(()=>{
		const URL = 'http://localhost:8000/books'
		fetch(URL)
        .then((res)=>{
            if(res.status == 500){
                throw new Error('Falha no servidor')
            }
            return res.json()
        })
		.then((json)=>{
			if(json.founded){
				setBooks(json.result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
				setHavebooksInDatabase(true)
			}else{
				setHavebooksInDatabase(false)
			}
		}).catch(error => {
			navigate('/error')
		})
	}, [])

	return(
		<section id="anexos-section">
			  <div id="posts-container">
				{
					havebooksInDatabase ? books.map(book => {
						return(
							<Card title={book.title} autor={book.autor} editora={book.editora} ano={book.ano} id={book.id} description={book.description} link={book.link}/>
						)
					}) : <h4 className="text-center">Sem livros publicados</h4> 
				}
			</div>
		</section>
	)
}