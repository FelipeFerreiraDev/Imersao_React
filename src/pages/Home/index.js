import React from 'react';
import dadosInicias from '../../data/dados_iniciais.json';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosInicias.categorias[0].videos[0].titulo}
        url={dadosInicias.categorias[0].videos[0].url}
        videoDescription={"Para espantar a tristeza!!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default Home;
