// let userData = JSON.parse(localStorage.getItem("userName"));
// let thename = userData[userData.length-1];
// let tit = document.querySelector('title')
// let userName = document.querySelector(".username")
// let displayName = () =>{
//     userName.innerText = `${thename}`;
//     tit.innerText = `Vtamise | ${thename}`
// }
// Code for toggling the sidebar
// setInterval(jamil, 1);
let toggle = document.getElementById("toggler");
let sideBar = document.querySelector(".aside");
let withdraw = document.querySelector(".return-square");
window.onclick = function(event){
    if(event.target == sideBar){
        console.log("Y")
    }
}
let jamil = () =>{
    let media_width = window.innerWidth;
    if(media_width > 992){
        sideBar.style.transform = "translateX(0rem)"
        toggle.setAttribute("data-visible", "true")
    }
}
setInterval(jamil, 10)
toggle.addEventListener("click", () =>{
    let value = toggle.getAttribute("data-visible");
    if(value === "false"){
        if(!withdraw.classList.contains("return-squarespell")){
            withdraw.classList.add("return-squarespell");
        }
        sideBar.style.transform = "translateX(0rem)";
        toggle.setAttribute("data-visible", "true");
    }else if(value === "true"){
        if(withdraw.classList.contains("return-squarespell")){
            withdraw.classList.remove("return-squarespell");
        }
        sideBar.style.transform = "translateX(-24rem)";
        toggle.setAttribute("data-visible", "false")
    }
});

withdraw.addEventListener("click", () =>{
    let value = toggle.getAttribute("data-visible");
    if(value === "true"){
        sideBar.style.transform = "translateX(-24rem)"
        toggle.setAttribute("data-visible", "false")
    }
})
// Sidebar code ends here

// Code for displaying modal starts here
let modal = document.querySelector(".modal");
let juliacount = document.querySelector("#juliaCount");
let modalpack = document.querySelector(".modal-pack");
juliacount.onclick = () =>{
    modal.style.display = "block";
    let jParent = modalpack.parentElement;
    let jParentHeight = jParent.parentElement.clientHeight;
    let main = document.querySelector(".main");
    main.style.overflow = "hidden";
    setTimeout(()=>{
        modalpack.style.transform = "translateY(0rem)";
        modalpack.style.transition = "transform 300ms ease-in"
    }, 50)
 
}
window.onclick = (event) => {
    console.log("hads")
    if (event.target == modal) {
      modal.style.display = "none";
      modalpack.style.transform = "translateY(30rem)"
      let main = document.querySelector(".main");
      main.style.overflow = "scroll"
    }
}
let closemodal = document.querySelector(".modal-close");

closemodal.addEventListener("click", () =>{
      modal.style.display = "none";
      modalpack.style.transform = "translateY(30rem)"
      let main = document.querySelector(".main");
      main.style.overflow = "scroll"
});
// Modal code ends here
// Code for displaying different pages and active states
let links = document.getElementsByClassName("page-link");
let linked = Array.from(links);
linked.forEach((link) =>{
    link.addEventListener("click",()=>{
        for(i=0; i<linked.length;i++){
            if(linked[i].classList.contains("active")){
                linked[i].classList.remove('active');
                link.classList.add('active');
            }
        }
    })
});

let main = document.querySelector(".main");
let pages = Array.from(main.children);
let home = document.querySelector(".main-part");
let homebutton = document.querySelector(".home");


// homebutton.addEventListener("click", displayPage(home, pages));
homebutton.addEventListener("click", () =>{
    pages.forEach(page => {
        if(page !== home){
            page.classList.remove("showing");
            home.classList.add("showing");
        }
    })
});
// meeting button
let meeting = document.querySelector(".meeting-part");
let meetingbutton = document.querySelector(".meetings")
meetingbutton.addEventListener("click", () =>{
    meeting.classList.add("showing");
    pages.forEach(page => {
        if(page !== meeting){ 
            page.classList.remove("showing")
        }
    })
})
// julie
let julie = document.querySelector(".julie-aspect");
let juliebutton = document.querySelector(".julie");
juliebutton.addEventListener("click", () =>{
    julie.classList.add("showing");
    pages.forEach(page => {
        if(page !== julie){
            page.classList.remove("showing")
        }})
});
// cart page
let cart = document.querySelector(".cart");
let cartbtn = document.querySelector(".cartbtn");
cartbtn.addEventListener("click", () =>{
    cart.classList.add("showing");
    pages.forEach(page => {
        if(page !== cart){
            page.classList.remove("showing")
        }
    })
});
// chatapp

