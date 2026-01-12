// took a display element
let display = document.getElementById("display");

// took all buttons element
const buttons = document.querySelectorAll(".btnCalc");
console.log(buttons);

// append a button value to display
function appendToDisplay(value){
    display.value += value;
}

// clear a display value
function clearDisplay(){
    display.value = "";
}

// function for calculate a value of display and show it to display againt
function calculateDisplayValue(){
    try{
       let result = eval(display.value);
       display.value = result;
    } catch (error) {
        display.value = "Error!";
    }
}

// for each buttons who has already became NodeList (array-like) have a event listener
// each click bypassing the if statement who had a function in it 
buttons.forEach(buttons => {
    buttons.addEventListener("click", () =>{
        let value = buttons.textContent;

        if(value === "C"){
            clearDisplay();
        }else if(value === "="){
            calculateDisplayValue();
        }else{
            appendToDisplay(value);
        }
    })
})
