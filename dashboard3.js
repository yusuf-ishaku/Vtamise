let displayCart = () =>{
let cartItems = JSON.parse(localStorage.getItem("Cart"));
let numberCircle = document.querySelector(".number-circle");
let no_item = document.querySelector(".no-item");
let cart = document.querySelector('.crt-is');
if(!cartItems){
    numberCircle.classList.add("cart");
    no_item.classList.remove('crt-emt');
    cart.classList.add("crt-emt");
}else{
    numberCircle.classList.remove("cart");
    numberCircle.innerText = cartItems.length;
    no_item.classList.add("crt-emt");
    cart.classList.remove("crt-emt")
    cart.innerHTML = ""
    cartItems.map((x) =>{
        return(
           cart.innerHTML += `<div class="smoothie" id=${x.id}> <div class="smoothie_image"><img class="smoothie-img" src= "${x.imgsrc}" alt=""></div><div class="smoothie-text"><h3>${x.smoothie}</h3><p class="servings">${x.servings.toFixed(2)} Servings (for calories needed)</p><p class= "price">${x.price}</p></div><button class="checkout" onclick = "checkOut(this)">Checkout</button></div>`
        )
    });
}
}
setInterval(displayCart, 1100);
// setInterval(displayCart,100, cartItems, no_item);
let check_out = document.querySelector(".checkout");
let check_out_box = document.querySelector('.sector-model');
let main = document.querySelector(".main");
let checkOut = () =>{
    if(check_out_box.classList.contains("sector-model-revealed")){
        check_out_box.classList.remove("sector-model-revealed");
        main.style.overflow = "scroll"
    }else{
        check_out_box.classList.add("sector-model-revealed");
        main.style.overflow = "hidden"
    }
}

window.onclick = function(event) {
    if (event.target == check_out_box) {
      check_out_box.classList.remove("sector-model-revealed")
      main.style.overflow = "scroll"
    }
  }