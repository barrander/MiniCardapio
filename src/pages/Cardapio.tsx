import React from 'react';
import Header from '../components/Header';
import CardProduto from '../components/CardProduto';
import { Box } from '@mui/material';
import Carrinho from '../components/Carrinho';


const produtos = [
    {
        id: 1,
        nome: 'Burguer Classico',
        descricao: 'Pão brioche, blend de carne 150g, queijo, alface e tomate.',
        preco: 22.90,
        imagem: 'https://via.placeholder.com/300x140.png?text=Burger+Clássico',
        quantidade: 1
    },
    {
        id: 2,
        nome: 'Burguer Cheddar Bacon',
        descricao: 'Pão brioche, blend de carne 150g, cheddar cremoso, fatias de bacon crocantes.',
        preco: 27.90,
        imagem: 'https://via.placeholder.com/300x140.png?text=Cheddar+Bacon',
        quantidade: 2
    }
]

const Cardapio: React.FC = () => {
    return (
        <>
            <Header />
            <Box display="flex" flexWrap="wrap" justifyContent="center" p={2}>
                {produtos.map((item, index) => (
                    <CardProduto
                        key={item.id}
                        id={item.id}
                        nome={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                        imagem={item.imagem}
                    />
                ))}
            </Box>
        </>
    );
};

<Carrinho />

export default Cardapio;