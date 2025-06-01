// CABEÇALHO - Componente de navegação principal da aplicação

import React from 'react';
// Importa componentes de interface prontos da MUI
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// Link do React Router para navegação sem recarregar a página
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <AppBar position="static"> {/* Barra de navegação fixa no topo */}
            <Toolbar> {/* Container interno da AppBar */}

                {/* Título da aplicação com espaçamento à direita */}
                <Typography variant="h6" sx={{ flexGrow: 1}}>
                    Minha Hamburgueria
                </Typography>

                {/* Botões de navegação entre páginas, usando Link do React Router */}
                <Button color="inherit" component={Link} to="/">Início</Button>
                <Button color="inherit" component={Link} to="/cardapio">Cardápio</Button>
                <Button color="inherit" component={Link} to="/carrinho">Carrinho</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;