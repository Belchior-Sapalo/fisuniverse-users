import { formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale';
import React, { useEffect, useState } from "react";
import { FaMessage } from 'react-icons/fa6';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API_URL } from "../../components/globalVarables/variaveis";
import ComentForm from "../../components/postComentForm/comentForm";
import '../search/search.css';
import ScrollTop from "../../components/scrollTop/scrollTop";

export default function Search(){
    const [searchParams] = useSearchParams()
    const [results, setResults] = useState([])
    const [verComents] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const query = searchParams.get('q')
    const [foundedSomeResult, setFoundedSomeResult] = useState(false)
    const navigate = useNavigate()

    function handleSeePostComments(postId){
		navigate(`/post?q=${postId}`)
	}

    useEffect(()=>{
        setIsLoading(true)
        const URL = `${API_URL}/posts/search/${query}`
        fetch(URL)
        .then((res)=>{
            if(res.status === 500){
                throw new Error('Falha no servidor')
            }
            return res.json()
        })
        .then((json)=>{
            if(json.founded){
                setResults(json.result)
                setFoundedSomeResult(true)
                setIsLoading(false)
            }else{
                setResults(json.msg)
                setFoundedSomeResult(false)
                setIsLoading(false)
            }
        }).catch(error => {
            navigate('/error')
        })
    },[navigate, query])
    
    function formatarData(data){
		const createdAtFormated = formatDistanceToNow(data, { addSuffix: true, locale: ptBR });
		return createdAtFormated;
	}

    return(
        <section id="search-section">
            {/* <h1 className="result-text text-center">Resultados para: {query}</h1> */}
            <div id="results-container" className="container">
            <ScrollTop/>
			{ 

                foundedSomeResult ? results.map(result=>{
                    return(
                        <div className="result">
                            <div className="result-title-and-back-btn">
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
                            {
                                result.anexo && <a className="anexo" href={result.anexo} target="_blank" rel="noreferrer">{result.anexo}</a>
				           }
                            <button className="btn ver-coments" onClick={()=>handleSeePostComments(result.id)}><FaMessage color="rgba(0, 0, 0, 0.5)"/> Comentários</button>
                            <div className="result-coments" style={{display: verComents? 'inline': 'none'}}>
                            <ComentForm postId={result.id}/>	
                            </div>
                        </div>
                    )
                }): isLoading ? <h4 className="p-4 text-center">Buscando resultados...</h4> : <h4 className="p-4 text-center">Nenhum resultado encontrado</h4>
			}
		</div>
        </section>
    )
}