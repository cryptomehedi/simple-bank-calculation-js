document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if( userEmail == 'test@gmail.com' && userPassword == 'test'){
        window.location.href = 'banking.html'
    }else{
        const warningEmail = document.getElementById('warning-email');
        warningEmail.innerText = 'Email Or Password Incorrect';
        withdrawInput.value = '';
    }
});
