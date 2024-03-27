document.addEventListener("DOMContentLoaded", function() {
    const skuInput = document.getElementById('skuNumber');
    const searchIcon = document.querySelector('.search-icon');
    const nomeElement = document.querySelector('.container2 p:nth-child(1)');
    const fornecedorElement = document.querySelector('.container2 p:nth-child(2)');
    const quantidadeElement = document.querySelector('.container2 p:nth-child(3)');
    const loteElement = document.querySelector('.container2 p:nth-child(4)');
    const alterarButton = document.querySelector('.btn-submit');
    
    searchIcon.addEventListener('click', function() {
        const skuValue = skuInput.value.trim();
        if (skuValue) { 
            nomeElement.textContent = 'Nome: XYZ';
            fornecedorElement.textContent = 'Fornecedor: ABC';
            quantidadeElement.textContent = 'Quantidade: 123';
            loteElement.textContent = 'Lote: KWY';
            alterarButton.style.color = 'black';
            alterarButton.style.cursor = 'pointer';
        } else {
            nomeElement.textContent = 'Nome:';
            fornecedorElement.textContent = 'Fornecedor:';
            quantidadeElement.textContent = 'Quantidade:';
            loteElement.textContent = 'Lote:';
            alterarButton.style.color = 'gray';
            alterarButton.style.cursor = 'default';
            alert('Produto não encontrado');
            return; 
        }
    });

    alterarButton.addEventListener('click', function() {
        window.location.href = 'confirmar_atualizacao.html';
    });
});
