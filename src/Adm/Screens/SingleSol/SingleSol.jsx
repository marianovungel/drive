import React, { useEffect, useState } from 'react'
import './SingleSol.css'
import HeaderAdm from '../../Components/HeaderAdm/HeaderAdm'
import MenuAdm from '../../Components/MenuAdm/MenuAdm'
import api from '../../../api'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import SingleHeader from '../../../Components/SingleHeader/SingleHeader'

export default function SingleSol() {
    const location = useLocation();
    const path = location.pathname.split("/")[2]
    const [res, setRes] = useState({})

    useEffect(()=>{
        const getData = async ()=>{
            try {
                const data = await api.get(`/solicitar/${path}`)
                setRes(data.data)
            } catch (error) {
                alert(error.message)
            }
        }
        getData()
    }, [])

    const Aprovar = async ()=>{
        try {
            const res = await api.put(`/adm/Aprovar/${path}`)
            if(res){
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Operação Executada com Sucesso!",
                  showConfirmButton: false,
                  timer: 3000
                });
              }
              window.location.replace("/solicitacoes");
        } catch (error) {
            alert(error.message)
        }
    }
    const Reprovar = async ()=>{
        try {
            const res = await api.put(`/adm/Reprovar/${path}`)
            if(res){
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Operação Executada com Sucesso!",
                  showConfirmButton: false,
                  timer: 3000
                });
              }
              window.location.replace("/solicitacoes");
        } catch (error) {
            alert(error.message)
        }
    }
  return (
    <div className='SingleSol'>
        <SingleHeader/>
        <MenuAdm/>
        <div className="contentSingle">
            <div className="setentContent">
                <div className="TitleSingle">Formulário Preenchido</div>
                <div className="contentChaveValor">
                    <div className="Chave">Nome: </div>
                    <div className="valor">{res.nome}   {res.sobrenome}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Siape: </div>
                    <div className="valor">{res.siape}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Unidade-Requisitante: </div>
                    <div className="valor">{res.UnidadeRequi}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Email Requisitante: </div>
                    <div className="valor">{res.EmailRequi}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Telefone Requisitante: </div>
                    <div className="valor">{res.Telefone}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Atividade: </div>
                    <div className="valor">{res.Atividade}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Objectivo: </div>
                    <div className="valor">{res.Objectivo}</div>
                </div>
                <div className="SubTitle">Dados Sobre Partida</div>
                
                <div className="contentChaveValor">
                    <div className="Chave">Rua: </div>
                    <div className="valor">{res.Rua}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Bairro: </div>
                    <div className="valor">{res.Bairro}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Cidade: </div>
                    <div className="valor">{res.Cidade}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Cep: </div>
                    <div className="valor">{res.Cep}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Ponto de Referência: </div>
                    <div className="valor">{res.PontoRef}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Hora: </div>
                    <div className="valor">{res.Hora}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Data</div>
                    <div className="valor">{res.date}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Passageiros: </div>
                    <div className="valor">{res.Passageiros}</div>
                </div>
                <div className="SubTitle">Dados Sobre Destino</div>
                <div className="contentChaveValor">
                    <div className="Chave">Rua: </div>
                    <div className="valor">{res.RuaD}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Bairro: </div>
                    <div className="valor">{res.BairroD}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Cidade: </div>
                    <div className="valor">{res.CidadeD}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Cep: </div>
                    <div className="valor">{res.CepD}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Ponto de Referência: </div>
                    <div className="valor">{res.PontoRefD}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Hora: </div>
                    <div className="valor">{res.HoraD}</div>
                </div>
                <div className="SubTitle">Dados Sobre Retorno</div>


                <div className="contentChaveValor">
                    <div className="Chave">Data: </div>
                    <div className="valor">{res.dataR}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Passageiros: </div>
                    <div className="valor">{res.PassageirosR}</div>
                </div>

                <div className="SubTitle">Dados Sobre Parada</div>
                <div className="contentChaveValor">
                    <div className="Chave">Parada: </div>
                    <div className="valor">{res.parada}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Endereço: </div>
                    <div className="valor">{res.NomePassaEndereco}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Motivo: </div>
                    <div className="valor">{res.Motivo}</div>
                </div>
                <div className="SubTitle">Dados do Responsável</div>
                <div className="contentChaveValor">
                    <div className="Chave">Nome: </div>
                    <div className="valor">{res.NomeRespons} {res.SobrenomeRespons}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Siape: </div>
                    <div className="valor">{res.SiapeRespons}</div>
                </div>
                <div className="contentChaveValor">
                    <div className="Chave">Telefone: </div>
                    <div className="valor">{res.TelefoneRespons}</div>
                </div>
                <div className="contentChaveValorButon">
                    <div className="Aprovar" onClick={Aprovar}>Aprovar</div>
                    <div className="reprovar" onClick={Reprovar}>Rejeitar</div>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}
