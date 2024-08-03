import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {FaBars, FaSearch} from 'react-icons/fa'
import { MdClose} from 'react-icons/md'
import '../navbar/navbar.css'

export default function Navbar(){
	const [visible, setVisible] = useState(false)
	const navigate = useNavigate()

	function SearchBar(){
		const [searchValue, setSearchValue] = useState('')
		const navigate = useNavigate()
		function pesquisar(e){
			e.preventDefault()
			if(!searchValue) return
			navigate(`/search?q=${searchValue}`)
			setSearchValue("")
			setVisible(false)
		}
		return(
			<form onSubmit={(e)=>pesquisar(e)} id="search-form">
				<input 
					placeholder="Pesquisar por um conteúdo" 
					id="search-form-input"
					onChange={e=>setSearchValue(e.target.value)}
					value={searchValue}
				/>
				<button type="submit" className="btn" id="search-btn"><FaSearch/></button>
			</form>
		)
	} 

	function OpenMenu(){
		setVisible(true)
	}

	function CloseMenu(){
		setVisible(false)
	}
	return(
		<div id="header">
				<nav id="nav-bar">
					<div className="logo-container">
						<Link className="logo-link" to='/'>.Vic<span style={{color: "var(--color-3)"}}>Blog</span></Link>
					</div>
					<div id="nav-content-container">
						<ul id={ visible? 'nav-list-visible': 'nav-list-disable' } className="nav-list">
							<li id="menu-close-btn-container">
								<Link className="logo-link" onClick={()=>CloseMenu()} to='/'>.VicBlog</Link>
								<button id="menu-close-btn" className="btn" onClick={()=>CloseMenu()}><MdClose size='30'/></button>
							</li>
							<li className="nav-list-item"><Link className="nav-bar-link" onClick={()=>CloseMenu()} to='/'>Início</Link></li>
							<li className="nav-list-item"><Link className="nav-bar-link" onClick={()=>CloseMenu()} to='/anexos'>Anexos</Link></li>
							<li id="searchBar-li">
								<SearchBar/>
							</li>
						</ul>
					</div>
					<button onClick={()=>OpenMenu()} className="btn" id="menu-open-btn">
						<FaBars/>
					</button>
				</nav>
		</div>
	)
}