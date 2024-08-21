import '../postComentForm/comentForm.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { API_URL } from '../globalVarables/variaveis'

export default function ComentForm({postId}){
	const [autor, setAutor] = useState('')
	const [coment, setComent] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
    function comentar(e){
		setIsLoading(true)
		e.preventDefault()
		const URL = `${API_URL}/post/comments/create/${postId}`

		const dados = {
			'autor': autor,
			'content': coment
		}
		fetch(URL, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(dados)
		}).then((res)=>{ 
            if(res.status === 500){
                throw new Error('Falha no servidor')
            }

			if(res.status === 201){
				setIsLoading(false)
				window.location.reload()
			}
        }).catch(error => {
			navigate('/error')
		})
	}
    return(
        <form id="coment-form" onSubmit={(e)=>comentar(e)}>
            <input required type="text" placeholder="Nome" onChange={e=>setAutor(e.target.value)} value={autor} className="coment-form-input"/>
            <input required placeholder="Comentário" onChange={e=>setComent(e.target.value)} value={coment} className="coment-form-input"/>
            <button disabled={isLoading || (coment.length === 0 || autor.length === 0)} type="submit" className="btn btn-dark" id='coment-btn'>{ isLoading ? 'Aguarde...' : 'Comentar' }</button>
        </form>
    )
}