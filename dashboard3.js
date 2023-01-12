let corigo = true;
let displayCart = () =>{
let cartItems = JSON.parse(localStorage.getItem("Cart"));
let numberCircle = document.querySelector(".number-circle");
let no_item = document.querySelector(".no-item");
let cart = document.querySelector('.crt-is');
let cartBdy = document.querySelector(".big-crt")
if(!cartItems){
    numberCircle.classList.add("cart");
    no_item.classList.remove('crt-emt');
    cartBdy.classList.add("crt-emt");
}else{
    numberCircle.classList.remove("cart");
    numberCircle.innerText = cartItems.length;
    no_item.classList.add("crt-emt");
    cartBdy.classList.remove("crt-emt")
    cart.innerHTML = "";
    cartItems.map((x) =>{
        return(
           cart.innerHTML += `<div class="smoothie" id=${x.id}> <div class="smoothie_image"><img class="smoothie-img" src= "${x.imgsrc}" alt=""></div><div class="smoothie-text"><h3>${x.smoothie}</h3><p class="servings">${x.servings.toFixed(2)} Servings (for calories needed)</p><p class= "price">$${x.price}</p></div><button class="checkout" onclick = "checkOut(this)">Checkout</button></div>`
        )
    });
}
}
setInterval(displayCart, 1100);
let servingvalue;
// setInterval(displayCart,100, cartItems, no_item);
let buy = (e) =>{
    if(e.innerText === "Order Single Serve"){
        e.innerText = "Order Required Servings";
        let target = e.id;
        cartItems.forEach(element => {
            if(element.id == target){
                servingvalue = element.servings;
                checkOutDesc.innerHTML = "";
                checkOutDesc.innerHTML = `
                <div class="checkout-inner">
                    <div class="chkt-image">
                        <img class="imgsrcimage" src="${element.imgsrc}" alt=""/>
                    </div>
                    <div class="chkt-UI">
                        <div>
                            <h4 class="chkt-text">You are about to order ${1} servings of ${element.smoothie} for $${(element.price * 1).toFixed(2)}</h4>
                            <div><button id=${element.id} class="single" onclick="buy(this)">${e.innerText}</class></div>
                        </div>
                        <code class="code">Powered by CwivelPack(c)2023</code>
                    </div>
                </div>`
            }});
        
    }
    else if(e.innerText === "Order Required Servings"){
        e.innerText = "Order Single Serve";
        let target = e.id;
        corigo = true;
        cartItems.forEach(element => {
            if(element.id == target){
                element.servings = servingvalue;
                checkOutDesc.innerHTML = "";
                checkOutDesc.innerHTML = `
                <div class="checkout-inner">
                    <div class="chkt-image">
                        <img class="imgsrcimage" src="${element.imgsrc}" alt=""/>
                    </div>
                    <div class="chkt-UI">
                        <div>
                            <h4 class="chkt-text">You are about to order ${element.servings.toFixed(1)} servings of ${element.smoothie} for $${(element.price * element.servings).toFixed(2)}</h4>
                            <div><button id=${element.id} class="single" onclick="buy(this)">${e.innerText}</class></div>
                        </div>
                        <code class="code">Powered by CwivelPack(c)2023</code>
                    </div>
                </div>`
            }});
    }
}
let check_out = document.querySelector(".checkout");
let check_out_box = document.querySelector('.sector-model');
let checkOutDesc = document.querySelector(".desc-square");
let buySmoothies = [];
let checkOut = (e) =>{
    let it = e.parentElement.id;
    cartItems = JSON.parse(localStorage.getItem("Cart"))
    if(check_out_box.classList.contains("sector-model-revealed")){
        check_out_box.classList.remove("sector-model-revealed");
        main.style.overflow = "scroll";
    }else{
        check_out_box.classList.add("sector-model-revealed");
        main.style.overflow = "hidden";
        cartItems.forEach(element => {
            if(element.id == it){
                // console.log(element);
                checkOutDesc.innerHTML = "";
                checkOutDesc.innerHTML = `
                <div class="checkout-inner">
                    <div class="chkt-image">
                        <img class="imgsrcimage" src="${element.imgsrc}" alt=""/>
                    </div>
                    <div class="chkt-UI">
                        <div>
                            <h4 class="chkt-text">You are about to order ${corigo? element.servings.toFixed(1): 1} servings of ${element.smoothie} for $${(element.price * element.servings).toFixed(2)}</h4>
                            <div><button id=${element.id} class="single" onclick="buy(this)">Order Single Serve</class></div>
                        </div>
                        <code class="code">Powered by CwivelPack(c)2023</code>
                    </div>
                </div>`
            }
        });
    }
}

window.onclick = function(event) {
    if (event.target == check_out_box) {
      check_out_box.classList.remove("sector-model-revealed")
      main.style.overflow = "scroll"
    }
  }