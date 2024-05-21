import React, {useEffect, useState} from "react";
import {useSearchParams, useNavigate} from 'react-router-dom'
import '../search/search.css'
import {FaThumbsUp, FaMessage} from 'react-icons/fa6'
import Navbar from "../../components/navbar/navbar";
import ComentForm from "../../components/postComentForm/comentForm";

export default function Search(){
    const [searchParams] = useSearchParams()
    const [results, setResults] = useState([])
    const [verComents, setVerComents] = useState(false)
    const query = searchParams.get('q')
    const navigate = useNavigate()

    function verPost(postId){
		navigate(`/post?q=${postId}`)
	}

    useEffect(()=>{
        const URL = `http://localhost:8000/procurarPost/${query}`
        fetch(URL)
        .then((res)=>res.json())
        .then((json)=>setResults(json))
        .catch(error=>{
            alert("Servidor fora do ar")
        })
    },[query])
    
    return(
        <section id="search-section" className="">
            <h1 className="result-text text-center">Resultados para: {query}</h1>

            <div id="results-container" className="container">
			{ 
				results.map(result=>{
					if(!result.msg){
                        return(
                            <div className="result">
                                <p className="result-title">
                                    {result.title}
                                </p>
    
                                <p className="result-autor">
                                    {result.autor}
                                </p>
                                <p className="result-data-create">
                                    {result.createdAt}
                                </p>
                                <div className="result-content">
                                    {result.content}
                                </div>
                                <button className="btn ver-coments"  onClick={()=>verPost(result.id)}><FaMessage/></button>
                                <div className="result-coments" style={{display: verComents? 'inline': 'none'}}>
                                <ComentForm postId={result.id}/>	
                                    {
                                        result.coments.length == 0? <p>Sem comentários</p>: result.coments.map(coment => {
                                        return(
                                            <div className="coment">
                                                <p className="coment-autor">{coment.autorName}</p>
                                                <p className="coment-email">{coment.autorEmail}</p>
                                                <p className="coment-data-create">{coment.createdAt}</p>
                                                <p className="coment-content">{coment.content}</p>
                                            </div>
                                        )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }else{
                        return(
                            <h4>{result.msg}</h4>
                        )
                    }
				})
			}
		</div>
        </section>
    )
}