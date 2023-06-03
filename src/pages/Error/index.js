import './error.css'
import { Link } from 'react-router-dom'

export default function Error()
{
    return(
        <div className='container-erro'>
            <img src='notfound-mobile.png' alt="Página de imagem não encontrada"/>
            <h1>Página não encontrada</h1>
            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    )
}