import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

type CardProdutoProps = {
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
};

const CardProduto: React.FC<CardProdutoProps> = ({ nome, descricao, preco, imagem }) => {
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
                <Button size="small" variant="contained" color="primary">
                    Adicionar ao Carrinho
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardProduto;