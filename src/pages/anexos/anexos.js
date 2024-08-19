import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "../../components/card/card";
import '../anexos/anexos.css';
import { API_URL } from "../../components/globalVarables/variaveis";

export default function Anexos(){
	const [books, setBooks] = useState([]);
	const [havebooksInDatabase, setHavebooksInDatabase] = useState(false);
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()

	useEffect(()=>{
		setIsLoading(true)
		const URL = `${API_URL}/books`
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
				setIsLoading(false)
			}else{
				setHavebooksInDatabase(false)
				setIsLoading(false)
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
					}) : isLoading ?  <h5>Buscando livros...</h5> : <h5>Sem livros publicados...</h5>
				}
			</div>
		</section>
	)
}