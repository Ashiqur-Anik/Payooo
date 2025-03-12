document.getElementById("login-btn").addEventListener("click", function () {
    const numberInput = document.getElementById('input-number-value').value;
    const pinValuee = document.getElementById('input-pin-value').value;

    if (numberInput === "01877" && pinValuee === '1234') {
        window.location.href = "/home.html";    
    }
    else {
        alert('Incouret your input')
    }
})