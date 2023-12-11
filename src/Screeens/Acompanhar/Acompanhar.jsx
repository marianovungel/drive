import React, { useEffect, useState } from 'react'
import './Acompanhar.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import { useContext } from 'react';
import {Context} from '../../Context/Context'
import api from '../../api'

var data = [
    {
        processo:1,
        dia:"10/05/2023",
        Destino:"Fortaleza",
        status:"Pendente"

    },
    {
        processo:1,
        dia:"10/05/2023",
        Destino:"Fortaleza",
        status:"Aprovado"

    },
    {
        processo:1,
        dia:"10/05/2023",
        Destino:"Fortaleza",
        status:"Pendente"

    },
    {
        processo:1,
        dia:"10/05/2023",
        Destino:"Fortaleza",
        status:"Negado"

    }
]

export default function Acompanhar() {
    const [res, resSet] = useState(data)
    const {user} = useContext(Context);

    useEffect(()=>{
        const getData = async()=>{
            try {
                const data = await api.post("/solicitar/acompanhar",{
                    user:user.login
                })
                console.log(data.data)
                resSet(data.data)
            } catch (error) {
                
            }
        }
        getData()
    }, [user.login])
  return (
    <div className='Acompanhar'>
        <Header />
        <Menu />
        <div className="Acompanhamento">
            <div className="SetentaAconpanhar">
                <div className="minhasSolicitacoes">
                    <div className="bannerMinhas">Minhas Solicitações</div>
                </div>
                <div className="tabelaSolicitacoes">
                    <div className="menuTableAcomp">
                        <div className="itemmenuTableAcomp">Processo</div>
                        <div className="itemmenuTableAcomp">Data de registro</div>
                        <div className="itemmenuTableAcomp">Destino</div>
                        <div className="itemmenuTableAcomp">Status</div>
                    </div>
                    {res.map((d)=>(
                        <div className="menuTableAcompItem">
                            <div className="itemmenuTableAcompItem">{d.processo}</div>
                            <div className="itemmenuTableAcompItem">{d.date}</div>
                            <div className="itemmenuTableAcompItem">{d.CidadeD}</div>
                            <div className="itemmenuTableAcompItem">
                                {d.status === "Pendente" && (<div className="Azul">{d.status}</div>)}
                                {d.status === "Aprovado" && (<div className="Verde">{d.status}</div>)}
                                {d.status === "Negado" && (<div className="vermelho">{d.status}</div>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
