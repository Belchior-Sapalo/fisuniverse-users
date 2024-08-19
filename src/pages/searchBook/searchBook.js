import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import Card from "../../components/card/card";
import "../searchBook/searchBook.css";
import { API_URL } from "../../components/globalVarables/variaveis";

import React from 'react';

export default function SearchBook() {
    const [searchParams] = useSearchParams()
    const [results, setResults] = useState([])
    const query = searchParams.get('q')
    const [isLoading, setIsLoading] = useState(false)
	const [havebooksInDatabase, setHavebooksInDatabase] = useState(false);
    const navigate = useNavigate()

    function voltar(){
        navigate(-1)
    }

    
    useEffect(()=>{
        setIsLoading(true)
        const URL = `${API_URL}/books/search/${query}`
        fetch(URL).then((res)=>{
            if(res.status == 500){
                throw new Error('Falha no servidor')
            }
            return res.json()
        }).then((json)=>{
            if(json.founded){
                setHavebooksInDatabase(true)
                setResults(json.result)
                setIsLoading(false)
            }else{
                setHavebooksInDatabase(false)
                setResults([])
                setIsLoading(false)
            }
        })
        .catch(error=>{
            navigate('/error')
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
                }) : isLoading ?  <h4 className="p-4">Buscando resultados...</h4> : <h4 className="p-4">Nenhum resultado encontrado</h4>
            }
		</div>
    </section>
  )
}
