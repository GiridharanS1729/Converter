function convertScore() {
    const inputScore = document.getElementById('inputScore').value;
    const inputMax = document.getElementById('inputMax').value;
    const outputMax = document.getElementById('outputMax').value;
    
    if(inputScore && inputMax && outputMax) {
        const result = (inputScore / inputMax) * outputMax;
        document.getElementById('result').innerText = `Converted Score: ${result.toFixed(2)} out of ${outputMax}`;
    } else {
        document.getElementById('result').innerText = 'Please fill out all fields';
    }
}