// Different pages code ends here
// let checkbox = document.querySelectorAll(".checkbox");
// for(let i = 0; i <checkbox.length; i++){
//     checkbox[i].addEventListener('click', () =>{
//         if(checkbox[i].classList.contains("checked")){
//             checkbox[i].classList.remove("checked");
//         }else if(!checkbox[i].classList.contains("checked")){
//             checkbox[i].classList.add("checked");
//         }
//     })
// }Alternative checkbox code might be used later

// Confirming added states(Allergies)
let allergies = document.querySelectorAll(".allergen");
allergies.forEach(allergy =>{
    let selections = document.querySelector(".selections")
    if(allergy !== allergies[0]){
    if(!allergy.classList.contains("other-allergen")){
        allergy.addEventListener("click", () =>{
        if(allergy.classList.contains("added")){
            allergy.classList.remove("added");
            let added = document.querySelectorAll(".added");
            let added_arr = Array.from(added);
            selections.innerHTML = "";
            added_arr.map(added =>{
                selections.innerHTML += `<span class ="selection">${added.innerText}</span>`
            })
        }else if(!allergy.classList.contains("added")){
            allergy.classList.add("added");
            let added = document.querySelectorAll(".added");
            let added_arr = Array.from(added);
            selections.innerHTML = "";
            added_arr.map(added =>{
                selections.innerHTML += `<span class ="selection">${added.innerText}</span>`
            })
        }
    })
}
}
});
// Confirming added states(diets)
let diets = Array.from(document.querySelectorAll(".diets"));
diets.forEach(diet =>{
    let selections = document.querySelector(".selections")
        if(diet !== diets[0]){
                if(!diet.classList.contains("other-diet")){
                    diet.addEventListener("click", () =>{
                        if(diet.classList.contains("added")){
                            diet.classList.remove("added");
                            let added = document.querySelectorAll(".added");
                            let added_arr = Array.from(added);
                            selections.innerHTML = "";
                            added_arr.map(added => {
                                selections.innerHTML += `<span class ="selection">${added.innerText}</span>`
                            })
                        }else if(!diet.classList.contains("added")){
                            diet.classList.add("added")
                            let added = document.querySelectorAll(".added");
                            let added_arr = Array.from(added);
                            selections.innerHTML = "";
                            added_arr.map(added => {
                                selections.innerHTML += `<span class ="selection">${added.innerText}</span>`
                            })
                        }
                    })
                }
        }
});
// Confirming added states(allergies)
let illnesses = Array.from(document.querySelectorAll(".illness"));
illnesses.forEach(illness =>{
    let selections = document.querySelector(".selections")
    if(illness !== illnesses[0]){
        if(!illness.classList.contains("other-illness")){
            illness.addEventListener("click", () =>{
                if(illness.classList.contains("added")){
                    illness.classList.remove("added");
                    let added = document.querySelectorAll(".added");
                    let added_arr = Array.from(added);
                    selections.innerHTML = "";
                    added_arr.map(added => {
                        selections.innerHTML += `<span class ="selection">${added.innerText}</span>`
                    })
                }else if(!illness.classList.contains("added")){
                    illness.classList.add("added")
                    let added = document.querySelectorAll(".added");
                    let added_arr = Array.from(added);
                    selections.innerHTML = "";
                    added_arr.map(added => {
                        selections.innerHTML += `<span class ="selection">${added.innerText}</span>`
                    })
                }
            })
        }
    }
}
)
// let finish = document.querySelector(".finished");
// finish.addEventListener("click", () =>{
//     let otherallergy = document.querySelector("#other").value;
//     console.log(otherallergy);
//     document.querySelector("#other").value = "";
// })Don't know what this code is for but will be useful in the future

