// handel deposit button 

document.getElementById('depositBtn').addEventListener('click', function(){
    // get the amount 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    if (newDepositAmount <= 0 || newDepositAmountText == '.'){
        // pop warning message 
        const ClickTextD = document.getElementById('warningTextD');
        ClickTextD.innerText = 'Put Valid Amount';
        const ClickTextW = document.getElementById('warningTextW');
        ClickTextW.innerText = '';
        depositInput.value = '';
    }else{
        // update deposit total
        const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount ;
    depositTotal.innerText = newDepositTotal;
// update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear input 
    depositInput.value = '';
    // clear warning message 
    const ClickTextD = document.getElementById('warningTextD');
    ClickTextD.innerText = '';
    const ClickTextW = document.getElementById('warningTextW');
    ClickTextW.innerText = '';
    }
});

// handel withdraw button 

document.getElementById('withdrawBtn').addEventListener('click', function(){
    // get the amount 
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // pop warning message 
    if(0 > newBalanceTotal){
        const ClickTextD = document.getElementById('warningTextD');
        ClickTextD.innerText = '';
        const ClickTextW = document.getElementById('warningTextW');
        ClickTextW.innerText = 'insufficient balance';
        withdrawInput.value = '';
    }else if(newWithdrawAmountText == '.' || newWithdrawAmount == 0 ){
        const ClickTextD = document.getElementById('warningTextD');
        ClickTextD.innerText = '';
        const ClickTextW = document.getElementById('warningTextW');
        ClickTextW.innerText = 'Put Valid Amount';
        withdrawInput.value = '';
    }
    else{
        // update withdraw total 
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawAmountText = withdrawTotal.innerText;
        const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
        const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount ;
        withdrawTotal.innerText = newWithdrawTotal;
        // update balance 
        balanceTotal.innerText = newBalanceTotal;
        withdrawInput.value = '';
        const ClickTextD = document.getElementById('warningTextD');
        ClickTextD.innerText = '';
        const ClickTextW = document.getElementById('warningTextW');
        ClickTextW.innerText = '';
    }
});



// const withdrawInput = document.getElementById('withdraw-input');
//     const newWithdrawAmountText = withdrawInput.value;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountText);
//     // update withdraw total 
//     const withdrawTotal = document.getElementById('withdraw-total');
//     const previousWithdrawAmountText = withdrawTotal.innerText;
//     const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
//     const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount ;
//     withdrawTotal.innerText = newWithdrawTotal;
//     // update balance 
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
//     balanceTotal.innerText = newBalanceTotal;