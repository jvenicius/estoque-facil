document.addEventListener("DOMContentLoaded", function() {
    const skuInput = document.getElementById('skuNumber');
    const searchIcon = document.querySelector('.search-icon');
    const nomeElement = document.querySelector('.container2 p:nth-child(2) strong');
    const fornecedorElement = document.querySelector('.container2 p:nth-child(3) strong');
    const estoqueElement = document.querySelector('.container2 p:nth-child(1) strong');
    const alertButton = document.getElementById('btnCriarAlerta');
    
    searchIcon.addEventListener('click', function() {
        const skuValue = skuInput.value.trim();
        if (skuValue) { 
            estoqueElement.textContent = 'Estoque: 100 un';
            alertButton.style.color = 'black';
            alertButton.style.cursor = 'pointer';
        } else {
            estoqueElement.textContent = 'Estoque:';
            alertButton.style.color = 'gray';
            alertButton.style.cursor = 'default';
            alert('Produto não encontrado');
        }
    });

    alertButton.addEventListener('click', function() {
        alert('Alerta gerado com sucesso!');
    });
});
