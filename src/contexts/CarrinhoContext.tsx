import exp from 'constants';
import React, { createContext, useState, ReactNode, useContext } from 'react';

type Produto = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    quantidade: number;
};

type CarrinhoContextType = {
    carrinho: Produto[];
    adicionarProduto: (produto: Produto) => void;
    removerProduto: (nome: string) => void;
    limparCarrinho: () => void;
};

export const CarrinhoContext = createContext<CarrinhoContextType>({} as CarrinhoContextType);

export const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [carrinho, setCarrinho] = useState<Produto[]>([]);

    const adicionarProduto = (produto: Produto) => {
        setCarrinho([...carrinho, produto]);
        console.log("Carrinho atual:", carrinho);
    };

    const removerProduto = (nome: string) => {
        setCarrinho(carrinho.filter(item => item.nome !== nome));
    };

    const limparCarrinho = () => {
        setCarrinho([]);
    };

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarProduto, removerProduto, limparCarrinho}}>
          {children}  
        </CarrinhoContext.Provider>
    );

};

export const useCarrinho = () => useContext(CarrinhoContext);