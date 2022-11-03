const button = document.querySelector('button');
const password = document.querySelector('#password')
const confirm = document.querySelector('#confirm')

const goodJob = "Good Job, you tested my form!";

button.addEventListener(`click`, ()=> {
    if (confirm.value === password.value){
        alert(goodJob);
    }
    else {
        confirm.value === "";
    }
})