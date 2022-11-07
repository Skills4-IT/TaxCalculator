function CalculateTax() {

    // Declare variabels
    let amount = Number(document.getElementById('amount').value);
    let pecentageTex = Number(document.getElementById('percentageTax').value);
    let checkIncluding = document.getElementById('myRadio').value
    let checkExcluding = document.getElementById('myRadio2').value 

    let result = document.getElementById('result');

    let amountIncludingTaxes;
    let amountExcludingTaxes;

    
    // Algoritme or calculation
    // Amount including tax
    // Amount * Percentage of Tax + amount
   
    // if the checkbox including taxes is checked, then to the calculation including taxes, 
    // else if the checkbox excluding taxes is selected, then to the calculating excluding taxes.
  
    if (document.getElementById('myRadio').checked) {
        amountIncludingTaxes = amount + (amount * (pecentageTex/100));
          //Output write this into the result paragraph .innerHTML
        document.getElementById('result').innerHTML = "$" + amountIncludingTaxes.toFixed(2);
      }
    else{
        amountExcludingTaxes = amount / (1 + (pecentageTex/100));
          //Output write this into the result paragraph .innerHTML
        document.getElementById('result').innerHTML = "$" + amountExcludingTaxes.toFixed(2)
    }


}