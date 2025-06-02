// *** TELA INICIAL ***

// Importa o React, necessário para criar componentes com JSX
import React from "react";
// Importa o componente Header da pasta de componentes
import Header from "../components/Header";
import { Box, Button, Card, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Define o componente funcional Home, com tipagem do React (FC = Function Component)
const Home: React.FC = () => {
    return (
        // Fragmento vazio <> </> usado para agrupar elementos sem adicionar nós extras ao DOM
        <>
            <Header />
            <h1>Seja bem-vindo à nossa hamburgueria!</h1>
            <Box>
                <Button
                    component={Link}
                    to="/cardapio"
                    variant="contained"
                    color="primary"
                >
                    Visualizar Cardápio
                </Button>
            </Box>
        </>
    );
};

// Exporta o componente Home para ser utilizado em outras partes da aplicação (ex: nas rotas)
export default Home;