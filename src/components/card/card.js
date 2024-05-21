import '../card/card.css'
import { useNavigate } from 'react-router-dom'

export default function Card({image, title, ano, description}){
    return(
        <div id="card-container" className='col-sm-12 col-md-6 col-lg-4'>
            <h6 className='book-title'>Título: {title}</h6>
            <p> Ano de lançamento: {ano}</p>
            <img className='img-fluid image' src={image}></img>
            <button className='btn btn-outline-primary'>Ver mais</button>
        </div>
    )
}