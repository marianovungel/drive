import React from 'react'
import './HomeAdm.css'
import HeaderAdm from '../../Components/HeaderAdm/HeaderAdm'
import MenuAdm from '../../Components/MenuAdm/MenuAdm'
import Map from '../../../Components/Map/Map'

export default function HomeAdm() {
  return (
    <div className='Home'>
      <HeaderAdm />
      <MenuAdm />
      <div className="fildset">
        <div className="leftFildset">
          <div className="titleFildset">Seja bem-vindo(a),</div>
          <div className="textFildset">O Sistema Integrado de Solicitações e Gerenciamento  DE VEÍCULOS  - DIVTRANS, gerencia todas da Unilab.</div>
        </div>
        <div className="rightFildset">
          <Map />
        </div>
      </div>
    </div>
  )
}
