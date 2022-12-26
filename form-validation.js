let userData = JSON.parse(localStorage.getItem("emailData")) || [];
if(!userData)localStorage.setItem("emailData", JSON.stringify(userData));
const button = document.querySelector('.the-button');
const isValidEmail = (email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const setError = (message) =>{
       const errorMessage = document.querySelector('.error');
       
       errorMessage.innerText = message
}
const setSuccess = (message) =>{
    const displayMessage = document.querySelector(".error");
    
    displayMessage.innerText = message
}
button.addEventListener('click', e =>{
    const firstEmail = document.querySelector('.input-box');
    const emailValue = firstEmail.value.trim();
    if (emailValue === ''){
        setError("Email is required");
    }else if(!isValidEmail(emailValue)){
        emailValue.value = "";
        setError("Please provide a valid email");
    }else{
       setSuccess("Well done!");
       location.href = "form-page.html";
       userData.push({emailValue});
       localStorage.setItem("emailData", JSON.stringify(userData));
       firstEmail.value = "";
    }
});
