import React, { useEffect, useState } from 'react'
import './Gerenciar.css'
import HeaderAdm from '../../Components/HeaderAdm/HeaderAdm'
import MenuAdm from '../../Components/MenuAdm/MenuAdm'
import api from '../../../api'
import Swal from 'sweetalert2'

export default function Gerenciar() {
  const [res, setRes] = useState()

    useEffect(()=>{
        const getData = async()=>{
            try {
                const data = await api.get("/carro")
                console.log(data.data)
                setRes(data.data)
            } catch (error) {

            }
        }
        getData()
    }, [])

    const LivreFunc = async (id)=>{
      try {
        const livreRes = await api.put(`/adm/Livre/${id}`)
        if(livreRes){
          window.location.reload()
        }
      } catch (error) {
        alert(error)
      }
    }
    const ReservadoFunc = async (id)=>{
      try {
        const ReservadoRes = await api.put(`/adm/Reservado/${id}`)
        if(ReservadoRes){
          window.location.reload()
        }
      } catch (error) {
        alert(error)
      }
    }
    const ManutencaoFunc = async (id)=>{
      try {
        const livreRes = await api.put(`/adm/Manutencao/${id}`)
        if(livreRes){
          window.location.reload()
        }
      } catch (error) {
        alert(error)
      }
    }

    const Atualizar = async (id)=>{
        const { value: fruit } = await Swal.fire({
            title: 'Seleciona o Novo Status',
            input: 'select',
            inputOptions: {

              'Status': {
                Livre: 'Livre',
                Reservado: 'Reservado',
                Manutenção: 'Manutenção'
              }
            },
            inputPlaceholder: 'Selecione Status',
            showCancelButton: true,
            inputValidator: (value) => {
              return new Promise((resolve) => {
                if (value === 'Livre') {
                    LivreFunc(id)
                } else if(value === 'Reservado'){
                  ReservadoFunc(id)
                }else if(value === 'Manutenção'){
                  ManutencaoFunc(id)
                }else {
                  resolve('Escolha uma das alternativas acima! :)')
                }
              })
            }
          })

          if (fruit) {
            Swal.fire(`Você selecionou : ${fruit}`)
          }
    }
  return (
    <div className='Acompanhar'>
        <HeaderAdm />
        <MenuAdm />
        <div className="Acompanhamento">
            <div className="SetentaAconpanhar">
                <div className="minhasSolicitacoes">
                    <div className="bannerMinhas">Gerenciar Veículos</div>
                </div>
                <div className="tabelaSolicitacoes">
                    <div className="menuTableAcomp">
                        <div className="itemmenuTableAcomp">Tipo</div>
                        <div className="itemmenuTableAcomp">Matrícula</div>
                        <div className="itemmenuTableAcomp">Capacidade</div>
                        <div className="itemmenuTableAcomp">Status</div>
                        <div className="itemmenuTableAcomp"></div>
                    </div>
                    {res?.map((d)=>(
                        <div key={d?._id} className="menuTableAcompItem">
                            <div className="itemmenuTableAcompItem">{d.tipo}</div>
                            <div className="itemmenuTableAcompItem">{d.matricula}</div>
                            <div className="itemmenuTableAcompItem">{d.capacidade}</div>
                            <div className="itemmenuTableAcompItem">
                                {d.status === "Reservado" && (<div className="Azul">{d.status}</div>)}
                                {d.status === "Livre" && (<div className="Verde">{d.status}</div>)}
                                {d.status === "Manutencao" && (<div className="vermelho">{d.status}</div>)}
                            </div>
                            <div className="itemmenuTableAcompItem"><div className="butAlterar" onClick={()=>Atualizar(d._id)}>Alterar Status</div></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}