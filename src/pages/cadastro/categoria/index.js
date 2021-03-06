import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import './style.css';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm} = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
      const URL = 'https://comedyfliix.herokuapp.com/categorias'; 
      fetch(URL)
       .then(async (respostaDoServer) =>{
          const resposta = await respostaDoServer.json();
          setCategorias([ ...resposta,]);
        });})

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();

          setCategorias([
            ...categorias,
            values
          ]);

          clearForm(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <button className="buttonAnimado">
          Cadastrar
        </button>
      </form>
      
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, id) => {
          return (
            <li key={`${categoria}${id}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>

      <Link to="/" className="home">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria