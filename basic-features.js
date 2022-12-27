let inputMove = document.querySelector(".the-input");
let inputTag = document.querySelector("input");
let hidePassword = document.getElementsByClassName('hide');
let eyes = Array.from(hidePassword);

let passwordInput = document.querySelector("#password");
let signUpButton = document.querySelector(".signupbtn");

let userName = document.querySelector(".username");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector(".password-confirm");
let email = document.getElementById('email');
const hideShow = (item) =>{
    item.addEventListener("click", () =>{
        if(item.previousElementSibling.type === "password"){
            item.previousElementSibling.type = "text";
            return;
        }else{
            item.previousElementSibling.type = "password";
        }
    })
    item.addEventListener("click", ()=>{
        if(item.classList.contains("hidden")){
            passwordInput.type = "text";
            item.innerText = "Hide";
            item.classList.remove("hidden");
        }else{
            item.innerText = "Show";
            item.classList.add("hidden");
        }
    });
}
eyes.forEach(hideShow);

const defineFormPage = (e) =>{
    let emailForDisplay = JSON.parse(localStorage.getItem("emailData"));
    let mail = document.getElementById('email');
    try{
        mail.value = emailForDisplay[emailForDisplay.length-1].emailValue;
        mail.style.backgroundColor = "lightblue"
    }catch{
        if (mail.value === ""){
            mail.setAttribute("readonly", "true");
        }
    }
}
signUpButton.addEventListener("click", e =>{
    validateInputs();
})

const setError = (element, message) =>{
      let elementVal = element.parentElement;
      let errorMessage = elementVal.querySelector(".error");

      errorMessage.innerText = message;
}
const setErrorPassword = (element, message) =>{
    let elementVal = element.parentElement.parentElement;
    let errorMessage = elementVal.querySelector('.error');

    errorMessage.innerText = message;
}
const setSuccess = (element) =>{
    let elementVal = element.parentElement;
    let errorMessage = elementVal.querySelector('.error');

    errorMessage.innerText = "";
}
const setSuccessPassword = (element) =>{
    let elementVal = element.parentElement.parentElement;
    let errorMessage = elementVal.querySelector('.error');

    errorMessage.innerText = "";
}
const isValidEmail = (email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () =>{
    let userNameValue = document.querySelector(".username").value.trim();
    let passWordValue = document.querySelector(".password-input").value.trim();
    let confirmPasswordValue = document.querySelector(".password-confirm").value.trim();
    let emailStillValue = document.getElementById("email").value.trim();
    let usernameOkay;
    let passwordOkay;
    let emailOkay;
    let passwordLength;
    if (userNameValue === ""){
        setError(userName, "Username is required, please input");
    }else{
        setSuccess(userName);
        usernameOkay = "Okay";
    }
    if (emailStillValue === ''){
        setError(email, "Please re-enter your email address");
    }else if(!isValidEmail(emailStillValue)){
        setError(email, "Email is invalid, re-enter valid email address");
    }else{
        setSuccess(email);
        emailOkay = "Okay";
    }
    if (passWordValue === ""){
        setErrorPassword(password, "Password is required to sign up!");
    }else if(passWordValue.length <8){
        setErrorPassword(password, `Password should not be less than 8 characters`);
    }else if(passWordValue.length >15){
        setErrorPassword(password, "Password should not be more than 15 characters");
    }else{
        setSuccessPassword(password);
        passwordLength = "Okay"
    }
    if(confirmPasswordValue === ""){
        setErrorPassword(confirmPassword, "Please re-enter your password for confirmation")
    }else if(passWordValue !== confirmPasswordValue){
        setErrorPassword(confirmPassword, "Passwords don't match, try again")
    }else{
        setSuccessPassword(confirmPassword);
        passwordOkay = 'Okay';
    }
    if(passwordOkay === "Okay" && emailOkay === "Okay" && usernameOkay === "Okay" && passwordLength === "Okay"){
        if(validateInputs){
            let userNameValue = document.querySelector(".username").value.trim();
            let passWordValue = document.querySelector(".password-input").value.trim();
            let confirmPasswordValue = document.querySelector(".password-confirm").value.trim();
            let emailStillValue = document.getElementById("email").value.trim();
            
        let userData = JSON.parse(localStorage.getItem("userData")) || [];
        let exist = userData.length &&
        JSON.parse(localStorage.getItem('userData')).some(data => data.emailStillValue.toLowerCase() === emailStillValue.toLowerCase());
        if(!exist){
            userData.push({userNameValue, confirmPasswordValue, emailStillValue});
            localStorage.setItem("userData", JSON.stringify(userData));
            
            document.querySelector('.username').value = "";
            document.querySelector('.password-input').value = "";
            location.href = "initial-login-page.html";
        }else{
           setError(email, "Email already taken, try using a phone number");
           let mail = document.getElementById("email");
           console.log(mail)
           mail.removeAttribute("readonly");
           mail.style.backgroundColor = "white"
        }
        }
    }
} 