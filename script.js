const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

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
        //console.log('operator', element.value);
        handleOperator(element.value);//which info will be sent +,-,*,/
        return;
    }

    if(element.classList.contains('decimal')) {
        //console.log('decimal', element.value);
        inputDecimal(element.value);
        updateDisplay();
        return;
    }

    if(element.classList.contains('clear')) {
       //console.log('clear',element.value);
       clear();
       updateDisplay(); 
       return;
    }


    
    //console.log('number', element.value);
    inputNumber(element.value);
    updateDisplay();
});

function handleOperator(nextOperator){
    const value = parseFloat(displayValue);

    if(firstValue  === null) {
        firstValue = value;
    }
    waitingForSecondValue = true;
    operator = nextOperator;
}


//number info sending
function inputNumber(num){
    if(waitingForSecondValue){
        displayValue = num;
        waitingForSecondValue = false;
    } else {
    displayValue = displayValue === '0'? num: displayValue + num;
    }
}

function inputDecimal(){
    if(!displayValue.includes('.')){
        displayValue += '.';
    }
}

function clear(){
    displayValue = '0';
}