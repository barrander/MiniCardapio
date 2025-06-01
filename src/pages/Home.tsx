// *** TELA INICIAL ***

// Importa o React, necessário para criar componentes com JSX
import React from "react";
// Importa o componente Header da pasta de componentes
import Header from "../components/Header";

// Define o componente funcional Home, com tipagem do React (FC = Function Component)
const Home: React.FC = () => {
    return (
        // Fragmento vazio <> </> usado para agrupar elementos sem adicionar nós extras ao DOM
        <>
            <Header />
            <h1>Clique em cardápio e visualize os nossos deliciosos burguers!</h1>
        </>
    );
};

// Exporta o componente Home para ser utilizado em outras partes da aplicação (ex: nas rotas)
export default Home;