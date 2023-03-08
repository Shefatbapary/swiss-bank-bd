//stap 1: Add click event handlar with the submit btn
document.getElementById('btn-submit').addEventListener('click', function () {
    //stap-2 get the email addrass inside the email filed
    const emailfild = document.getElementById('user-email');
    const email = emailfild.value;
    //stap3 get password......
    const passwordfild = document.getElementById('user-password');
    const password = passwordfild.value;
    //dangar: Do Not VARIFY EMAIL PASSWORD ON THE CLINT SITE......
    //STAP-5 : varify email and password
    if(email === 'shefatbapary01@gmail.com' && password === "damo"){
        location.href ='bank.html'
    }
    else{
        alert('inValid Email or Password')
    }
});