const button = document.querySelector('button');
const password = document.querySelector('#password');
const form = document.querySelectorAll(`form`);

const goodJob = "Good Job, you tested my form!";
const sorry = "Sorry, the passowrds dont match!";
const notYet = "Sorry, your didnt finish the form yet!";

button.addEventListener(`click`, ()=> {
        if(form[0].checkValidity()){
            if(password.value === confirm.value){
                alert(goodJob);
            }
            else {
                alert(sorry);
            }
        }
        else {
            alert(notYet);
        }
})