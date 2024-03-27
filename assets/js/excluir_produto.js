document.addEventListener("DOMContentLoaded", function() {
    const skuInput = document.getElementById('skuNumber');
    const searchIcon = document.querySelector('.search-icon');
    const nomeElement = document.querySelector('.container2 p:nth-child(1)');
    const fornecedorElement = document.querySelector('.container2 p:nth-child(2)');
    const quantidadeElement = document.querySelector('.container2 p:nth-child(3)');
    const loteElement = document.querySelector('.container2 p:nth-child(4)');
    const excluirButton = document.querySelector('.btn-submit');
    
    searchIcon.addEventListener('click', function() {
        const skuValue = skuInput.value.trim();
        if (skuValue) { 
            nomeElement.textContent = 'Nome: XYZ';
            fornecedorElement.textContent = 'Fornecedor: ABC';
            quantidadeElement.textContent = 'Quantidade: 123';
            loteElement.textContent = 'Lote: KWY';
            excluirButton.style.color = 'black';
            excluirButton.style.cursor = 'pointer';
        } else {
            nomeElement.textContent = 'Nome:';
            fornecedorElement.textContent = 'Fornecedor:';
            quantidadeElement.textContent = 'Quantidade:';
            loteElement.textContent = 'Lote:';
            excluirButton.style.color = 'gray';
            excluirButton.style.cursor = 'default';
            alert('Produto não encontrado');
            return; 
        }
    });

    excluirButton.addEventListener('click', function() {
        const confirmacao = confirm("Deseja excluir o produto?");
        if (confirmacao) {
            alert("Produto excluído com sucesso!");
        }
    });
});
