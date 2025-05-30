import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1}}>
                    Minha Hamburgueria
                </Typography>
                <Button color="inherit" component={Link} to="/">Início</Button>
                <Button color="inherit" component={Link} to="/cardapio">Cardápio</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;