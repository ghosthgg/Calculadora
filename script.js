function calculatePercentage(event) {
    event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    const number = parseFloat(document.getElementById('number').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
    
    if (isNaN(number) || isNaN(percentage)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const percentageValue = (number * percentage) / 100;
    const result = number - percentageValue;
    document.getElementById('result').textContent = result.toFixed(2);
}

