import React, { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from "../logo/logo";
import '../navbar/navbar.css';

export default function Navbar(){
	const [navStyle, setNavStyle] = useState(false)
	const location = useLocation()
	
	const handleScroll = () => {
		const sectionPosition = document.getElementById('home-section').offsetTop;
		const scrollPosition = window.scrollY;
	
		if(scrollPosition > (sectionPosition + 390)){
			setNavStyle(true)
		}else{
			setNavStyle(false)
		}
	}

	useEffect(() => {
		if(!(location.pathname.includes('/post') || location.pathname.includes('/livros') || location.pathname.includes('/error'))){
			window.addEventListener('scroll', handleScroll)

			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		}else{
			setNavStyle(true)
		}
	}, [location.pathname])

	function SearchBar(){
		const [searchValue, setSearchValue] = useState('')
		const navigate = useNavigate()
		function handlerSearch(e){
			e.preventDefault()
			if(location.pathname.includes('/livros') || location.pathname.includes('/livros')){
				if(!searchValue) return
				navigate(`/livros/search?q=${searchValue}`)
				setSearchValue("")
			}else if(location.pathname.includes('/') || location.pathname.includes('/posts')){
				if(!searchValue) return
				navigate(`/posts/search?q=${searchValue}`)
				setSearchValue("")
			}
		}
		return(
			<form onSubmit={(e)=>handlerSearch(e)} id="search-form">
				<button type="submit" className="btn" id="search-btn"><FaSearch/></button>
				<input 
					autoComplete="off"
					placeholder="Pesquisar" 
					id="search-form-input"
					onChange={e=>setSearchValue(e.target.value)}
					value={searchValue}
				/>
			</form>
		)
	} 

	return(
		<div id="header">
				<nav id="nav-bar" className={navStyle ? 'scrolled-navbar' : 'normal-navbar'}>
					<div className="logo-search-container">
						<Logo/>
						<SearchBar/>
					</div>
					
					<ul id="nav-list">
						<li className="nav-list-item"><NavLink style={({isActive}) => ({
								color: isActive ? "rgb(251, 94, 94)": "whitesmoke"
							})} className="nav-bar-link"  to='/'>Home</NavLink></li>
						<li className="nav-list-item"><NavLink style={({isActive}) => ({
								color: isActive ? "rgb(251, 94, 94)": "whitesmoke"
							})} className="nav-bar-link" to='/livros'>Livros</NavLink></li>
					</ul>
				</nav>
				
		</div>
	)
}