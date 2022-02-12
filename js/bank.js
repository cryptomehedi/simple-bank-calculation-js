document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if( userEmail == 'test@gmail.com' && userPassword == 'test' || userEmail == 'test@test.com' && userPassword == 'test' || userEmail == 'admin@admin.com' && userPassword == 'admin' || userEmail == 'admin@gmail.com' && userPassword == 'admin'){
        window.location.href = 'banking.html'
    }else{
        const warningEmail = document.getElementById('warning-email');
        warningEmail.innerText = 'Email Or Password Incorrect';
        withdrawInput.value = '';
    }
});


// click to copy 

document.getElementById('first-email').addEventListener('click', function(){
    const firstEmail = document.getElementById('user-email');
    const firstEmailPass = document.getElementById('user-password');
    firstEmail.value = 'test@gmail.com';
    firstEmailPass.value = 'test';
});
document.getElementById('sec-email').addEventListener('click', function(){
    const firstEmail = document.getElementById('user-email');
    const firstEmailPass = document.getElementById('user-password');
    firstEmail.value = 'admin@admin.com';
    firstEmailPass.value = 'admin';
});
