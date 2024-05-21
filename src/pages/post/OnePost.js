import {useSearchParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import '../post/OnePost.css'
import ComentForm from '../../components/postComentForm/comentForm'

export default function(){
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const [coments, setComents] = useState([])
    const q = searchParams.get('q')

    function voltar(){
        navigate(-1)
    }

    useEffect(()=>{
        const URL = `http://localhost:8000/post/${q}`

        fetch(URL)
        .then((res)=>res.json())
        .then((json)=>{setPost(json); setComents(json.coments)})
    },[])

    function formatarData(data){
		const dateToFormat = new Date(data)
		const dateFormated = dateToFormat.toLocaleString()

		return dateFormated;
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
                {post.createdAt}
            </p>
            <div className="post-content">
                {post.content}
            </div>
            <ComentForm postId={q}/>
            {
                coments.length == 0? <p>Sem comentários</p>: coments.map(coment => {
                return(
                    <div className="coment">
                        <div className='coment-header'>
                            <h5 className="coment-autor">{coment.autorName}</h5>
                            <p className="coment-data">{formatarData(coment.createdAt)}</p>
                        </div>
                        <p className="coment-email">{coment.autorEmail}</p>
                        <p className="coment-content">{coment.content}</p>
                    </div>
                )
                })
            }
        </div>
    )
}