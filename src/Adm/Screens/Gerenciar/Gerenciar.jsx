import React, { useState, useEffect } from 'react'
import HeaderAdm from '../../Components/HeaderAdm/HeaderAdm'
import MenuAdm from '../../Components/MenuAdm/MenuAdm'

const data = [
  { id: 1, tipo: 'Carro', modelo: 'Modelo 1', placa: 'ABC123', capacidade: 5, status: 'Ativo' },
  { id: 2, tipo: 'Moto', modelo: 'Modelo 2', placa: 'XYZ789', capacidade: 1, status: 'Inativo' },
  { id: 3, tipo: 'Caminhão', modelo: 'Modelo 3', placa: '123DEF', capacidade: 10, status: 'Ativo' },
  { id: 4, tipo: 'Van', modelo: 'Modelo 3', placa: '123DEF', capacidade: 10, status: 'Ativo' },
  { id: 5, tipo: 'Onibus', modelo: 'Modelo 3', placa: '123DEF', capacidade: 10, status: 'Ativo' },
  { id: 6, tipo: 'Onibus', modelo: 'Modelo 3', placa: '123DEF', capacidade: 10, status: 'Ativo' },
  { id: 7, tipo: 'Onibus', modelo: 'Modelo 3', placa: '123DEF', capacidade: 10, status: 'Ativo' },
  { id: 8, tipo: 'Carro', modelo: 'Modelo 3', placa: '123DEF', capacidade: 10, status: 'Ativo' },
  { id: 9, tipo: 'Van', modelo: 'Modelo 3', placa: '123DEF', capacidade: 10, status: 'Ativo' },
  { id: 10, tipo: 'Van', modelo: 'Modelo 3', placa: '123DEF', capacidade: 10, status: 'Ativo' },
  { id: 11, tipo: 'Caminhão', modelo: 'Modelo 3', placa: '123DEF', capacidade: 10, status: 'Ativo' },
];

const itemsPerPage = 6;

const Gerenciar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedCategory, currentPage]);

  const renderList = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = filteredData.slice(startIndex, endIndex);

    return (
      <tbody>
        {currentPageData.map(item => (
          <tr key={item.id}>
            <td>{item.tipo}</td>
            <td>{item.modelo}</td>
            <td>{item.placa}</td>
            <td>{item.capacidade}</td>
            <td>
              <select onChange={(e) => changeStatus(item.id, e.target.value)} value={item.status}>
                <option value="Livre">Livre</option>
                <option value="Reservado">Reservado</option>
                <option value="Em Manutenção">Em Manutenção</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  const updatePaginationButtons = () => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    return (
      <div>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Próximo</button>
      </div>
    );
  };

  const applyFilters = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const updatedFilteredData = data.filter(item => {
      const matchesSearch = (
        item.modelo.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.tipo.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.placa.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.status.toLowerCase().includes(lowerCaseSearchTerm)
      );

      if (selectedCategory === 'All') {
        return matchesSearch;
      } else {
        return item[selectedCategory.toLowerCase()].toLowerCase().includes(lowerCaseSearchTerm);
      }
    });

    setCurrentPage(1);
    setFilteredData(updatedFilteredData);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const changeStatus = (itemId, newStatus) => {
    const updatedData = data.map(item => (item.id === itemId ? { ...item, status: newStatus } : item));
    setFilteredData(updatedData);
  };

  return (
    <div>
      <div>
        <label htmlFor="search">Pesquisar:</label>
        <input
          type="text"
          id="search"
          placeholder="Digite o nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label htmlFor="filter">Filtrar por Categoria:</label>
        <select
          id="filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">Todas</option>
          <option value="Tipo">Tipo de veículo</option>
          <option value="Placa">Placa do veículo</option>
          <option value="Capacidade">Capacidade</option>
          <option value="Status">Status</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Tipo de Veículo</th>
            <th>Modelo do Veículo</th>
            <th>Placa do Veículo</th>
            <th>Capacidade</th>
            <th>Status</th>
          </tr>
        </thead>
        {renderList()}
      </table>
      {updatePaginationButtons()}
    </div>
  );
};

export default Gerenciar;