// Yes no button
let yes = document.querySelector('.yessquare');
yes.onclick = () =>{
    let allergysquare = document.querySelector(".allergies");
    let visibility = allergysquare.getAttribute("data-visible");
    let checksign = yes.querySelector(".material-symbols-outlined");
    let novalue = document.querySelector(".nosquare");
    let novaluereal = novalue.querySelector(".material-symbols-outlined");
    if(visibility === "false"){
        if(novaluereal.classList.contains("signed")){
            // novaluereal.style.display="none";
            novaluereal.classList.remove("signed")
        }
        allergysquare.style.display = "block";
        checksign.classList.add("signed")
        allergysquare.setAttribute("data-visible", "true");
        checksign.style.display = "block";
    }else {
        checksign.classList.remove("signed");
        novaluereal.classList.add("signed")
        allergysquare.style.display = "none";
        allergies.forEach(allergy => allergy.classList.remove("added"))
        allergysquare.setAttribute('data-visible', "false");
        checksign.style.display = "none";
    }
}
let no = document.querySelector('.nosquare');
no.addEventListener("click", () =>{
    let allergysquare = document.querySelector(".allergies");
    let yesvalue = document.querySelector(".yessquare");
    let yesvaluereal = yesvalue.querySelector(".material-symbols-outlined");
    let visibility = allergysquare.getAttribute("data-visible");
    let checksign = no.querySelector(".material-symbols-outlined");
    if(!checksign.classList.contains("signed")){
        yesvaluereal.classList.remove("signed");
        yesvaluereal.style.display = "none";
        checksign.classList.add("signed");
        if(visibility === "true"){
            allergysquare.style.display = "none";
            allergies.forEach(allergy => allergy.classList.remove("added"))
            allergysquare.setAttribute("data-visible", "false")
        }
    }else{
        checksign.classList.remove("signed");
        yesvaluereal.classList.add("signed")
        allergysquare.style.display = "block";
        allergysquare.setAttribute("data-visible", "true");
    }
})
// Yes no buttons
let selector = Array.from(document.querySelectorAll(".yes-no"));
selector.forEach((select) =>  {
    let buttons = Array.from(select.querySelectorAll(".checksquare"));
    buttons.forEach((button) =>{
        if(button.parentElement.classList.contains("yes")){
            button.addEventListener("click", () =>{
                let next = button.firstChild.nextSibling;
                if(next.classList.contains("ticked")){
                    let nobuttonparent = button.parentElement.nextElementSibling;
                    let nobutton = nobuttonparent.querySelector(".material-symbols-outlined");
                    next.classList.remove("ticked");
                    nobutton.classList.add("ticked")
                    let displayparent = button.parentElement.parentElement.nextSibling.nextSibling;
                    if(displayparent.classList.contains("dropdown-display")){
                        displayparent.classList.remove("dropdown-display")
                    }else{
                        displayparent.classList.add("dropdown-display")
                    }
                }else if(!next.classList.contains("ticked")){
                    next.classList.add("ticked");
                    let nobuttonparent = button.parentElement.nextElementSibling;
                    let nobutton = nobuttonparent.querySelector(".material-symbols-outlined");
                    let displayparent = button.parentElement.parentElement.nextSibling.nextSibling;
                    if(nobutton.classList.contains("ticked")){
                        nobutton.classList.remove("ticked")
                    }
                    if(displayparent.classList.contains("dropdown-display")){
                        displayparent.classList.remove("dropdown-display")
                    }else{
                        displayparent.classList.add("dropdown-display")
                    }
                }
            })
        }else if(button.parentElement.classList.contains("no")){
            button.addEventListener("click", () =>{
                let nonext = button.firstChild.nextSibling;
                if(nonext.classList.contains("ticked")){
                    nonext.classList.remove("ticked");
                    let yesbuttonparent = button.parentElement.previousElementSibling;
                    let yesbutton = yesbuttonparent.querySelector(".material-symbols-outlined");
                    yesbutton.classList.add("ticked")
                    let displayparent = button.parentElement.parentElement.nextSibling.nextSibling;
                    displayparent.classList.add("dropdown-display")
                }else if(!nonext.classList.contains("ticked")){
                    nonext.classList.add("ticked");
                    let displayparent = button.parentElement.parentElement.nextSibling.nextSibling;
                    if(displayparent.classList.contains("dropdown-display")){
                        displayparent.classList.remove("dropdown-display")
                    }
                    let yesbuttonparent = button.parentElement.previousElementSibling;
                    let yesbutton = yesbuttonparent.querySelector(".material-symbols-outlined");
                    if(yesbutton.classList.contains("ticked")){
                        yesbutton.classList.remove("ticked");
                    }
                }
            })
        }
    })
})

