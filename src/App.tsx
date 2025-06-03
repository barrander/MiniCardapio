// Arquivo principal da aplicação. Ponto de entrada visual da interface

import React from 'react';
// Importa as rotas da aplicação
import AppRoutes from './routes/AppRoutes';
// Importa o contexto do carrinho (Provider)
import { CarrinhoProvider } from './contexts/CarrinhoContext';

const App: React.FC = () => {
  return (
    /* Envolve toda a aplicação com o CarrinhoProvider,
    permitindo acesso ao estado do carrinho em qualquer componente */
    <CarrinhoProvider>
      <AppRoutes />
    </CarrinhoProvider>
  )
}

export default App;