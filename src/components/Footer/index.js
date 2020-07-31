import React from 'react';
import { FooterBase } from './styles';
import ferreira from '../../assets/images/ferreira.png';
import '../Menu/style.css'

function Footer() {
  return (
    <FooterBase>
      <a href="https://felipeferreiradev.github.io/personal-website-v2/" target="blank" >
        <img className="Logo" src={ferreira} alt="Felipe Ferreira Dev"/>
      </a>
      <br/>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
