document.getElementById('add-money-btn')
    .addEventListener('click', function () {
        const addMoneyPin = document.getElementById('add-money-pin').value;
        if (addMoneyPin === "4321") {
            const myInputBalance = document.getElementById('my-balance').innerText;
            const addInputMoney = document.getElementById('add-amount').value;

            const myBalance = parseInt(myInputBalance);
            const addMoney = parseInt(addInputMoney);

            const totalBalance = myBalance + addMoney;
            document.getElementById('my-balance').innerText = totalBalance;

        }
        else {
            alert('Incorent your pin')
        }
    })


    