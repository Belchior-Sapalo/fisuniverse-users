import React from "react";
import { useEffect, useState } from "react";
import '../Posts/post.css'
import {FaMessage} from 'react-icons/fa6'
import {useNavigate} from 'react-router-dom'
import { formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale';

export default function Posts(){
	const [posts, setPosts] = useState([])
	const navigate = useNavigate()
	const [havePostsInDatabase, setHavePostsInDatabase] = useState(false);

	function verPost(postId){
		navigate(`/post?q=${postId}`)
	}

	useEffect(()=>{
		const URL = 'http://localhost:8000/verPosts'
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
								{post.content}
							</div>
							
							<button className="btn ver-coments" onClick={()=>verPost(post.id)}><FaMessage color="rgba(0, 0, 0, 0.5)"/></button>
						</div>
					)
				}): <h5>Sem publicações...</h5>
			}
		</div>
	)
}