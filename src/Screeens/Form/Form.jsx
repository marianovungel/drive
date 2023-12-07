import React from 'react'
import './Form.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'

export default function Form() {




  return (
    <>
        <Header />
        <Menu />
      <div className='centerForm'>
      <div>
    <form action="/">
        <div className='h1Titlo'>FORMULÁRIO - SOLICITAÇÃO DE VEÍCULO OFICIAL</div>
        <h3>1. Dados do Solicitante: </h3>
        <div className="item">
          <p>Nome do Solicitante<span>*</span></p>
          <div className="name-item">
            <input type="text" name="name" placeholder="Primeiro Nome" />
            <input type="text" name="name" placeholder="Sobrenome" />
          </div>
        </div>
        <div className="item">
          <p>SIAPE<span>*</span></p>
          <input type="text" name="name"/>
        </div>
        <div className="item">
            <p>Unidade Requisitante - Sigla<span>*</span></p>
            <input type="text" name="name"/>
          </div>
          <div className="item">
            <p>E-mail do do Solicitante<span>*</span></p>
            <input type="text" name="name"/>
          </div>
          <div className="item">
            <p>Telefone (c/ DDD)<span>*</span></p>
            <input type="text" name="name"/>
          </div>

          <h3>2. Dados da Viagem</h3>
          <h5>Natureza da Atividade</h5>

          <p>Atividade<span>*</span></p>
          <select>
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
            <textarea rows="5"></textarea>
          </div>
          <h5>Informações de partida</h5>
          <div className="item">
            <p>Endereço de Partida</p>
            <input type="text" name="name" placeholder="Rua"/>
            <input type="text" name="name" placeholder="Bairro"/>
            <div className="city-item">
              <input type="text" name="name" placeholder="Cidade" />
              <input type="text" name="name" placeholder="Ponto de Referencia" />
              <input type="text" name="name" placeholder="CEP" />
              <select>
                <option value="">Horário de Partida</option>
                <option value="1">07:00</option>
                <option value="1">07:30</option>
                <option value="1">08:00</option>
                <option value="1">08:30</option>
                <option value="1">09:00</option>
                <option value="1">09:30</option>
                <option value="1">10:00</option>
                <option value="1">10:30</option>
                <option value="1">11:00</option>
                <option value="1">11:30</option>
                <option value="1">12:00</option>
                <option value="1">12:30</option>
                <option value="1">13:00</option>
                <option value="1">13:30</option>
                <option value="1">14:00</option>
                <option value="1">14:30</option>
                <option value="1">15:00</option>
                <option value="1">15:30</option>
                <option value="1">16:00</option>
                <option value="1">16:30</option>
                <option value="1">17:00</option>
                <option value="1">17:30</option>
                <option value="1">18:00</option>
                <option value="1">18:30</option>
                <option value="1">19:00</option>
                <option value="1">19:30</option>
                <option value="1">20:00</option>
                <option value="1">20:30</option>
                <option value="1">21:00</option>
                <option value="1">21:30</option>
                <option value="1">22:00</option>
                <option value="1">22:30</option>
                <option value="1">23:00</option>
                <option value="1">23:30</option>
                <option value="1">00:00</option>
              </select>
            </div>
              </div>
              <div className="item">
                <p>Data de Partida</p>
                <input type="date" name="name" required/>
                <i className="fas fa-calendar-alt"></i>
              </div>
              <label for="passageiros">Número de passageiros:</label>
              <div className="input-group">
                <input type="number" id="passageiros" name="passageiros" value="0" min="0" />
              </div>



              <h5>Informações de Destino</h5>
              <div className="item">
                <p>Endereço de Destino</p>
                <input type="text" name="name" placeholder="Rua"/>
                <input type="text" name="name" placeholder="Bairro"/>
                <div className="city-item">
                  <input type="text" name="name" placeholder="Cidade" />
                  <input type="text" name="name" placeholder="Ponto de Referencia" />
                  <input type="text" name="name" placeholder="CEP" />
                  <select>
                    <option value="">Horário de Retorno</option>
                    <option value="1">07:00</option>
                    <option value="1">07:30</option>
                    <option value="1">08:00</option>
                    <option value="1">08:30</option>
                    <option value="1">09:00</option>
                    <option value="1">09:30</option>
                    <option value="1">10:00</option>
                    <option value="1">10:30</option>
                    <option value="1">11:00</option>
                    <option value="1">11:30</option>
                    <option value="1">12:00</option>
                    <option value="1">12:30</option>
                    <option value="1">13:00</option>
                    <option value="1">13:30</option>
                    <option value="1">14:00</option>
                    <option value="1">14:30</option>
                    <option value="1">15:00</option>
                    <option value="1">15:30</option>
                    <option value="1">16:00</option>
                    <option value="1">16:30</option>
                    <option value="1">17:00</option>
                    <option value="1">17:30</option>
                    <option value="1">18:00</option>
                    <option value="1">18:30</option>
                    <option value="1">19:00</option>
                    <option value="1">19:30</option>
                    <option value="1">20:00</option>
                    <option value="1">20:30</option>
                    <option value="1">21:00</option>
                    <option value="1">21:30</option>
                    <option value="1">22:00</option>
                    <option value="1">22:30</option>
                    <option value="1">23:00</option>
                    <option value="1">23:30</option>
                    <option value="1">00:00</option>
                    <option value="1">00:30</option>
                    <option value="1">01:00</option>
                    <option value="1">01:30</option>
                    <option value="1">02:30</option>
                    
                  </select>
                </div>
                  </div>
                  <div className="item">
                    <p>Data de Retorno</p>
                    <input type="date" name="name" required/>
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <label for="passageiros">Número de passageiros:</label>
                  <div className="input-group">
                    <input type="number" id="passageiros" name="passageiros" value="0" min="0" />
                  </div>
      <h5> Necessidade de Paradas no Percurso </h5>

      <div id="input-container">
        <div className="input-group">
          <input type="text" name="parada-numero[]" placeholder="Parada Nº" />
          <input type="text" name="nome-passageiro[]" placeholder="Nome do Passageiro e/ou Endereço" />
          <input type="text" name="motivo-parada[]" placeholder="Motivo da Parada" />
          <button type="button" onclick="adicionarInput(this)">+</button>
        </div>
      </div>
      
      <h3>3. Responsável pelos passageiros</h3>
      <div className="item">
        <p>Nome do Solicitante<span>*</span></p>
        <div className="name-item">
          <input type="text" name="name" placeholder="Primeiro Nome" />
          <input type="text" name="name" placeholder="Sobrenome" />
        </div>
      </div>
      <div className="item">
        <p>SIAPE<span>*</span></p>
        <input type="text" name="name"/>
      </div>
      <div className="item">
          <p>Telefone de Contato (c/ DDD)<span>*</span></p>
          <input type="text" name="name"/>
        </div>
      
  
   <h3>5. Relação dos passageiros </h3>
  <div id="formulario">
    <div className="container">
        <div className="titulo">Nome: Siape/Matrícula: Telefone: Comunidade:</div>
        <div className="linha">
            <input type="text" placeholder="Nome do passageiro" />
            <select className="tipo-id">
              <p>Siape/Matrícula</p>
                <option value="">Escolha uma opção</option>
                <option value="siape">Siape</option>
                <option value="matricula">Matrícula</option>
                <option value="naoaplica">Não se aplica</option>
            </select>
            <input type="text" className="input-id escondido" />
            <input type="text" placeholder= "Telefone (com DDD)" />
            <select className="comunidade">
                <option value="">Escolha uma opção</option>
                <option value="interna">Interna</option>
                <option value="externa">Externa</option>
            </select>
            <input type="text" className="especificacao escondido" placeholder="Especificação (Comunidade Externa)" />
            <button className="botao adicionar">+</button>
            <button className="botao remover escondido">-</button>
        </div>
    </div>


</div>
<div className="btn-block">
  <button type="submit" href="/">ENVIAR</button>
</div> 
</form>

</div>
    </div>

    </>
  )
}
