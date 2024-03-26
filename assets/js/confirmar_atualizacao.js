function confirmarAlteracao() {
    // Exibe um prompt com a mensagem desejada
    var confirmacao = confirm("Você deseja realmente confirmar a alteração?");

    // Se o usuário clicar em OK, a alteração é confirmada
    if (confirmacao) {
        alert("Alteração confirmada!"); // Mensagem de confirmação (pode ser personalizada)
    } else {
        alert("Alteração cancelada."); // Mensagem de cancelamento (pode ser personalizada)
    }
}