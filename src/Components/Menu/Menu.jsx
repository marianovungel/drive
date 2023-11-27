import React from 'react'
import './Menu.css'

export default function Menu() {
  return (
    <div className='Menu'>
      <div className="menuContent">
        <div className="stayItens">
            <div className="itemContentMenu">
                <div className="textItem marginSair">Página Inicial</div>
                <i class="fa-solid fa-house textItem"></i>
            </div>
            <div className="itemContentMenu">
                <div className="textItem marginSair">Verificar disponibilidade</div>
                <i class="fa-solid fa-house textItem"></i>
            </div>
            <div className="itemContentMenu">
                <div className="textItem marginSair">Acompanhar Solicitação</div>
                <i class="fa-solid fa-house textItem"></i>
            </div>
        </div>
        <div className="goItens">
            <div className="textItem marginSair">Sair</div>
            <i class="fa-solid fa-arrow-right-from-bracket textItem"></i>
        </div>
      </div>
    </div>
  )
}
