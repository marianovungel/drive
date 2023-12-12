import React from 'react'
import './SingleHeader.css'

export default function SingleHeader() {
  return (
    <div className='Header'>
      <div className="centerHeader">
        <div className="contenteLogo">
            <img src="../logoappc.png" alt="Logo" className='ImgLogo' />
            <div className="textLogoContent">
                <div className="TitleLogo">DivTrans</div>
                <div className="TexteLogo">SISTEMA DE GERENCIAMENTO DE VEÍCULOS</div>
            </div>
        </div>
        <img src="../logo.png" alt="lofo-Unilab" className='LogoUnilab' />
      </div>
    </div>
  )
}
