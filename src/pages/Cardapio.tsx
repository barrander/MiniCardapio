/* Este código exibe o cardápio de produtos (hambúrgueres) e renderiza 
dinamicamente cada item utilizando o componente CardProduto */

// Importa React para criar o componente
import React from 'react';
// Importa o cabeçalho da aplicação
import Header from '../components/Header'; 
// Importa o componente que apresenta visualmente um produto do cardápio
import CardProduto from '../components/CardProduto';
// Importa o componente Box da biblioteca Material UI para estilização com flexbox
import { Box } from '@mui/material';
// Importa o componente Carrinho (provavelmente mostra o carrinho de compras na tela)
import Carrinho from './Carrinho';  

// Array local com os dados dos produtos do cardápio
const produtos = [
    {
        id: 1,
        nome: 'Burguer Classico',
        descricao: 'Pão brioche, blend bovino 150g, cheddar fatiado, alface americana, tomate, molho especial.',
        preco: 19.90,
        imagem: 'https://via.placeholder.com/300x140.png?text=Burger+Clássico',
        quantidade: 1
    },
    {
        id: 2,
        nome: 'Burguer Cheddar Bacon',
        descricao: 'Pão brioche, blend bovino 150g, cheddar fatiado, tiras de bacon crocantes, cebola caramelizada, baconese.',
        preco: 22.90,
        imagem: 'https://via.placeholder.com/300x140.png?text=Cheddar+Bacon',
        quantidade: 2
    },

    {
        id: 3,
        nome: 'Burguer Swine Gorgon',
        descricao: 'Pão Australiano, blend suíno 150g, creme de gorgonzola, abacaxi caramelizado, rúcula, maionese.',
        preco: 24.90,
        imagem: "#",
        quantidade: 3
    },

    {
        id: 4,
        nome: 'Burguer Chilli Jelly',
        descricao: 'Pão brioche, blend bovino 150g, queijo provolone, alface americana, geléia levemente apimentada, molho especial.',
        preco: 25.90,
        imagem: "#",
        quantidade: 3
    },
]

// Componente funcional Cardapio, que renderiza a página do cardápio
const Cardapio: React.FC = () => {
    return (
        <>
            {/* Cabeçalho da página */}
            <Header />
            {/* Container com estilo flexível que renderiza os produtos lado a lado */}
            <Box display="flex" flexWrap="wrap" justifyContent="center" p={2}>
                 {/* Percorre o array de produtos e renderiza um componente CardProduto para cada um */}
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
/* Exibe o carrinho de compras abaixo dos produtos */
<Carrinho />

// Exporta o componente para uso em rotas ou em outros arquivos
export default Cardapio;