document.addEventListener("DOMContentLoaded", function() {
    const skuInput = document.getElementById('skuNumber');
    const searchIcon = document.querySelector('.search-icon');
    const estoqueElement = document.querySelector('.container2 p:nth-child(1) strong');
    const alertElement = document.querySelector('.container2 p:nth-child(2) strong');
    const alertButton = document.getElementById('btnAlterarAlerta');
    
    searchIcon.addEventListener('click', function() {
        const skuValue = skuInput.value.trim();
        if (skuValue) { 
            estoqueElement.textContent = 'Estoque: 100 un';
            alertElement.textContent = 'Alerta: 50 un';
            alertButton.style.color = 'black';
            alertButton.style.cursor = 'pointer';
        } else {
            estoqueElement.textContent = 'Estoque:';
            alertElement.textContent = 'Alerta:';
            alertButton.style.color = 'gray';
            alertButton.style.cursor = 'default';
            alert('Produto não encontrado');
        }
    });
});
