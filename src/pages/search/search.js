import React, {useEffect, useState} from "react";
import {useSearchParams, useNavigate} from 'react-router-dom'
import '../search/search.css'
import {FaArrowLeft, FaMessage} from 'react-icons/fa6'
import ComentForm from "../../components/postComentForm/comentForm";
import { formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale';

export default function Search(){
    const [searchParams] = useSearchParams()
    const [results, setResults] = useState([])
    const [verComents, setVerComents] = useState(false)
    const query = searchParams.get('q')
    const navigate = useNavigate()
    const API_URL = "http://localhost:8000"

    function verPost(postId){
		navigate(`/post?q=${postId}`)
	}

    function voltar(){
        navigate(-1)
    }

    useEffect(()=>{
        const URL = `${API_URL}/posts/search/${query}`
        fetch(URL)
        .then((res)=>res.json())
        .then((json)=>setResults(json))
        .catch(error=>{
            alert("Servidor fora do ar")
        })
    },[query])
    
    function formatarData(data){
		const createdAtFormated = formatDistanceToNow(data, { addSuffix: true, locale: ptBR });
		return createdAtFormated;
	}

    return(
        <section id="search-section">
            {/* <div id='search-result-header'>
                <div id='back-btn-container'>
                </div>
                <h1 className="result-text text-center">Resultados para: {query}</h1>
            </div> */}
            <div id="results-container" className="container">
			{ 
				results.map(result=>{
					if(!result.msg){
                        return(
                            <div className="result">
                                <div className="result-title-and-back-btn">
                                    <button id='back-btn' onClick={()=>voltar()}><FaArrowLeft/></button>
                                    <h4>{result.title}</h4>
                                </div>
    
                                <p className="result-autor">
                                    {result.autor}
                                </p>
                                <p className="result-data-create">
                                    {formatarData(result.createdAt)}
                                </p>
                                <div className="result-content">
                                    {result.content}
                                </div>
                                <button className="btn ver-coments"  onClick={()=>verPost(result.id)}><FaMessage/></button>
                                <div className="result-coments" style={{display: verComents? 'inline': 'none'}}>
                                <ComentForm postId={result.id}/>	
                                </div>
                            </div>
                        )
                    }else{
                        return(
                            <h4 className="text-center">{result.msg}</h4>
                        )
                    }
				})
			}
		</div>
        </section>
    )
}