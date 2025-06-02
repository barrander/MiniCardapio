/* O componente "Carrinho.tsx" é responsável por exibir os itens do carrinho
 na tela e permitir que o usuário remova produtos. */

 // Importa o React
import React from 'react';
// Importa o hook personalizado que fornece o carrinho e a função de remover produto
import { useCarrinho } from '../contexts/CarrinhoContext';
// Importa componentes da MUI
import { Box, Button, Card, Typography } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { Link } from 'react-router-dom';

// Componente Carrinho
const Carrinho: React.FC = () => {
    // Pega os dados do carrinho e a função para remover produtos
    const { carrinho, removerProduto } = useCarrinho();

    // Calcula o valor total dos itens no carrinho
    const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        
        <Box p={3}>
            {/* Título da página */}
            <Typography variant="h4" gutterBottom>
                Seu Carrinho
            </Typography>

            {/* Se o carrinho estiver vazio */}
            {carrinho.length === 0 ? (
                <Typography>Você ainda não adicionou nenhum item no seu carrinho!</Typography>
            ) : (
                <Box display="flex" flexDirection="column" gap={2}>
                    {/* Mapeia os produtos do carrinho e os exibe */}
                    {carrinho.map((item) => (
                        <Card key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2}}>
                            <Box>
                                <Typography variant="h6">{item.nome}</Typography>
                                <Typography variant="body2">
                                    Quantidade: {item.quantidade} - R$ {(item.preco * item.quantidade).toFixed(2)}
                                </Typography>
                            </Box>

                            {/* Botão para remover o produto do carrinho */}
                            <Button 
                                variant="contained"
                                color="error"
                                onClick={() => removerProduto(item.nome)}
                            >
                                Remover
                            </Button>
                        </Card>
                    ))}
                </Box>
                )}
                
                {/* Exibe o total somente se o carrinho tiver itens */}
                {carrinho.length > 0 && (
                    <Box mt={4}>
                        <Typography variant="h5">
                            Total: R$ {total.toFixed(2)}
                        </Typography>
                    </Box>
                )};

            {/* Botões de voltar para o carrinho e ir para entrega */}
            <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
                <Button
                    component={Link}
                    to="/cardapio"
                    variant="outlined"
                    color="primary"
                >
                    Voltar para o Cardápio
                </Button>

                <Button
                    component={Link}
                    to="/entrega"
                    variant="contained"
                    color="primary"
                >
                    Ir para Entrega
                </Button>
            </Box>

        </Box>

    );

};

// Exporta o componente para ser usado em outras partes da aplicação
export default Carrinho;