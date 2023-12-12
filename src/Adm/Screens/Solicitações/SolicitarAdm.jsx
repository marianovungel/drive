import React, { useEffect, useState } from 'react'
import './SolicitarAdm.css'
import HeaderAdm from '../../Components/HeaderAdm/HeaderAdm'
import MenuAdm from '../../Components/MenuAdm/MenuAdm'
import api from '../../../api'
import { Link } from 'react-router-dom'



export default function SolicitarAdm() {
    const [res, setRes] = useState()

    useEffect(()=>{
        const getData = async()=>{
            try {
                const data = await api.get("/solicitar")
                console.log(data.data)
                setRes(data.data)
            } catch (error) {
                
            }
        }
        getData()
    }, [])
  return (
    <div className='Acompanhar'>
        <HeaderAdm />
        <MenuAdm />
        <div className="Acompanhamento">
            <div className="SetentaAconpanhar">
                <div className="minhasSolicitacoes">
                    <div className="bannerMinhas">Gerenciar Solicitações</div>
                </div>
                <div className="tabelaSolicitacoes">
                    <div className="menuTableAcomp">
                        <div className="itemmenuTableAcomp">Processo</div>
                        <div className="itemmenuTableAcomp">Data de registro</div>
                        <div className="itemmenuTableAcomp">Destino</div>
                        <div className="itemmenuTableAcomp">Status</div>
                    </div>
                    {res?.map((d)=>(
                        <Link to={`/form_preenchido/${d?._id}`} key={d?._id} className="menuTableAcompItem linkGo">
                            <div className="itemmenuTableAcompItem">{d.processo}</div>
                            <div className="itemmenuTableAcompItem">{d.date}</div>
                            <div className="itemmenuTableAcompItem">{d.CidadeD}</div>
                            <div className="itemmenuTableAcompItem">
                                {d.status === "Pendente" && (<div className="Azul">{d.status}</div>)}
                                {d.status === "Aprovado" && (<div className="Verde">{d.status}</div>)}
                                {d.status === "Negado" && (<div className="vermelho">{d.status}</div>)}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
