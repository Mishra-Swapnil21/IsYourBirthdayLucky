const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const output = document.querySelector("#output");

checkButton.addEventListener('click' , checkNumberIsLucky());

function checkNumberIsLucky() {
    const dob = birthDate.value;
    const sum = calculateSum(dob);
    console.log(sum);
}

function calculateSum(dob) {
return 12;
} 

