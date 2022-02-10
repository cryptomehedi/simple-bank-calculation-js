// handel deposit button 

document.getElementById('depositBtn').addEventListener('click', function(){
    // get the amount 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
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
    const ClickText = document.getElementById('warningText');
    ClickText.innerText = '';
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


    if(0 > newBalanceTotal){
        const ClickText = document.getElementById('warningText');
        ClickText.innerText = 'insufficient balance';
        withdrawInput.value = '';
    }else{
        // update withdraw total 
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawAmountText = withdrawTotal.innerText;
        const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
        const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount ;
        withdrawTotal.innerText = newWithdrawTotal;
        // update balance 
        balanceTotal.innerText = newBalanceTotal;
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