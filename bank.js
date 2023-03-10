// / stap 1 : add event listener to the deposit btn
document.getElementById('btn-add-moaney').addEventListener('click', function () {
    // stap 2: get the  deposit amount from the deposit input field ...
    const depositField = document.getElementById('input-deposit-amount');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    if(isNaN(newDepositAmount)){
        alert('Please input a Nunber properly');
        depositField.value='';
        return;
    }
    // stap: 3 get the current deposit total
    const deposit = document.getElementById('deposit-balance');
    const depositValue = deposit.innerText;
    const depositBalance = parseFloat(depositValue);

    // stap 4 add numbars to det total 
    const depositTotalBalance = newDepositAmount + depositBalance;
    deposit.innerText = depositTotalBalance;

    //stap 5 gat calk total current balance ......
    const allBalanceElement = document.getElementById('all-balance');
    const allBalance = parseFloat(allBalanceElement.innerText);
    const currentTotalBalance = allBalance + newDepositAmount;
    allBalanceElement.innerText = currentTotalBalance;

    // last stap : clear the deposit field 
    depositField.value = "";
    // change the background color if acount balance. 0 < 
    if (depositTotalBalance > 0) {
        document.getElementById('deposit').style.color = 'white';
    }
});


// same stap to withdow only use - .....

document.getElementById('tnaspar-moaney').addEventListener('click', function () {
    const tnasparMoaneyField = document.getElementById('tnaspar-moaney-field');
    const tnasparMoaneyValue = tnasparMoaneyField.value;
    const tnasparMoaney = parseFloat(tnasparMoaneyValue);
    tnasparMoaneyField.value = '';
    if (isNaN(tnasparMoaney)) {
        alert('Please input a NUMBER')
        return;
    }

    const withdow = document.getElementById('withdrow-balance');
    const withdowInnerText = withdow.innerText;
    const preveasWithdowBalance = parseFloat(withdowInnerText);

    const allBalanceElement = document.getElementById('all-balance');
    const allBalance = parseFloat(allBalanceElement.innerText);
    if (allBalance < tnasparMoaney) {
        alert('insafesien Balance. Balance tanspar unsucucesfull');
    }
    else {
        const newWithdowBalance = preveasWithdowBalance + tnasparMoaney;
        withdow.innerText = newWithdowBalance;


        allBalanceElement.innerText = allBalance - tnasparMoaney;

        if (newWithdowBalance > 0) {
            document.getElementById('withdrow').style.color = 'white';
        }
    }

});
