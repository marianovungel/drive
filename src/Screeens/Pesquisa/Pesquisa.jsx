import React from 'react'
import './Pesquisa.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'

export default function Pesquisa() {
  return (
    <div className='Pesquisa'>
      <Header />
      <Menu />
      <div className="pesquisaContent">
        <div className="PesquisaForma">
            <div className="textPesquisaForma">Verificar disponibilidade de Veículo</div>
            <div className="DivContentForm">
                <div className="inputsFormPesquisa">
                    <div className="labelsForm">
                        <label htmlFor="" className='LabelAno'>Ano *</label>
                        <label htmlFor="" className='LabelAno'>Mês *</label>
                        <label htmlFor="" className='LabelAno'>Dia *</label>
                        <label htmlFor="" className='LabelAno'>Nº de Passageiro  *</label>
                    </div>
                    <div className="labelsFormI">
                        <input type="text" className="inputNome" />
                        <input type="text" className="inputNome" />
                        <input type="text" className="inputNome" />
                        <input type="text" className="inputNome" />
                    </div>
                </div>
                <div className="buttonFormPesquisa">
                    <button className='ButtonPesq'>Pesquisar <i className="fa-solid fa-magnifying-glass"></i></button>
                    <button className='ButtonPesq marginBB'>Limpar <i className="fa-solid fa-broom"></i></button>
                </div>
                <div className="buttonFormPesquisa">
                    <i>Os campos marcados com asterisco (*) são de preenchimento obrigatório.</i>
                </div>
            </div>
            <div className="ResultText">Resultado da Busca</div>
        </div>
      </div>
    </div>
  )
}
