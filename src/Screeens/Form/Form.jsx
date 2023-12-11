import React, { useState } from 'react'
import './Form.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import api from '../../api'
import { useContext } from 'react';
import {Context} from '../../Context/Context'
import { useLocation} from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Form() {
  
  const {user} = useContext(Context);
const location = useLocation();
const path = location.pathname.split("/")[2]

const [nome, setNome] = useState()
const [sobrenome, setSobrenome] = useState()
const [siape, setSiape] = useState()
const [UnidadeRequi, setUnidadeRequi] = useState()
const [EmailRequi, setEmailRequi] = useState()
const [Telefone, setTelefone] = useState()
const [Atividade, setAtividade] = useState()
const [Objectivo, setObjectivo] = useState()
//partida
const [Rua, setRua] = useState()
const [Bairro, setBairro] = useState()
const [Cidade, setCidade] = useState()
const [PontoRef, setPontoRef] = useState()
const [Cep, setCep] = useState()
const [Hora, setHora] = useState()
const [date, setDate] = useState()
const [Passageiros, setPassageiros] = useState()
//destino
const [RuaD, setRuaD] = useState()
const [BairroD, setBairroD] = useState()
const [CidadeD, setCidadeD] = useState()
const [PontoRefD, setPontoRefD] = useState()
const [CepD, setCepD] = useState()
const [HoraD, setHoraD] = useState()
//retorno
const [dataR, setDataR] = useState()
const [PassageiroR, setPassageiroR] = useState()

//necessidade de paragem
const [parada, setParada] = useState()
const [NomePassaEndereco, setNomePassaEndereco] = useState()
const [Motivo, setMotivo] = useState()

//Responsável pelos passageiros
const [NomeRespons, setNomeRespons] = useState()
const [SobrenomeRespons, setSobrenomeRespons] = useState()
const [SiapeRespons, setSiapeRespons] = useState()
const [TelefoneRespons, setTelefoneRespons] = useState()

//lista de passageiros
const [Lista, setLista] = useState([])
const [NomePass, setNomePass] = useState("")
const [SiapePass, setSiapePass] = useState("")
const [TelePass, setTelePass] = useState("")
const [ComuniPass, setComuniPass] = useState("")

// const addPassa = ()=>{
//   setLista([...Lista, {nome:NomePass, siape_matricula:SiapePass, tel:TelePass, comunidade:ComuniPass}])
// }

// console.log(Lista)



const Submit= async (e)=>{
  e.preventDefault();
  try {
    const res = await api.post("/solicitar", {
    user:user.login,
    userid: user.id_pessoa,
    carroId: path,
    processo:"123456",
    capacidade:30,
    nome, 
    sobrenome, 
    siape, 
    UnidadeRequi, 
    EmailRequi, 
    Telefone, 
    Atividade, 
    Objectivo, 
    //partida
    Rua, 
    Bairro, 
    Cidade, 
    PontoRef, 
    Cep, 
    Hora, 
    date, 
    Passageiros, 
    //destino
    RuaD, 
    BairroD, 
    CidadeD, 
    PontoRefD, 
    CepD, 
    HoraD, 
    //retorno
    dataR, 
    PassageiroR, 

    //necessidade de paragem
    parada, 
    NomePassaEndereco, 
    Motivo,

    //Responsável pelos passageiros
    NomeRespons, 
    SobrenomeRespons, 
    SiapeRespons, 
    TelefoneRespons, 

    //lista de passageiros
    Lista
    })

    if(res){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Formulário Submetido com Sucesso!",
        showConfirmButton: false,
        timer: 3000
      });
    }
    window.location.replace("/pesquisa");
  } catch (error) {
    alert("Erro na Submição do formulário")
  }
}

  return (
    <>
        <Header />
        <Menu />
      <div className='centerForm'>
      <div>
    <form onSubmit={Submit} >
        <div className='h1Titlo'>FORMULÁRIO - SOLICITAÇÃO DE VEÍCULO OFICIAL</div>
        <h3>1. Dados do Solicitante: </h3>
        <div className="item">
          <p>Nome do Solicitante<span>*</span></p>
          <div className="name-item">
            <input type="text" name="name" placeholder="Primeiro Nome" onChange={(e)=>setNome(e.target.value)} />
            <input type="text" name="name" placeholder="Sobrenome" onChange={(e)=>setSobrenome(e.target.value)}/>
          </div>
        </div>
        <div className="item">
          <p>SIAPE<span>*</span></p>
          <input type="text" name="name" onChange={(e)=>setSiape(e.target.value)}/>
        </div>
        <div className="item">
            <p>Unidade Requisitante - Sigla<span>*</span></p>
            <input type="text" name="name" onChange={(e)=>setUnidadeRequi(e.target.value)}/>
          </div>
          <div className="item">
            <p>E-mail do do Solicitante<span>*</span></p>
            <input type="text" name="name" onChange={(e)=>setEmailRequi(e.target.value)}/>
          </div>
          <div className="item">
            <p>Telefone (c/ DDD)<span>*</span></p>
            <input type="text" name="name" onChange={(e)=>setTelefone(e.target.value)}/>
          </div>

          <h3>2. Dados da Viagem</h3>
          <h5>Natureza da Atividade</h5>

          <p>Atividade<span>*</span></p>
          <select onChange={(e)=>setAtividade(e.target.value)} >
            <option value=""></option>
            <option value="">Atividade Curricular de Graduação</option>
            <option value="2">Atividade de Pesquisa</option>
            <option value="3">Atividade de Extensão, Arte e/ou Cultura</option>
            <option value="4">Transporte de Bens/Materiais</option>
            <option value="4">Atividade Curricular de Pós-Graduação</option>
            <option value="4">Atividade Administrativa</option>
          </select>
          <div className="item">
            <p>Objetivo/Justificativa da Viagem</p>
            <textarea rows="5" onChange={(e)=>setObjectivo(e.target.value)}></textarea>
          </div>
          <h5>Informações de partida</h5>
          <div className="item">
            <p>Endereço de Partida</p>
            <input type="text" name="name" placeholder="Rua" onChange={(e)=>setRua(e.target.value)}/>
            <input type="text" name="name" placeholder="Bairro" onChange={(e)=>setBairro(e.target.value)}/>
            <div className="city-item">
              <input type="text" name="name" placeholder="Cidade" onChange={(e)=>setCidade(e.target.value)}/>
              <input type="text" name="name" placeholder="Ponto de Referencia" onChange={(e)=>setPontoRef(e.target.value)} />
              <input type="text" name="name" placeholder="CEP" onChange={(e)=>setCep(e.target.value)} />
              <input type="time" name="" id="" placeholder="Horário de Partida" onChange={(e)=>setHora(e.target.value)} />
              
            </div>
              </div>
              <div className="item">
                <p>Data de Partida</p>
                <input type="date" name="name" required onChange={(e)=>setDate(e.target.value)} />
                <i className="fas fa-calendar-alt"></i>
              </div>
              <label>Número de passageiros:</label>
              <div className="input-group">
                <input type="number" id="passageiros" name="passageiros" onChange={(e)=>setPassageiros(e.target.value)} />
              </div>



              <div>Informações de Destino</div>
              <div className="item">
                <p>Endereço de Destino</p>
                <input type="text" name="name" placeholder="Rua" onChange={(e)=>setRuaD(e.target.value)}/>
                <input type="text" name="name" placeholder="Bairro" onChange={(e)=>setBairroD(e.target.value)}/>
                <div className="city-item">
                  <input type="text" name="name" placeholder="Cidade" onChange={(e)=>setCidadeD(e.target.value)} />
                  <input type="text" name="name" placeholder="Ponto de Referencia" onChange={(e)=>setPontoRefD(e.target.value)} />
                  <input type="text" name="name" placeholder="CEP" onChange={(e)=>setCepD(e.target.value)} />
                  <input type="time" name="" id="" placeholder="Horário de Retorno" onChange={(e)=>setHoraD(e.target.value)} />
                </div>
                  </div>
                  <div className="item">
                    <p>Data de Retorno</p>
                    <input type="date" name="name" required onChange={(e)=>setDataR(e.target.value)}/>
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <label >Número de passageiros:</label>
                  <div className="input-group">
                    <input type="number" id="passageiros" name="passageiros" onChange={(e)=>setPassageiroR(e.target.value)} />
                  </div>
      <h5> Necessidade de Paradas no Percurso </h5>

      <div id="input-container">
        <div className="input-group">
          <input type="text" name="parada-numero[]" placeholder="Parada Nº" onChange={(e)=>setParada(e.target.value)} />
          <input type="text" name="nome-passageiro[]" placeholder="Nome do Passageiro e/ou Endereço" onChange={(e)=>setNomePassaEndereco(e.target.value)} />
          <input type="text" name="motivo-parada[]" placeholder="Motivo da Parada" onChange={(e)=>setMotivo(e.target.value)} />
          <button type="button">+</button>
        </div>
      </div>
      
      <h3>3. Responsável pelos passageiros</h3>
      <div className="item">
        <p>Nome do Solicitante<span>*</span></p>
        <div className="name-item">
          <input type="text" name="name" placeholder="Primeiro Nome" onChange={(e)=>setNomeRespons(e.target.value)} />
          <input type="text" name="name" placeholder="Sobrenome" onChange={(e)=>setSobrenomeRespons(e.target.value)} />
        </div>
      </div>
      <div className="item">
        <p>SIAPE<span>*</span></p>
        <input type="text" name="name" onChange={(e)=>setSiapeRespons(e.target.value)} />
      </div>
      <div className="item">
          <p>Telefone de Contato (c/ DDD)<span>*</span></p>
          <input type="text" name="name" onChange={(e)=>setTelefoneRespons(e.target.value)} />
        </div>
      
  
   <h3>5. Relação dos passageiros </h3>
  <div id="formulario">
    <div className="container">
        <div className="titulo">Nome: Siape/Matrícula: Telefone: Comunidade:</div>
        <div className="linha">
            <input type="text" placeholder="Nome do passageiro" onChange={(e)=>setNomePass(e.target.value)} />
            <select className="tipo-id" onChange={(e)=>setSiapePass(e.target.value)}>
                <option value="">Escolha uma opção</option>
                <option value="siape">Siape</option>
                <option value="matricula">Matrícula</option>
                <option value="naoaplica">Não se aplica</option>
            </select>
            <input type="text" className="input-id escondido" onChange={(e)=>setTelefone(e.target.value)} />
            <input type="text" placeholder= "Telefone (com DDD)" onChange={(e)=>setTelefone(e.target.value)} />
            <select className="comunidade" onChange={(e)=>setTelePass(e.target.value)}>
                <option value="">Escolha uma opção</option>
                <option value="interna">Interna</option>
                <option value="externa">Externa</option>
            </select>
            <input type="text" className="especificacao escondido" onChange={(e)=>setComuniPass(e.target.value)} placeholder="Especificação (Comunidade Externa)" />
            <button className="botao adicionar" onClick>+</button>
            <button className="botao remover escondido">-</button>
        </div>
    </div>


</div>
<div className="btn-block">
  <button value="send" type="submit" >ENVIAR</button>
</div> 
</form>

</div>
    </div>

    </>
  )
}
