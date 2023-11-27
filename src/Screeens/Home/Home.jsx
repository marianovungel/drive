import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'

export default function Home() {
  return (
    <div className='Home'>
      <Header />
      <Menu />
      <div className="fildset">
        <div className="leftFildset">
          <div className="titleFildset">Seja bem-vindo(a),</div>
          <div className="textFildset">O Sistema Integrado de Solicitações e Gerenciamento  DE VEÍCULOS  - DIVTRANS, gerencia todas da Unilab.</div>
        </div>
        <div className="rightFildset">Mapa</div>
      </div>
    </div>
  )
}
