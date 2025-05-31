import React, { useContext } from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { CarrinhoContext } from "../contexts/CarrinhoContext";

type CardProdutoProps = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
};

const CardProduto: React.FC<CardProdutoProps> = ({ id, nome, descricao, preco, imagem }) => {
    
    const { adicionarProduto } = useContext(CarrinhoContext);
    
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={imagem}
                alt={nome}
            />
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
            <CardActions>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="primary"
                    onClick={() => adicionarProduto({ 
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

export default CardProduto;