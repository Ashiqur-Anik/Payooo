// add money calculation
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

// cash out calculation

document.getElementById("cash-out-btn")
    .addEventListener('click', function () {

        const cashOutPin = document.getElementById('Cash-out-pin').value;
        if (cashOutPin === "4321") {
            const myInputBalance = document.getElementById('my-balance').innerText;
            const cashOutInputAmount = document.getElementById('Cash-out-amount').value;

            if(myInputBalance > 0 ){
                alert('Your balance is low')
                return
            }
            const myBalance = parseInt(myInputBalance);
            const cashOutAmount = parseInt(cashOutInputAmount)

            const totalBalance = myBalance - cashOutAmount;
            document.getElementById('my-balance').innerText = totalBalance
        }
        else {
            alert('Incorent your pin')
        }
    })


document.getElementById('add-money-page-btn').addEventListener('click',function(){
    document.getElementById('add-money-page').classList.remove('hidden');
    document.getElementById('cash-out-page').classList.add('hidden')
})
document.getElementById('cash-out-page-btn').addEventListener('click',function(){
    document.getElementById('add-money-page').classList.add('hidden');
    document.getElementById('cash-out-page').classList.remove('hidden')
})