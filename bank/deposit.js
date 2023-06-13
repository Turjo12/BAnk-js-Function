document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountstring = depositField.value
    const newDepositAmount = parseFloat(newDepositAmountstring)
    
    // steap: 2
    
    const DepositTotalElement = document.getElementById('deposit-total');
    
    const priviousDepositTotalString = DepositTotalElement.innerText;
    const priviousDepositTotal = parseFloat(priviousDepositTotalString);
    
    // steap:4
    const currentDepositTotal = priviousDepositTotal + newDepositAmount;
    DepositTotalElement.innerText = currentDepositTotal;











    const balenceTotalElement = document.getElementById('balence-total');
    const priviousBalenceTotalString = balenceTotalElement.innerText;
    const priviousBAlenceTotal = parseFloat(priviousBalenceTotalString);

    
    const nweBalenceTotal = priviousBAlenceTotal + newDepositAmount;
    balenceTotalElement.innerText = nweBalenceTotal;
    
    // steap - 7
    depositField.value = '';




})