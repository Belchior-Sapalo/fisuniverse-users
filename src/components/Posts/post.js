import React from "react";
import { useEffect, useState } from "react";
import '../Posts/post.css'
import {FaMessage} from 'react-icons/fa6'
import {useNavigate} from 'react-router-dom'
import { formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale';

export default function Posts(){
	const [posts, setPosts] = useState([])
	const [isExpanded, setIsExpanded] = useState(false)
	const maxLength = 200;
	const navigate = useNavigate()
	const [havePostsInDatabase, setHavePostsInDatabase] = useState(false);

	function handleSeePostComments(postId){
		navigate(`/post?q=${postId}`)
	}

	const toggleExpand = () => {
		setIsExpanded(!isExpanded)
	}

	useEffect(()=>{
		const URL = 'http://localhost:8000/posts'
		fetch(URL)
		.then((res)=>res.json())
		.then((json)=>{
			if(json.status != 404){
				setPosts(json.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
				setHavePostsInDatabase(true)
			}else{
				setHavePostsInDatabase(false)
			}
		})
	}, [])

	function formatarData(data){
		const createdAtFormated = formatDistanceToNow(data, { addSuffix: true, locale: ptBR });
		return createdAtFormated;
	}
	return(
		<div id="posts-container" className="container">
			{ 
				havePostsInDatabase ? posts.map(post=>{
					return(
						<div className="post">
							<p className="post-title">
								{post.title}
							</p>

							<p className="post-autor">
								{post.autor}
							</p>
							<p className="post-data-create">
								{formatarData(post.createdAt)}
							</p>
							<div className="post-content">
								{ isExpanded ?  post.content : `${post.content.substring(0, maxLength)}...`}
							</div>
							{
								post.anexo ?
								<a className="anexo" href="#" target="_blank">{post.anexo}</a>:
								<p></p>
							}
							
							<div id="post-more-options">
								<button className="btn" onClick={toggleExpand}>{isExpanded ? 'Ver menos' : 'Ver mais'}</button>
								<button className="btn ver-coments" onClick={()=>handleSeePostComments(post.id)}><FaMessage color="rgba(0, 0, 0, 0.5)"/> Comentários</button>
							</div>
						</div>
					)
				}): <h5>Sem publicações...</h5>
			}
		</div>
	)
}