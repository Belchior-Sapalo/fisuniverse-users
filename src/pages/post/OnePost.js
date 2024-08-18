import {useSearchParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import '../post/OnePost.css'
import ComentForm from '../../components/postComentForm/comentForm'
import { formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale';
import Logo from '../../components/logo/logo'

export default function(){
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [haveComments, setHaveComments] = useState(false)
    const [isLoadingPost, setIsLoadingPost] = useState(false)
    const [isLoadingComments, setIsLoadingComments] = useState(false)
    const q = searchParams.get('q')
    const API_URL = "http://localhost:8000"

    function voltar(){
        navigate(-1)
    }

    useEffect(()=>{
        setIsLoadingPost(true)
        setIsLoadingComments(true)
        const URL = `${API_URL}/post/${q}`
        fetch(URL)
        .then((res)=>{ 
            if(res.status == 500){
                throw new Error('Falha no servidor')
            }

            return res.json()
        })
        .then((json)=>{
            if(json.founded){
                setPost(json.post);
                setIsLoadingPost(false)
                if(json.comments.length != 0){
                    setComments(json.comments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
                    setHaveComments(true)
                    setIsLoadingComments(false)
                }else{
                    setHaveComments(false)
                    setIsLoadingComments(false)
                }
                setIsLoadingPost(false)
            }
        }).catch(error => {
            navigate('/error')
        })
    },[])

    function formatarData(data){
		const createdAtFormated = formatDistanceToNow(data, { addSuffix: true, locale: ptBR });
		return createdAtFormated;
	}

    function Header(){
		return(
			<nav id="header">
                <button id='back-btn' onClick={()=>voltar()}><FaArrowLeft/></button>
				<div id="logo-container">
					<Logo/>
				</div>
			</nav>
		)
	}
    
    return(
        // <div className="post row" >
        //     <div id='post-section' className='col-sm-12 col-md-6 col-lg-6'>
        //         <div className="post-title-and-back-btn">
        //             <button id='back-btn' onClick={()=>voltar()}><FaArrowLeft/></button>
        //             <h4>{post.title}</h4>
        //         </div>
        //         <p className="post-autor">
        //             {post.autor}
        //         </p>
        //         <p className="post-data-create">
        //             {}
        //         </p>
        //         <div className="post-content">
        //             {post.content}
        //         </div>
        //     </div>
        //     <div id='comements-section' className='col-sm-12 col-md-6 col-lg-6 row'>
        //         <div id='comements-container' className='col-sm-12'>
        //             {
        //                 haveComments ? <p>Sem comentários</p>: comments.map(comment => {
        //                 return(
        //                     <div className="coment">
        //                         <div className='coment-header'>
        //                             <p className="coment-email">{comment.email}</p>
        //                             <p className="coment-data">{formatarData(comment.createdAt)}</p>
        //                         </div>
        //                         <p className="coment-content">{comment.content}</p>
                    
        //                     </div>
        //                     )
        //                 })
        //             }
        //         </div>
        //         <div className='col-sm-12'>
        //             <ComentForm postId={q}/>
        //         </div>
        //     </div>
        // </div>
        <div className="post container">
            <Header/>
            {
                isLoadingPost ? <h5>Aguarde...</h5> :
                <div>
                    <h4>{post.title}</h4>
                    <p className="post-autor">
                        {post.autor}
                    </p>
                    <p className="post-data-create">
                        {}
                    </p>
                    <div className="post-content">
                        {post.content}
                    </div>
                </div>
            }
            <ComentForm postId={q}/>
            <div id='comements-section' className=''>
                <div id='comements-container'>
                    {
                        haveComments ? comments.map(comment => {
                            return(
                                <div className="coment">
                                    <div className='coment-header'>
                                        <p className="coment-email">{comment.email}</p>
                                        <p className="coment-data">{formatarData(comment.createdAt)}</p>
                                    </div>
                                    <p className="coment-content">{comment.content}</p>
                        
                                </div>
                                )
                        }): isLoadingComments ? <p>Buscando comentários...</p> : <p>Sem comentários</p>
                    }
                </div>
            </div>
        </div>
    )
}