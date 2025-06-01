/* Essa parte do código implementa o contexto global do carrinho de compras, 
permitindo que qualquer componente acesse, adicione, remova ou limpe produtos do carrinho. */

import exp from 'constants';
// Importa React, funções para criar e acessar contextos, estado e tipos
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define o tipo dos produtos do carrinho
type Produto = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    quantidade: number;
};

// Define quais funções e dados o contexto do carrinho irá disponibilizar
type CarrinhoContextType = {
    carrinho: Produto[]; // lista de produtos no carrinho
    adicionarProduto: (produto: Produto) => void;
    removerProduto: (nome: string) => void;
    limparCarrinho: () => void;
};

// Cria o contexto com o tipo definido acima
export const CarrinhoContext = createContext<CarrinhoContextType>({} as CarrinhoContextType);

// Cria o componente que proverá os dados do carrinho para os componentes filhos
export const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Estado para armazenar os produtos no carrinho
    const [carrinho, setCarrinho] = useState<Produto[]>([]);
    
    // Função que adiciona um produto ao carrinho
    const adicionarProduto = (produto: Produto) => {
        setCarrinho([...carrinho, produto]); // adiciona o novo produto à lista atual
        console.log("Carrinho atual:", carrinho);
    };

    // Função que remove um produto do carrinho com base no nome
    const removerProduto = (nome: string) => {
        setCarrinho(carrinho.filter(item => item.nome !== nome));
    };

    // Função que limpa completamente o carrinho
    const limparCarrinho = () => {
        setCarrinho([]);
    };

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarProduto, removerProduto, limparCarrinho}}>
          {children}  
        </CarrinhoContext.Provider>
    );

};

// Função customizada para usar o contexto do carrinho mais facilmente
export const useCarrinho = () => useContext(CarrinhoContext);