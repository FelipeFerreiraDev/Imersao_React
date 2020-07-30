import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais);

function setValue(chave, valor) {
  setValues({
    ...values,
    [chave]: valor,
  })
}

function handleChange(event) {
  const { getAttribute, value} = event.target;
  setValue(getAttribute('name'), value);
}

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}>

      <div>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={values.nome}
            name="nome"
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
      <label>
          Descrição:
          <textarea
            type="text"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
          />
        </label>

        <label>
          Cor:
          <input
            type="color"
            value={values.cor}
            name="cor"
            onChange={handleChange}
          />
        </label>
      </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={`${categoria}${index}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;