let welcomeTag = document.getElementById("welcome-text");
let userData = JSON.parse(localStorage.getItem("userData"));
const welcomeNewUser = () =>{
    welcomeTag.innerText = `Welcome, ${userData[userData.length-1].userNameValue}`;
}
