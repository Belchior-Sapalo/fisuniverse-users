import {useSearchParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import '../post/OnePost.css'
import ComentForm from '../../components/postComentForm/comentForm'
import { formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale';

export default function(){
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const [coments, setComents] = useState([])
    const q = searchParams.get('q')
    const API_URL = "http://localhost:8000"

    function voltar(){
        navigate(-1)
    }

    useEffect(()=>{
        const URL = `${API_URL}/post/${q}`
        fetch(URL)
        .then((res)=>res.json())
        .then((json)=>{setPost(json); setComents(json.coments)})
    },[])

    function formatarData(data){
		const createdAtFormated = formatDistanceToNow(data, { addSuffix: true, locale: ptBR });
		return createdAtFormated;
	}
    
    return(
        <div className="post container">
            <div id='back-btn-container'>
                <button id='back-btn' onClick={()=>voltar()}><FaArrowLeft/></button>
            </div>
            <p className="post-title">
                {post.title}
            </p>

            <p className="post-autor">
                {post.autor}
            </p>
            <p className="post-data-create">
                {}
            </p>
            <div className="post-content">
                {post.content}
            </div>
            <ComentForm postId={q}/>
            {
                coments.length == 0 ? <p>Sem comentários</p>: coments.map(coment => {
                return(
                    <div className="coment">
                        <div className='coment-header'>
                            <p className="coment-email">{coment.autorEmail}</p>
                            <p className="coment-data">{formatarData(coment.createdAt)}</p>
                        </div>
                        <p className="coment-content">{coment.content}</p>
                    </div>
                )
                })
            }
        </div>
    )
}