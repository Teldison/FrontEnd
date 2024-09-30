function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const duvida = document.getElementById('duvida').value;
    let valid = true;

    // Reseta as mensagens
    document.getElementById('mensagem-sucesso').style.display = 'none';
    document.getElementById('mensagem-erro').style.display = 'none';

    // Validações simples
    if (nome === '') {
        document.getElementById('erro-nome').innerText = 'Por favor, preencha o nome.';
        valid = false;
    } else {
        document.getElementById('erro-nome').innerText = '';
    }

    if (email === '') {
        document.getElementById('erro-email').innerText = 'Por favor, preencha o email.';
        valid = false;
    } else {
        document.getElementById('erro-email').innerText = '';
    }

    if (duvida === '') {
        document.getElementById('erro-duvida').innerText = 'Por favor, preencha a dúvida.';
        valid = false;
    } else {
        document.getElementById('erro-duvida').innerText = '';
    }

    // Se todos os campos forem válidos
    if (valid) {
        document.getElementById('mensagem-sucesso').style.display = 'block';
        return true; 
    } else {
        document.getElementById('mensagem-erro').style.display = 'block';
        return false; 
    }
}

function validarNewsletter() {
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;

    // Reseta a mensagem de sucesso
    document.getElementById('mensagem-sucesso').style.display = 'none';

    // Valida o email
    if (email === "") {
        document.querySelector('.email-error').innerText = 'Erro: Por favor, preencha o e-mail.';
        return false; // Impede o envio do formulário
    } else if (!emailPattern.test(email)) {
        document.querySelector('.email-error').innerText = 'Erro: Por favor, insira um e-mail válido.';
        return false; // Impede o envio do formulário
    } else {
        document.querySelector('.email-error').innerText = ''; // Limpa mensagem de erro
        document.getElementById('mensagem-sucesso').style.display = 'block'; // Exibe mensagem de sucesso
        return true; // Impede o envio real do formulário (para testes)
    }
}



// Função para abrir o modal com os detalhes do produto
function abrirModal(id, titulo, imagem, descricao) {
    document.getElementById('modal-img').src = imagem;
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-descricao').innerText = descricao;

    // Adiciona ao carrinho ao clicar no botão
    document.getElementById('adicionar-carrinho').onclick = function() {
        adicionarAoCarrinho(id, titulo);
    };

    document.getElementById('modal').style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Função para adicionar o produto ao carrinho
function adicionarAoCarrinho(id, titulo) {
        const quantidade = parseInt(document.getElementById(`quantidade-${id}`).value);

        // Verifica se o produto já está no carrinho
        const produtoExistente = carrinho.find(produto => produto.id === id);

        if (produtoExistente) {
            produtoExistente.quantidade += quantidade;
        } else {
            carrinho.push({ id, titulo, quantidade });
        }

        alert(`${titulo} foi adicionado ao carrinho com sucesso!`);

        // Atualiza o badge com o número total de itens no carrinho
        atualizarBadgeCarrinho();

        fecharModal();
    }

    // Função para atualizar o número total de itens no carrinho
    function atualizarBadgeCarrinho() {
        const badge = document.getElementById('badge');
        
        // Verifica se o badge existe
        if (!badge) {
            console.error("Badge não encontrado!");
            return;
        }

        // Calcula o número total de itens no carrinho
        const totalItens = carrinho.reduce((total, produto) => total + produto.quantidade, 0);

        // Atualiza o texto do badge
        badge.textContent = totalItens;

        console.log(`Badge atualizado para: ${totalItens}`); // Verificação de log
    }

    // Garante que o badge seja atualizado ao carregar a página (se houver produtos no carrinho)
    document.addEventListener('DOMContentLoaded', () => {
        atualizarBadgeCarrinho();
    });
