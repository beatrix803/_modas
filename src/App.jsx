import React from 'react';
import './index.css';
import logo from './assets/moda.png';  // Importando a logo
import img1 from './assets/1.png';    // Importe a imagem 1
import img2 from './assets/2.png';    // Importe a imagem 2
import img3 from './assets/3.png';    // Importe a imagem 3

function App() {
  const colecoes = [
    { nome: 'Look Casual', img: img1 },
    { nome: 'Look Elegante', img: img2 },
    { nome: 'Look de Verão', img: img3 },
  ];

  return (
    <>
      {/* Header */}
      <header className="header">
        <img src={logo} alt="Logo Estilo Moda" className="logo" />
        <nav>
          <a href="#home">Home</a>
          <a href="#colecoes">Coleções</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Main / Banner */}
      <section className="banner" id="home">
        <div className="banner-texto">
          <h2>Descubra seu estilo</h2>
          <p>Tendências, looks e inspirações para você se destacar.</p>
        </div>
      </section>

      {/* Coleções */}
      <section className="colecoes" id="colecoes">
        <h2>Coleções da Estação</h2>
        <div className="colecao-grid">
          {colecoes.map((c, i) => (
            <div className="colecao-item" key={i}>
              <img src={c.img} alt={c.nome} />
              <h3>{c.nome}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contato">
        <p>© 2025 Estilo Moda</p>
        <div>
          <a href="#">Instagram</a> | <a href="#">Facebook</a> | <a href="#">Contato</a>
        </div>
      </footer>
    </>
  );
}

export default App;
