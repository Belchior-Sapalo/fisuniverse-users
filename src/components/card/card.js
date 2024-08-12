import "../card/card.css"
import React from 'react'

export default function Card({title, autor, ano, editora, description, img}) {

  return (
    <div id="card-container" className="col-12">
        <div id="post-cover-container">
            <img className="img-fluid" src={img} style={{ maxWidth: '150px' }} alt={title}/>
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
                <button style={{padding: "2px 4px"}} className="btn btn-success">Baixar</button>
            </div>
        </div>
    </div>
  )
}

