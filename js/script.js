function register() {

    let email;
    let password;
    let password2;

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;

    if(password === password2) {
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);

        window.location.href="Main.html"
    } else {
        alert("Something went wrong");
    }
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let localStorageEmail = localStorage.getItem("email");
    let localStoragePassword = localStorage.getItem("password");
    
    if(email === localStorageEmail && password === localStoragePassword) {
        window.location.href="welcome.html"
    } else {
            alert("Something went wrong");
        }
    } 
    