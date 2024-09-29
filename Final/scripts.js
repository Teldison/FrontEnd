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