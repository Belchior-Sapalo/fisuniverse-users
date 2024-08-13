import "../searchBook/searchBook.css"
import {useSearchParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react";
import Card from "../../components/card/card"

import React from 'react'

export default function SearchBook() {
    const [searchParams] = useSearchParams()
    const [results, setResults] = useState([])
    const query = searchParams.get('q')
	const [havebooksInDatabase, setHavebooksInDatabase] = useState(false);
    const navigate = useNavigate()
    const API_URL = "http://localhost:8000"
    
    useEffect(()=>{
        const URL = `${API_URL}/procurarLivro/${query}`
        fetch(URL)
        .then((res)=>res.json())
        .then((json)=>{
            if(json.status != 404 && json.status != 500){
                setHavebooksInDatabase(true)
                setResults(json)
            }else{
                setHavebooksInDatabase(false)
                setResults([])
            }
        })
        .catch(error=>{
            alert("Servidor fora do ar")
        })
    },[query])

  return (
    <section id="searchBook-section">
        <h1 className="result-text text-center">Resultados para: {query}</h1>

        <div id="posts-container">
            {
                havebooksInDatabase ? results.map(book => {
                    return(
                        <Card title={book.title} autor={book.autorName} editora={book.editora} ano={book.ano} img={book.cover} description={book.description}/>
                    )
                }) : <h4>Nenhum resultado encontrado, verifique sua entrada</h4> 
            }
		</div>
    </section>
  )
}
