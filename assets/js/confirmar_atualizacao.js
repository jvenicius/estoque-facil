function confirmarAlteracao() {
    var confirmacao = confirm("Você deseja realmente confirmar a alteração?");
    if (confirmacao) {
        alert("Alteração confirmada!"); 
    } else {
        alert("Alteração cancelada."); 
    }
}