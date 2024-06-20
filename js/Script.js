function reset() {
    document.getElementById('temperature').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('formula').textContent = '';
}

function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var resultElement = document.getElementById('result');
    var formulaElement = document.getElementById('formula');
    var result, formula;

    // Validasi input
    if (isNaN(temperature)) {
        alert('Please enter a valid temperature!');
        return;
    }

    if (unit === 'celsius') {
        result = (temperature * 1.8) + 32;
        formula = '(' + temperature + ' °C × 1.8) + 32 = ' + result + ' °F';
        resultElement.textContent = 'Result: ' + formatResult(result) + ' °F';
        formulaElement.textContent = 'Formula: ' + formula;
    } else if (unit === 'fahrenheit') {
        result = (temperature - 32) * 5/9;
        formula = '(' + temperature + ' °F - 32) × 1.8 = ' + result.toFixed(2) + ' °C';
        resultElement.textContent = 'Result: ' + formatResult(result) + ' °C';
        formulaElement.textContent = 'Formula: ' + formula;
    }
}

function formatResult(value) {
    if (Number.isInteger(value)) {
        return value.toString();
    } else {
        return value.toFixed(2);
    }
}
