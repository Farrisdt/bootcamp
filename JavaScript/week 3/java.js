var addPetButton = document.getElementById('submitButton')
 
var age = document.getElementById('ageInput')

var inputedAge = ""
function ageInputHandler(event){
    inputedAge = event.target.value
}
ageInput.addEventListener('input', ageInputHandler)

function submitButtonHandler(){
    console.log(inputedAge)
    if(inputedAge >= 21){
        alert("You can vote and drink!")
    }else if(inputedAge >= 18){
        alert("You can vote!")
    }
    else{
        alert("You are a child.")
    }
}
submitButton.addEventListener('click', submitButtonHandler)



// values of these statements is true
'1'== 1
true == 'true'



