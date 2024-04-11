document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit").addEventListener("click", function(event) {
        var nome = document.getElementById("nome").value.trim();
        var containsNumbers = /\d/.test(nome);
        if (nome === "") {
            alert("Campo nome deve ser preenchido.");
            event.preventDefault(); 
        } else if (containsNumbers) {
            alert("Números não são permitidos no campo nome.");
            event.preventDefault(); 
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit").addEventListener("click", function(event) {
        var cpf = document.getElementById("cpf").value.trim();
        if (cpf === "") {
            alert("Favor inserir CPF.");
            event.preventDefault(); 
        } else if (!/^\d{11}$/.test(cpf)) {
            alert("Campo CPF permitido somente números. Digite os 11 dígitos sem traços ou espaços.");
            event.preventDefault(); 
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("submit").addEventListener("click", function(event) {
        
        var email = document.getElementById("email").value.trim();
        
        
        if (!isValidEmail(email)) {
            alert("Por favor, insira um email válido.");
            event.preventDefault(); 
        }
    });

    
    function isValidEmail(email) {
        
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); 
    }
});


document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("submit").addEventListener("click", function(event) {
        
        var telefone = document.getElementById("fone").value.trim();
        
        
        if (!isValidTelefone(telefone)) {
            alert("Por favor, insira um telefone válido no formato (00)00000-0000.");
            event.preventDefault(); 
        }
    });

    
    function isValidTelefone(telefone) {
        
        var telefoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
        return telefoneRegex.test(telefone); 
    }
});



document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("submit").addEventListener("click", function(event) {
       
        var senha = document.getElementById("senha").value.trim();
        var senhaRepetida = document.getElementById("senha-repetida").value.trim();
        
        
        if (senha === "" || senhaRepetida === "") {
            alert("Por favor, preencha ambos os campos de senha.");
            event.preventDefault(); 
        } else if (senha !== senhaRepetida) {
            alert("Por favor, repita sua senha corretamente.");
            event.preventDefault(); 
        }
    });

   
    document.getElementById("senha-repetida").addEventListener("input", function(event) {
        var senhaRepetida = this.value.trim();
        if (!/^[0-9a-zA-Z]+$/.test(senhaRepetida)) {
            alert("Caracteres especiais não são válidos.");
            this.value = ''; 
        }
    });
});







