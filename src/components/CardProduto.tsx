/* Esta parte do código define o componente visual de um produto (um card) e 
permite que ele seja adicionado ao carrinho. */

// Importa React e o hook useContext para acessar o contexto do carrinho
import React, { useContext } from "react";
// Importa componentes visuais da MUI para montar o card do produto
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
// Importa a função de contexto que permite acessar o carrinho
import { CarrinhoContext } from "../contexts/CarrinhoContext"; // Importando o context

// Define as props que o componente CardProduto deve receber
type CardProdutoProps = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
};

// Define o componente funcional CardProduto, que recebe as props desestruturadas
const CardProduto: React.FC<CardProdutoProps> = ({ id, nome, descricao, preco, imagem }) => {
    // Usa o contexto para acessar a função que adiciona produtos ao carrinho
    const { adicionarProduto } = useContext(CarrinhoContext);
    
    return (
        // Card da MUI com largura máxima e margem
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            {/* Componente que exibe a imagem do produto */}
            <CardMedia
                component="img"
                height="140"
                image={imagem}
                alt={nome}
            />
            {/* Área de conteúdo com nome, descrição e preço */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nome}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                    {descricao}
                </Typography>
                <Typography gutterBottom variant="subtitle1" color="text.primary" sx={{ marginTop: 1}}>
                    R$ {preco.toFixed(2)}
                </Typography>
            </CardContent>
            {/* Área com o botão de ação ADICIONAR AO CARRINHO */}
            <CardActions>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="primary"
                    onClick={() =>
                        adicionarProduto({ 
                        id,
                        nome, 
                        descricao, 
                        preco, 
                        imagem,
                        quantidade: 1,
                    })}
                >
                    Adicionar ao Carrinho
                </Button>
            </CardActions>
        </Card>
    );
};

// Exporta o componente para ser usado na tela de cardápio
export default CardProduto;