import React, { useEffect, useState } from 'react';
import { Container, TextField, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCarrinho } from '../contexts/CarrinhoContext';

// Componente da tela de Informações de Entrega
const Entrega: React.FC = () => {
  // Estado para armazenar o CEP digitado
  const [cep, setCep] = useState('');

  // Estado para armazenar os dados do endereço retornados pela API ViaCEP
  const [endereco, setEndereco] = useState({
    rua: '',
    bairro: '',
    cidade: '',
    estado: ''
  });

  // useEffect que será executado toda vez que o CEP mudar
  useEffect(() => {
    const cepLimpo = cep.replace(/\D/g, ''); // Remove qualquer caractere que não seja número
    if (cepLimpo.length === 8) {
      // Se o CEP tiver 8 dígitos, faz requisição para a API ViaCEP
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            // Atualiza o estado com os dados retornados
            setEndereco({
              rua: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf
            });
          }
        })
        .catch(error => {
          console.error("Erro ao buscar o CEP:", error);
        });
    }
  }, [cep]);

  const { carrinho } = useCarrinho();
  // Função para envio do pedido via mensagem WhatsApp
  const enviarParaWhatsApp = () => {
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }

        const itensFormatados = carrinho.map(item => (
        `• ${item.nome} (Qtd: ${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}`
        )).join('\n');

        const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

        const mensagem = `
            📦 *Novo Pedido!*

            ${itensFormatados}

            💰 *Total:* R$ ${total.toFixed(2)}

            📍 *Endereço de Entrega:*
            Rua: ${endereco.rua}, Bairro: ${endereco.bairro}
            Cidade: ${endereco.cidade} - ${endereco.estado}
            CEP: ${cep}
                `.trim();

        const mensagemCodificada = encodeURIComponent(mensagem);
        const numeroWhatsApp = '5555555555555';
        const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

        window.open(url, '_blank');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      {/* Título da página */}
      <Typography variant="h4" gutterBottom>
        Informações de Entrega
      </Typography>

      {/* Formulário de endereço com espaçamento entre os campos */}
      <Box component="form" display="flex" flexDirection="column" gap={2}>
        {/* Campo para digitar o CEP */}
        <TextField
          label="CEP"
          variant="outlined"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        {/* Campos preenchidos automaticamente (ou manualmente, se necessário) */}
        <TextField
          label="Rua"
          variant="outlined"
          value={endereco.rua}
          onChange={(e) => setEndereco({ ...endereco, rua: e.target.value })}
        />

        <TextField
          label="Bairro"
          variant="outlined"
          value={endereco.bairro}
          onChange={(e) => setEndereco({ ...endereco, bairro: e.target.value })}
        />

        <TextField
          label="Cidade"
          variant="outlined"
          value={endereco.cidade}
          onChange={(e) => setEndereco({ ...endereco, cidade: e.target.value })}
        />

        <TextField
          label="Estado"
          variant="outlined"
          value={endereco.estado}
          onChange={(e) => setEndereco({ ...endereco, estado: e.target.value })}
        />

        {/* Botões de navegação */}
        <Box display="flex" justifyContent="space-between" mt={3}>
          {/* Botão que leva de volta para a página do carrinho */}
          <Button
            component={Link}
            to="/carrinho"
            variant="outlined"
            color="secondary"
          >
            Voltar para o Carrinho
          </Button>

          {/* Botão de confirmação de entrega (sem ação funcional no momento) */}
          <Button
            variant="contained"
            color="primary"
            disabled={!cep || !endereco.rua} // Desabilita se não tiver CEP ou Rua preenchida
            onClick={enviarParaWhatsApp}
          >
            Confirmar Entrega
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Entrega;