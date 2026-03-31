
    /**
     * ESPAÇO PARA O DESAFIO
     * Instruções: 
     * 1. Capture os valores dos inputs (simulando o 'leia')
     * 2. Converta para números Reais (Float)
     * 3. Calcule a média aplicando a regra de precedência correta
     * 4. Exiba no elemento #output (simulando o 'escreva')
     */
    function resolverDesafio() {
        const outputDiv = document.getElementById('output');
        
        let n1 = parseFloat(document.getElementById('n1').value)
        let n2 = parseFloat(document.getElementById('n2').value)
        let n3 = parseFloat(document.getElementById('n3').value)
        let n4 = parseFloat(document.getElementById('n4').value)

        if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        outputDiv.innerHTML = '<span style="color: red;">Erro: Por favor, preencha todas as 4 notas com valores numéricos.</span>';
        return;
    }
     const notas = [n1, n2, n3, n4];
    for (let nota of notas) {
        if (nota < 0.0 || nota > 10.0) {
            outputDiv.innerHTML = '<span style="color: red;">Erro: Todas as notas devem estar entre 0.0 e 10.0.</span>';
            return;
        }
    }
    
            let media = n1 + n2 + n3 + n4
            let mediaFinal = media / 4
            outputDiv.textContent = `A média é: ${mediaFinal.toFixed(2)}`;
            
        // --- SEU CÓDIGO COMEÇA AQUI ---
        
        // Exemplo de como capturar:
        // let n1 = parseFloat(document.getElementById('n1').value);

        // --- SEU CÓDIGO TERMINA AQUI ---
    }