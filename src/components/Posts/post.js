import React from "react";
import { useEffect, useState } from "react";
import '../Posts/post.css'
import {FaThumbsUp, FaThumbsDown, FaMessage} from 'react-icons/fa6'
import {useNavigate} from 'react-router-dom'

export default function Post(){
	const [posts, setPosts] = useState([])
	const navigate = useNavigate()

	function verPost(postId){
		navigate(`/post?q=${postId}`)
	}

	useEffect(()=>{
		const URL = 'http://localhost:8000/verPosts'
		fetch(URL)
		.then((res)=>res.json())
		.then((json)=>setPosts(json.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))))
		.catch(error=>{
			alert('Servidor fora do ar')
		})
	}, [])

	function formatarData(data){
		const dateToFormat = new Date(data)
		const dateFormated = dateToFormat.toLocaleString()

		return dateFormated;
	}
	return(
		<div id="posts-container" className="container">
			{ 
				posts.status? <h4>Sem publicações</h4>: posts.map(post=>{
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
							
							<button className="btn ver-coments" onClick={()=>verPost(post.id)}><FaMessage/></button>
						</div>
					)
				})
			}
		</div>
	)
}