let signInButton = document.querySelector(".signinbtn");
let hideShowButton = document.querySelector(".hide");
let emailData =  document.querySelector(".main-input");
let passData = document.querySelector(".password-input");
hideShowButton.addEventListener("click", e =>{
   if(hideShowButton.previousElementSibling.type === "password"){
    hideShowButton.previousElementSibling.type = "text";
    return;
   }
   else{
    hideShowButton.innerText = "Show"
    hideShowButton.previousElementSibling.type = "password";
   }
   if(hideShowButton.classList.contains("hidden")){
    hideShowButton.innerText = "Hide";
    hideShowButton.classList.remove("hidden");
   }else{
    hideShowButton.innerText = "Show";
    hideShowButton.classList.add("hidden");
   }
});
signInButton.addEventListener("click", e =>{
    validateInputs();
});
const isValidEmail = (email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const setError = (element, message) =>{
     let elementVal = element.parentElement.parentElement;
     let target = elementVal.querySelector('.error');

     target.innerText = message;
}
const setSuccess = (element) =>{
    let elementVal = element.parentElement.parentElement;
    let target = elementVal.querySelector(".error");

    target.innerText = "";
}
const validateInputs = (e) =>{
    let emailValue = document.querySelector(".main-input").value.trim();
    let passWordValue = document.querySelector(".password-input").value.trim();
    let okayLetsgoEmail;
    let okayLetsgoPassWord;
    if(emailValue === ""){
       setError(emailData, "Email is required for sign in");
    }else if(!isValidEmail(emailValue)){
        setError(emailData, "Email is not accurate, re-enter accurate email!");
    }else{
        setSuccess(emailData);
        okayLetsgoEmail = "READY"
    }
    if(passWordValue === ""){
        setError(passData, "Please input password");
    }else{
        okayLetsgoPassWord = "READY"
    }
    if(okayLetsgoEmail === "READY" && okayLetsgoPassWord === "READY"){
        let userData = JSON.parse(localStorage.getItem("userData")) || [];
        let vnEmail = document.querySelector(".main-input").value;
        let vnPassword = document.querySelector(".password-input").value;
        let exist = userData.findIndex(data => data.emailStillValue === vnEmail);
        if(exist === -1){
           alert("Account doesnt exist")
        }
        else{
           let passwordValue = userData[exist].confirmPasswordValue;
           if(passwordValue !== vnPassword){
           setError(passData, "Incorrect Password");
           }else{
            let aname = userData[exist].userNameValue;
            let thename = [];
            thename.push(aname)
            localStorage.setItem("userName", JSON.stringify(thename));
            location.href = "./dashboard.html"
           }
        }
        // e.preventDefault();
    }
}