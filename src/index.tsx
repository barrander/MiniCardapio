/* O INDEX.TSX É A PORTA DE ENTRADA DA APLICAÇÃO
aqui é onde os contextos globais (Providers) e o roteador (BrowseRouter) devem ser configurados, pra que tudo abaixo
incluindo o App.tsx possam acessar os contextos e as rotas!!!!  Aqui envolveremos o CarrinhoProvider */

import React from 'react';
import ReactDOM from 'react-dom/client';
// Componente raiz da aplicação
import App from './App'; 
import './index.css';
// Habilita navegação entre páginas
import { BrowserRouter } from 'react-router-dom';
// Provedor do estado do carrinho
import { CarrinhoProvider } from './contexts/CarrinhoContext';

// Cria a aplicação React e renderiza ela dentro do elemento com id="root" no index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Ativa verificações extras durante o desenvolvimento
  <React.StrictMode> 
    {/* Permite que toda a aplicação acesse o carrinho de compras */}
    <CarrinhoProvider>
      {/* Controla a navegação por rotas */}
      <BrowserRouter>
        {/* Componente principal que carrega as rotas */}
        <App/>
      </BrowserRouter>
    </CarrinhoProvider>
  </React.StrictMode>
)
