import React from 'react';
import { useCarrinho } from '../contexts/CarrinhoContext';

const Carrinho: React.FC = () => {

    const { carrinho, removerProduto } = useCarrinho();

    const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        <div style={{ padding: '1rem', background: '#eee', borderRadius: '8px' }}>
            <h2>Carrinho</h2>
            {carrinho.length === 0 ? (
                <p>Seu carrinho está vazio!</p>
            ) : (
                <ul>
                    {carrinho.map(item => (
                        <li key={item.id} style={{ marginBottom: '0.5rem' }}>
                            {item.nome} x {item.quantidade} - R$ {(item.preco * item.quantidade).toFixed(2)}
                            <button 
                                onClick={() => removerProduto(item.nome)}
                                style={{ marginLeft: '1rem'}}
                            >
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: R$ {total.toFixed(2)}</h3>
        </div>
    );

};

export default Carrinho;