const password = document.getElementById('pwd')
const confirmPassword = document.getElementById('confirm-pwd')

function validatePassword(){
    if (password.value != confirmPassword.value){
        confirmPassword.setCustomValidity('Passowrds do not match')
    } else {
        confirmPassword.setCustomValidity('')
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;