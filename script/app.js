let email = {},
  password = {},
  signInButton;

function addError(element){

}
function enableListeners() {
  email.input.addEventListener('blur', function () {
    if (!isEmpty(email.input.value)) {
    } else {
        console.log('email is empty');
        email.field.classList.add('has-error');
        email.errormessage.innerText = 'Dit veld is verplicht';
        email.field.addEventListener("input", doubleCheckIFEmailIsEmpty);
        if(!isValidEmailAddress(email.input.value)){
            email.field.classList.add('has-error');
            email.errormessage.innerText = 'Dit veld is verplicht';
            email.field.addEventListener("input", doublecheckIfEmailIsValid);
        }else{
            email.field.classList.remove('has-error');
            email.errormessage.innerText = '';
        }
    }
  });
  password.input.addEventListener('blur', function () {
    if(this.value.length < 2 || this.value.length <= 4){
    
    }else{
        console.log('error, please fix');
        password.input.addEventListener('input', doubleCheckPassword);
    }
  });
  signInButton.addEventListener('click', function () {
    console.log('klik');
  });
}

function getDOMElementen() {
  email.field = document.querySelector('.js-email-field');
  email.errormessage = document.querySelector('.js-email-error-message');
  email.input = document.querySelector('.js-email-input');
  if (email.field.classList.contains('has-error')) {
    email.field.classList.remove('has-error');
    email.errormessage.innerText = '';
  }
  password.field = document.querySelector('.js-password-field');
  password.errormessage = document.querySelector('.js-password-error-message');
  password.input = document.querySelector('.js-password-input');
  if (password.field.classList.contains('has-error')) {
    password.field.classList.remove('has-error');
    password.errormessage.innerText = '';
  }
  signInButton = document.querySelector('.js-sign-in-button');
  enableListeners();
}
function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  const passwordOptions = ['password', 'text'];
  let passwordToggle = document.querySelector('.js-pasword-toggle-checkbox');
  let passwordInput = document.querySelector('.js-password-toggle-input');
  passwordToggle.addEventListener('change', function () {
    passwordInput.type = passwordOptions[+this.checked];
  });
}

const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const isValidPassword = function (password) {
    if(password.length < 2){
        return false;
    }else{
        return true;
    }
}
const doubleCheckPassword =function(event){
    if(this.value.length<2 || this.value.length<=4){
        password.input.removeEventListener('input', doubleCheckPassword);
    }
}
const doubleCheckIFEmailIsEmpty = function(event){
    if(!isEmpty(email.input.value)){
        email.field.classList.remove('has-error');
        email.errormessage.innerText = '';
        email.field.removeEventListener('input', doubleCheckIFEmailIsEmpty);
    }
}

const doublecheckIfEmailIsValid = function(event){
    if(isvalidEmailAddress(email.input.value)){
        email.field.classList.remove('has-error');
        email.errormessage.innerText = '';
        email.field.removeEventListener('input', doublecheckIfEmailIsValid);
    }
}
document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  handleFloatingLabel();
  //handlePasswordSwitcher();
  getDOMElementen();
});
