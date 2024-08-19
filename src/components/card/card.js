import "../card/card.css"
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from "react-router-dom"
import { API_URL } from "../globalVarables/variaveis"

export default function Card({title, autor, ano, editora, description, id, link}) {
    const navigate = useNavigate()

  return (
    <div id="card-container">
        <div id="post-cover-container">
            <img className="" src={`${API_URL}/book/${id}`} alt={title}/>
        </div>
        <div id="text-container">
            <div id="text-about-book">
                <div id="post-infor-container">
                    <h6>{title}</h6>
                </div>
                <div id="post-desc-container">
                    <p>{description}</p>
                </div>
                <div id="post-more-infor-container">
                    <h6>{autor}</h6>
                    <h6>{ano}</h6>
                    <h6>{editora}</h6>
                </div>
            </div>
            
            <div id="options-container" >
                <a target="_blank" href={link} style={{padding: "2px 8px"}} className="btn btn-dark">Baixar</a>
            </div>
        </div>
    </div>
  )
}

