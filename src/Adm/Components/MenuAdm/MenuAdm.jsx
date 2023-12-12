import React from 'react'
import './MenuAdm.css'
import { Link } from 'react-router-dom'

export default function MenuAdm() {
  return (
    <div className='Menu'>
      <div className="menuContent">
        <div className="stayItens">
            <Link to="/homeadm" className="itemContentMenu">
                <div className="textItem marginSair">
                  Página Inicial
                </div>
                <i className="fa-solid fa-house textItem"></i>
            </Link>
            <Link to="/gerenciar" className="itemContentMenu">
                <div className="textItem marginSair">Gerenciar Veículo</div>
                <i className="fa-solid fa-magnifying-glass textItem"></i>
            </Link>
            <div className="itemContentMenu">
                <div className="textItem marginSair">Solicitações</div>
                <i className="fa-regular fa-square-check textItem"></i>
            </div>
            <div className="itemContentMenu">
                <div className="textItem marginSair">Rastramento</div>
                <i className="fa-regular fa-square-check textItem"></i>
            </div>
        </div>
        <div className="goItens">
            <div className="textItem marginSair">Sair</div>
            <i className="fa-solid fa-arrow-right-from-bracket textItem"></i>
        </div>
      </div>
    </div>
  )
}