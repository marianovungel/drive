import React, { useState } from 'react'
import './Pesquisa.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import api from '../../api'
import { Link } from 'react-router-dom'


export default function Pesquisa() {
  const [res, setRes] = useState([])
  const [date, setDate] = useState("")
  const [Show, setShow] = useState(false)


  // Using string manipulation
// function formatDate(dateString) {
//   const [year, month, day] = dateString.split("/");
//   return `${day}/${month}/${year}`;
// }

// var newDate = date.replace(/-/g, "/");
// dateConveted = formatDate(newDate)

  const Submit = async (e)=>{
    e.preventDefault();
    setShow(false)
    try {
      
      var ress = await api.post("/solicitar/pesq", {
        date
      })
      setShow(true)
      setRes(ress.data.data)
    } catch (error) {
      alert("Erro no Servidor!")
    }
  }

  const CleamInput = ()=>{
    setDate("")
    setShow(false)
  }


  return (
    <div className='Pesquisa'>
      <Header />
      <Menu />
      <div className="pesquisaContent">
        <div className="PesquisaForma">
            <div className="textPesquisaForma">Verificar disponibilidade de Veículo</div>
            <form className="DivContentForm" onSubmit={Submit}>
                <div className="inputsFormPesquisa">
                    <div className="labelsForm">
                        <label htmlFor="" className='LabelAno'>data *</label>
                    </div>
                    <div className="labelsFormI">
                        <input type="date" required className="inputNome" value={date} onChange={(e)=>setDate(e.target.value)} />
                    </div>
                </div>
                <div className="buttonFormPesquisa">
                    <button className='ButtonPesq' value="Send" type="submit">Pesquisar <i className="fa-solid fa-magnifying-glass sizeIcon"></i></button>
                    <div className='ButtonPesq marginBB' onClick={()=>CleamInput()}>Limpar <i className="fa-solid fa-broom sizeIcon"></i></div>
                </div>
                <div className="buttonFormPesquisa">
                    <i>Os campos marcados com asterisco (*) são de preenchimento obrigatório.</i>
                </div>
            </form>
            {Show && (
              <>
                <div className="ResultText">Resultado da Busca</div>
                <div className="MenuTable">
                  <div className="itemTableMenu">Tipo de veículo</div>
                  <div className="itemTableMenu">Modelo do veículo</div>
                  <div className="itemTableMenu">Placa do veículo</div>
                  {/* <div className="itemTableMenu">Quant. disponível</div> */}
                  <div className="itemTableMenu">Capacidade</div>
                </div>
                {res?.map((r)=>(
                  <Link to={`/form/${r?._id}`} className="MenuTableItem" key={r?._id}>
                    <div className="itemTableMenuData">{r?.tipo}</div>
                    <div className="itemTableMenuData">{r?.marca}</div>
                    <div className="itemTableMenuData">{r?.matricula}</div>
                    {/* <div className="itemTableMenuData">{r?.quantidade}</div> */}
                    <div className="itemTableMenuData">{r?.capacidade}</div>
                  </Link>
                ))}
              </>
            )}
        </div>
      </div>
    </div>
  )
}
