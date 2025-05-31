/* O INDEX.TSX É A PORTA DE ENTRADA DA APLICAÇÃO
aqui é onde os Providers e o roteador (BrowseRouter) devem ser configurados, pra que tudo abaixo
incluindo o App.tsx possam acessar os contextos e as rotas!!!!  Aqui envolveremos o CarrinhoProvider */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CarrinhoProvider } from './contexts/CarrinhoContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CarrinhoProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </CarrinhoProvider>
  </React.StrictMode>
)
