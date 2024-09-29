function validarFormulario() {
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let duvida = document.getElementById('duvida').value.trim();
    let isValid = true;

    // Limpa mensagens de erro
    document.getElementById('erro-nome').innerText = '';
    document.getElementById('erro-email').innerText = '';
    document.getElementById('erro-duvida').innerText = '';

    // Valida nome
    if (nome === "") {
        document.getElementById('erro-nome').innerText = 'Por favor, preencha o nome.';
        isValid = false;
    }

    // Valida email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById('erro-email').innerText = 'Por favor, insira um email válido.';
        isValid = false;
    }

    // Valida dúvida
    if (duvida === "") {
        document.getElementById('erro-duvida').innerText = 'Por favor, preencha sua dúvida.';
        isValid = false;
    }

    return isValid; // Retorna true ou false para permitir ou impedir o envio do formulário
}

let carrinho = [];

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
    const quantidade = document.getElementById(`quantidade-${id}`).value;

    // Verifica se o produto já está no carrinho
    const produtoExistente = carrinho.find(produto => produto.id === id);

    if (produtoExistente) {
        produtoExistente.quantidade += parseInt(quantidade);
    } else {
        carrinho.push({ id, titulo, quantidade: parseInt(quantidade) });
    }

    alert(`${titulo} foi adicionado ao carrinho com sucesso!`);
    fecharModal();
}