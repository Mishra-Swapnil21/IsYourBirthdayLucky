const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const output = document.querySelector("#output");


checkButton.addEventListener('click' , function validateLuckyNumberAndBirthDate(){
    
if(birthDate.value != "" ) {
    if(luckyNumber.value != "" ) {
        if(luckyNumber>0){
            checkNumberIsLucky()
        }else {output.innerText = "error :- Invalid Lucky Number";}
    } else {output.innerHTML = "Error :- Lucky Number Field should be not empty";}
} else {output.innerText = "Error :- Date of Birth field should be not empty";}
});   
    
    
function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        output.innerText = "Your Birthday is Lucky 🥳🥳";
    }else {
        output.innerText = "Your Birthday is not lucky😢😢";
    }
}

function checkNumberIsLucky() {
    const dob = birthDate.value;
    const sum = calculateSum(dob);
    compareValues(sum,luckyNumber.value)
    
}

function calculateSum(dob) {
 dob = dob.replaceAll("-","");
 let sum = 0;
 for(let index = 0 ;index<dob.length;index++) {
     sum = sum + Number(dob.charAt(index));


 }
 return sum;
} 

