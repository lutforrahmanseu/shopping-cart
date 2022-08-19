function getTextElementValueById(elementId){
    const phoneTotalElement=document.getElementById(elementId);
    const currentPhoneTotalString=phoneTotalElement.innerText;
    const currentPhoneTotal=parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTaxElementById(elementId,value){
    const subTotalElement=document.getElementById(elementId);
    subTotalElement.innerText=value;
}
function calculateSubtotal(){
    //calculate total
    const currentPhoneTotal=getTextElementValueById('phone-total');
    const currentCaseTotal=getTextElementValueById('case-total');
    const currentSubTotal=currentPhoneTotal+currentCaseTotal;
    setTaxElementById('sub-total',currentSubTotal);
    
    //calculate tax
    const taxAmountString=(currentSubTotal*0.1).toFixed(2);
    const taxAmount=parseFloat(taxAmountString);
    setTaxElementById('tax-amount',taxAmount);
    // calculate final amount
    const finalAmount=currentSubTotal+taxAmount;
    setTaxElementById('final-total',finalAmount);


}