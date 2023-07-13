const display = document.querySelector('.calculator-input');
const keys = documnet.querySelector('.calculator-keys');

let displayValue = '0';

updateDisplay();

function updateDisplay() {
    display.value = displayValue;
}


keys.addEventListener('click',function(e){
    const element = e.target;//target ile elemente ulaştık.
    //elementin üzerinden matches metodu ile tıklanan 
    //elementin buton olup olmadığını kontrol eder.
    //check if the element is a button, if not do nothing
    if(!element.matches('button')) return;
    
    if(element.classList.contains('operator')) {
        console.log('operator',element.value);
        return;
    }
    if(element.classList.contains('decimal')) {
        //console.log('decimal',element.value);
        inputDecimal(elemnt.value);
        updateDisplay();
        return;
    }
    if(element.classList.contains('clear')) {
        console.log('clear',element.value);
        return;
    }


    
    //console.log('number', element.value);

    inputNumber(elemeny.value);
    updateDisplay();
});

//number info sending
function inputNumber(num){
    displayValue = displayValue === '0'? num: displayValue + num;
}
function inputDecimal(){
    if(!displayValue.includes('.')){
        displayValue += '.';
    }
}