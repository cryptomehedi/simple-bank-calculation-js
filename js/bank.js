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


function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
