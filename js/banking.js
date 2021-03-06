// handel deposit button 
document.querySelector('.form').addEventListener('submit', function(e) {e.preventDefault()})
document.querySelector('.formSec').addEventListener('submit', function(e) {e.preventDefault()})


document.getElementById('depositBtn').addEventListener('click', function(){
    // get the amount 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    if (newDepositAmount > 0 ){
         // update deposit total
        const depositTotal = document.getElementById('deposit-total');
        const previousDepositAmountText = depositTotal.innerText;
        const previousDepositAmount = parseFloat(previousDepositAmountText);
        const newDepositTotal = previousDepositAmount + newDepositAmount ;
        depositTotal.innerText = newDepositTotal;
        localStorage.setItem('depositTotal', JSON.stringify(newDepositTotal))
         // update balance 
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        const newBalanceTotal = previousBalanceTotal + newDepositAmount;
        balanceTotal.innerText = newBalanceTotal;
        localStorage.setItem('balanceTotal', JSON.stringify(newBalanceTotal))
         // clear input 
        depositInput.value = '';
         // clear warning message 
        const ClickTextD = document.getElementById('warningTextD');
        ClickTextD.innerText = '';
        const ClickTextW = document.getElementById('warningTextW');
        ClickTextW.innerText = '';
        
    }else{
         // pop warning message 
        const ClickTextD = document.getElementById('warningTextD');
        ClickTextD.innerText = 'Put Valid Amount';
        const ClickTextW = document.getElementById('warningTextW');
        ClickTextW.innerText = '';
        depositInput.value = '';
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
    }else if(newWithdrawAmount > 0 ){
        // update withdraw total 
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawAmountText = withdrawTotal.innerText;
        const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
        const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount ;
        withdrawTotal.innerText = newWithdrawTotal;
        localStorage.setItem('withdrawTotal', JSON.stringify(newWithdrawTotal))
        // update balance 
        balanceTotal.innerText = newBalanceTotal;
        localStorage.setItem('balanceTotal', JSON.stringify(newBalanceTotal))
        withdrawInput.value = '';
        const ClickTextD = document.getElementById('warningTextD');
        ClickTextD.innerText = '';
        const ClickTextW = document.getElementById('warningTextW');
        ClickTextW.innerText = '';
    }
    else{
        // pop warning message 
        const ClickTextD = document.getElementById('warningTextD');
        ClickTextD.innerText = '';
        const ClickTextW = document.getElementById('warningTextW');
        ClickTextW.innerText = 'Put Valid Amount';
        withdrawInput.value = '';
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