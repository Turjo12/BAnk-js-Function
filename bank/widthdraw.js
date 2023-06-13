

document.getElementById('btn-Widthrow').addEventListener('click', function(){
//  steap:2
const widthrowField = document.getElementById('widthrow-field');
const newWidthrowAmountstring = widthrowField.value
const newWidthrowAmount = parseFloat(newWidthrowAmountstring)

// steap: 2

const WidthrowTotalElement = document.getElementById('widthrow-total');

const priviousWidthrowTotalString = WidthrowTotalElement.innerText;
const priviousWidthrowTotal = parseFloat(priviousWidthrowTotalString);

// steap:4
const currentWidthroeTotal = priviousWidthrowTotal + newWidthrowAmount;
WidthrowTotalElement.innerText = currentWidthroeTotal;

// steap: 5
const balenceTotalElement = document.getElementById('balence-total');
const priviousBalenceTotalString = balenceTotalElement.innerText;
const priviousBAlenceTotal = parseFloat(priviousBalenceTotalString);
// steap 6

const nweBalenceTotal = priviousBAlenceTotal - newWidthrowAmount;
balenceTotalElement.innerText = nweBalenceTotal;

// steap - 7
widthrowField.value = '';
})
