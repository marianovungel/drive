import React, { useEffect, useState } from 'react'
import './Pesquisa.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'

const vetor = [
  {
    tipo: "carro",
    modelo: "Fiat Uno",
    placa: "ABC-1234",
    quantidade: 10,
    capacidade: 5
  },
  {
    tipo: "motocicleta",
    modelo: "Honda CG 125",
    placa: "DEF-5678",
    quantidade: 20,
    capacidade: 2
  },
  {
    tipo: "ônibus",
    modelo: "Marcopolo Paradiso G7 1800DD",
    placa: "GHI-9012",
    quantidade: 5,
    capacidade: 45
  },
  {
    tipo: "caminhão",
    modelo: "Volkswagen Constellation 26.260",
    placa: "JKL-3456",
    quantidade: 10,
    capacidade: 20
  },
  {
    tipo: "trator",
    modelo: "John Deere 6215R",
    placa: "MNO-7890",
    quantidade: 5,
    capacidade: 100
  }
];

export default function Pesquisa() {
  const [res, setRes] = useState(vetor)

  useEffect(()=>{
    setRes(vetor)
  }, [])

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
            <div className="MenuTable">
              <div className="itemTableMenu">Tipo de veículo</div>
              <div className="itemTableMenu">Modelo do veículo</div>
              <div className="itemTableMenu">Placa do veículo</div>
              {/* <div className="itemTableMenu">Quant. disponível</div> */}
              <div className="itemTableMenu">Capacidade</div>
            </div>
            {res?.map((r)=>(
              <div className="MenuTableItem">
                <div className="itemTableMenuData">{r.tipo}</div>
                <div className="itemTableMenuData">{r.modelo}</div>
                <div className="itemTableMenuData">{r.placa}</div>
                {/* <div className="itemTableMenuData">{r.quantidade}</div> */}
                <div className="itemTableMenuData">{r.capacidade}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
