let displayCart = () =>{
let cartItems = JSON.parse(localStorage.getItem("Cart")) || [];
if(!cartItems)localStorage.setItem("Cart", JSON.stringify(cartItems))
let no_item = document.querySelector(".no-item");
if(cartItems.length === 0 || !cartItems){
    no_item.classList.add("crt-showing");
}else{
    no_item.classList.remove("crt-showing");
    no_item.classList.add("crt-emt");
    let cart = document.querySelector('.crt-is');
    cart.innerHTML = ""
    cartItems.map((x) =>{
        return(
           cart.innerHTML += `<div class="smoothie" id=${x.id}> <div class="smoothie_image"></div><div class="smoothie-text"><h3>${x.smoothie}</h3><p class="servings">${x.servings.toFixed(2)} Servings (for calories needed)</p></div><button class="add_to_cart" onclick = "addToCart(this)">Checkout</button></div>`
        )
    })
}
}
setInterval(displayCart, 1000);
// setInterval(displayCart,100, cartItems, no_item)
