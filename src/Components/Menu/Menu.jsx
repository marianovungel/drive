import React, { useContext } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

export default function Menu() {
  const { dispatch, user} = useContext(Context)

    const hendSair = ()=>{
        dispatch({type: "LOGOUT"})
    }

  return (
    <div className='Menu'>
      <div className="menuContent">
        <div className="stayItens">
            <Link to="/" className="itemContentMenu">
                <div className="textItem marginSair">
                  Página Inicial
                </div>
                <i className="fa-solid fa-house textItem"></i>
            </Link>
            <Link to="/pesquisa" className="itemContentMenu">
                <div className="textItem marginSair">Verificar disponibilidade</div>
                <i className="fa-solid fa-magnifying-glass textItem"></i>
            </Link>
            <Link to="/acompanhar" className="itemContentMenu">
                <div className="textItem marginSair">Acompanhar Solicitação</div>
                <i className="fa-regular fa-square-check textItem"></i>
            </Link>
            {user.login === "Drive@t" && (
              <Link to="/homeadm" className="itemContentMenu">
                  <div className="textItem marginSair">Painel</div>
                  <i className="fa-solid fa-solar-panel textItem"></i>
              </Link>
            )}
        </div>
        <div className="goItens" onClick={hendSair}>
            <div className="textItem marginSair">Sair</div>
            <i className="fa-solid fa-arrow-right-from-bracket textItem"></i>
        </div>
      </div>
    </div>
  )
}
