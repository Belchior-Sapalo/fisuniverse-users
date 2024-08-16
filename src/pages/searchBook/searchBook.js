import "../searchBook/searchBook.css"
import {useSearchParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react";
import {FaArrowLeft} from 'react-icons/fa'
import Card from "../../components/card/card"

import React from 'react'

export default function SearchBook() {
    const [searchParams] = useSearchParams()
    const [results, setResults] = useState([])
    const query = searchParams.get('q')
	const [havebooksInDatabase, setHavebooksInDatabase] = useState(false);
    const navigate = useNavigate()
    const API_URL = "http://localhost:8000"

    function voltar(){
        navigate(-1)
    }

    
    useEffect(()=>{
        const URL = `${API_URL}/books/search/${query}`
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
        {/* <div id='search-result-header'>
            <div id='back-btn-container'>
                <button id='back-btn' onClick={()=>voltar()}><FaArrowLeft/></button>
            </div>
            <h1 className="result-text text-center">Resultados para: {query}</h1>
        </div> */}

        <div id="posts-container">
            {
                havebooksInDatabase ? results.map(book => {
                    return(
                        <Card title={book.title} autor={book.autor} editora={book.editora} ano={book.ano} id={book.id} description={book.description}/>
                    )
                }) : <h4>Nenhum resultado encontrado, verifique sua entrada</h4> 
            }
		</div>
    </section>
  )
}
