document.getElementById("login-btn").addEventListener("click", function () {
    const numberInput = document.getElementById('input-number-value').value;
    const pinValuee = document.getElementById('input-pin-value').value;

    if (numberInput === "01877052200" && pinValuee === '13397') {
        window.location.href = "home.html";    
    }
    else {
        alert('Incouret your input')
    }
})