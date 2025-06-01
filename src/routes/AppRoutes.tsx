/* O AppRoutes.tsx é responsável por definir as rotas da aplicação
 usando a biblioteca react-router-dom. */

 // Importações do React e da biblioteca de rotas
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importação das páginas que serão exibidas nas rotas
import Home from '../pages/Home';
import Cardapio from "../pages/Cardapio";
import Carrinho from '../pages/Carrinho';

// Componente de rotas da aplicação
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Rota raiz ("/") que carrega a página Home */}
            <Route path="/" element={<Home />} />
            {/* Rota "/Cardapio" que carrega a página de produtos */}
            <Route path="/Cardapio" element={<Cardapio />} />
            {/* Rota "/Carrinho" que carrega a página do carrinho */}
            <Route path="/Carrinho" element={<Carrinho />} />
        </Routes>
    );
};

// Exporta o componente de rotas para ser usado no App.tsx
export default AppRoutes;