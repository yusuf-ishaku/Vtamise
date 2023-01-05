let displayCart = () =>{
let cartItems = JSON.parse(localStorage.getItem("Cart"));
let no_item = document.querySelector(".no-item");
let cart = document.querySelector('.crt-is');
if(!cartItems){
   no_item.classList.remove('crt-emt');
   cart.classList.add("crt-emt");
}else{
    no_item.classList.add("crt-emt");
    cart.classList.remove("crt-emt")
    cart.innerHTML = ""
    cartItems.map((x) =>{
        return(
           cart.innerHTML += `<div class="smoothie" id=${x.id}> <div class="smoothie_image"><img class="smoothie-img" src= "${x.imgsrc}" alt=""></div><div class="smoothie-text"><h3>${x.smoothie}</h3><p class="servings">${x.servings.toFixed(2)} Servings (for calories needed)</p></div><button class="add_to_cart" onclick = "">Checkout</button></div>`
        )
    })
}
}
setInterval(displayCart, 1000);
// setInterval(displayCart,100, cartItems, no_item)
