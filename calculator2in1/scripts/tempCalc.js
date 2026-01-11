let firstTempOption = null;
let secondTempOption = null;
let inputValue = null;
let resultValue = null;
let degree = null;

function selectTempOption(){
    let selectLeftElement = document.getElementById("left");
    firstTempOption = selectLeftElement.value;
    let selectRightElement = document.getElementById("right");
    secondTempOption = selectRightElement.value;
}

function checkOption() {
    let selectLeftElement = document.getElementById("left");
    firstTempOption = selectLeftElement.value;
    let selectRightElement = document.getElementById("right");
    secondTempOption = selectRightElement.value;
    if (firstTempOption === "celciusLeft" && secondTempOption === "celciusRight") {
        return "°C";
    }else if(firstTempOption === "fahrenheitLeft" && secondTempOption === "fahrenheitRight"){
        return "°F";
    }else if(firstTempOption === "kelvinLeft" && secondTempOption === "kelvinRight"){
        return "°K";
    }else if(firstTempOption === "reamurLeft" && secondTempOption === "reamurRight"){
        return "°R";
    }
}

function celciusToFarenheit(celcius) { 
    let hasil = (celcius * 9/5) + 32;
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°F`;
}
function celciusToKelvin(celcius) {
    let hasil = celcius + 273.15;
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°K`;
}
function celciusToReamur(celcius) {
    let hasil = celcius * 4/5;
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°R`;
}


function farenheitToCelcius(farenheit) {
    let hasil = (farenheit - 32) * (5/9);
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°C`;
}
function farenheitToKelvin(farenheit) {
    let hasil = (farenheit + 459.67) * (5/9);
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°K`;
}
function farenheitToReamur(farenheit) {
    let hasil = (farenheit - 32) * (4/9);
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°R`;
}

function reamurToCelcius(reamur) {
    let hasil = reamur * 5/4;
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°C`;
}
function reamurToFarenheit(reamur) {
    let hasil = (reamur * 9/4) + 32;
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°F`;
}
function reamurToKelvin(reamur) {
    let hasil = reamur * 5/4 + 273.15;
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°K`;
}

function kelvinToCelcius(kelvin) {
    let hasil = kelvin - 273.15;
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°C`;
}
function kelvinToFarenheit(kelvin) {
    let hasil = (kelvin * 9/5) - 459.67;
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°F`;
}
function kelvinToReamur(kelvin) {
    let hasil = (kelvin - 273.15) * (4/5);
    let hasilFixed = hasil.toFixed(2);
    return `${hasilFixed}°R`;
}

document.getElementById("calculate").addEventListener("click", () =>{
    selectTempOption();
    // console.log(selectTempOption());
    inputValue = parseFloat(document.getElementById("valueTemp").value);
    if(isNaN(inputValue)){
        alert("Input yang dimasukkan tidak valid!");
    }

    if(firstTempOption == secondTempOption){
        console.log("HEYY");
        resultValue = inputValue;
    }else if(firstTempOption === "celciusLeft" && secondTempOption === "fahrenheitRight"){
        resultValue = celciusToFarenheit(inputValue);
    }else if(firstTempOption === "celciusLeft" && secondTempOption === "kelvinRight"){
        resultValue = celciusToKelvin(inputValue);
    }else if(firstTempOption === "celciusLeft" && secondTempOption === "reamurRight"){
        resultValue = celciusToReamur(inputValue);

    }else if(firstTempOption === "fahrenheitLeft" && secondTempOption === "celciusRight"){
        resultValue = farenheitToCelcius(inputValue);
    }else if(firstTempOption === "fahrenheitLeft" && secondTempOption === "kelvinRight"){
        resultValue = farenheitToKelvin(inputValue);
    }else if(firstTempOption === "fahrenheitLeft" && secondTempOption === "reamurRight"){
        resultValue = farenheitToReamur(inputValue);

    }else if(firstTempOption === "kelvinLeft" && secondTempOption === "celciusRight"){
        resultValue = kelvinToCelcius(inputValue);
    }else if(firstTempOption === "kelvinLeft" && secondTempOption === "fahrenheitRight"){
        resultValue = kelvinToFarenheit(inputValue);
    }else if(firstTempOption === "kelvinLeft" && secondTempOption === "reamurRight"){
        resultValue = kelvinToReamur(inputValue);

    }else if(firstTempOption === "reamurLeft" && secondTempOption === "celciusRight"){
        resultValue = reamurToCelcius(inputValue);
    }else if(firstTempOption === "reamurLeft" && secondTempOption === "fahrenheitRight"){
        resultValue = reamurToFarenheit(inputValue);
    }else if(firstTempOption === "reamurLeft" && secondTempOption === "kelvinRight"){
        resultValue = reamurToKelvin(inputValue);
    }

    // let fixedValue = Number(resultValue.toFixed(2));
    document.getElementById("result").textContent = resultValue;
})
