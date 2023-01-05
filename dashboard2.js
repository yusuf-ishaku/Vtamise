let smoothies = [
    {
        smoothie: "Dairy Free Strawberry Smoothies",
        tag: "Dairy Free",
        allergen: "Dairy milk",
        servings: 1,
        recipe: "2 cups + 1 banana + 1/4 cup of oats milk, or any other vegetable milk you can get + 2 tablespoons of maple syrup",
        calories: 152,
        id: 1,
        imgsrc: "images/smoothie3.png"
    },
    {
        smoothie: "Dairy-free strawberry banana smoothie",
        tag: "Dairy free",
        allergen: "Dairy milk",
        servings: 1,
        recipe: "1-2 cups orange juice or dairy-free milk + 2 bananas + 2 cups hulled strawberries, fresh or frozen + juice of 1 lime + 1 tablespoon honey + 1 tablespoon ground flaxseed",
        calories: 250,
        id: 2,
        imgsrc: "images/smoothie6.png"
    },
    {
        smoothie: "Peanut-butter chocolate smoothies",
        calories: 289,
        tag: "Dairy free",
        servings: 1,
        recipe: "2 ripe spotty bananas peeled + 2 tablespoons organic natural peanut butter + 1.5 tablespoon unsweetened cocoa powder + ½-1 cup unsweetened non-dairy milk + 1-2 tablespoon(s) pure maple syrup optional + 3-4 ice cubes",
        allergen: "Dairy milk",
        id: 3,
        imgsrc: "images/smoothie5.png"
    },
    {
        smoothie: "Orange Creamsicle smoothies",
        calories: 330,
        servings: 1,
        recipe: `3 oranges + 15 ounce lite milk + 1 teaspoon vanilla extract + 2 tablespoons honey, to taste \n Directions: Peel the oranges removing as much of the white pith as possible, segment the orange and place on a tray and freeze, when oranges are frozen to desire, blend all ingredients till they are smooth`,
        allergen: "Dairy milk",
        permutation: "GL",
        id: 4,
        imgsrc: "images/smoothie2.png"
    },
    {
        smoothie: "Banana-Peanut butter Smoothies",
        calories: 330,
        servings: 1,
        allergen: "Gluten",
        id: 5,
        imgsrc: "images/smoothie1.png",
        recipe: "1/2 cup milk + 1 banana (small ripe) + 1/4 cup Jif Natural Creamy Peanut Butter Spread + 2 Tbsp. honey + 6 ice cubes + whipped cream + chocolate sprinkles"
    },
    {
        smoothie: "Tropical Pineapple Mango smoothie",
        calories: 240,
        tag: "Gluten-free",
        servings: 1,
        allergen: "Gluten",
        id: 6,
        imgsrc: "images/smoothie1.png",
        recipe: "1 cup spinach + 1/2 cup water or dairy free milk of choice + 1 banana + 1 tbsp nut butter + 2 tbsp gluten free oats (optional) + 1 tbsp shredded coconut + 1/2 cup mango + 1/2 cup pineapple"
    },
    {
        smoothie: "Orange, Banana, and Flaxseed",
        calories:300,
        allergen: "Gluten",
        servings: 1,
        tag: "Gluten-free",
        id: 7,
        imgsrc: "images/smoothie2.png",
        recipe: "1 cup soy or almond milk + 3 seedless oranges, peeled and segmented + 1 banana, frozen in chunks"
    },
    {
        smoothie: "Coconut milk Strawberry banana smoothies",
        calories: 350,
        allergen: "Gluten",
        tag: "Gluten-free",
        servings: 1,
        permutation: "GL",
        id: 8,
        imgsrc: "images/smoothie3.png",
        recipe: "Frozen strawberries, vanilla extract, coconut milk, frozen banana, shredded cocount"
    },
    {
        smoothie: "Banana-Potato smoothie",
        ailment: "Ulcer",
        permutation: "GLU",
        tag: "Ulcer cushioning",
        id: 9,
        servings: 1,
        calories: 250,
        imgsrc: "images/smoothie1.png",
        recipe: "1 unripe potato + 1 green banana + 1/2 glass of water(100ml) \n Instructions: Wash the potato, remove its skin and cut it into several pieces. Blend it until you get potato juice. Then, cut the green banana into several pieces and add them to the pitcher of the blender along with the potato juice. Finally, add half a glass of water to make it easier to liquify and process, until everything is properly mixed.",
    },
    {
        smoothie: "Cabbage, apple, ginger, celery ulcer burning",
        ailment: "Ulcer",
        calories: 290,
        id: 10,
        servings: 1,
        tag: "Ulcer cushioning",
        imgsrc: "images/smoothie4.png",
        recipe : "Properly wash all the fruits and place them on a very clean surface. Position your clean juicer on the table and place the cabbage in the juicer. “The juicer helps separate the cabbage fiber from the cabbage juice and we get to have the cabbage juice collected. \n The apple and a half is also placed in the juicer there after as well as the ginger and the celery. The juices from all are collected and the mixture is your smoothie."
    },
    {
        smoothie: "Banana-potato-ginger smoothie",
        ailment: "Ulcer",
        id: 11,
        tag: "Ulcer cushioning",
        permutation: "GLU",
        servings: 1,
        calories: 280,
        imgsrc: "images/smoothie1.png",
        recipe: "1 unripe potato + 1 green banana + 1-2 pieces of ginger + 1/2 glass of clean water (100ml) \n Instructions: Wash the potato, remove it's skin and cut  into several pieces. Blend it until you get potato juice. Then, cut the green banana into several pieces and add them to the pitcher along with the potato juice. Grind the ginger to a pulp and add it to the mix. Finally, add half a glass of wate to make it easier to liquefy and process, until everything is properly mixed."
    },
    {
        smoothie: "Diabetic-friendly chocolate smoothie",
        ailment: "Diabetes",
        tag: "Diabetic friendly",
        servings: 1,
        calories: 209,
        imgsrc: "images/smoothie5.png",
        recipe: "1 frozen avocado + 1/2 frozen banana + 1 tbsp of unsweetened cocoa powder + 1 cup(220ml) frozen diary-free milk unsweetened"
    },
    {
        smoothie: "Diabetic-friendly green smoothie",
        ailment: "Diabetes",
        id:12,
        tag: "Diabetic-friendly",
        servings: 1,
        permutation: "GLUD",
        calories: 189,
        imgsrc: "images/smoothie5.png",
        recipe: "30g of spinach + 1/4 avocado flesh scooped out + 1 medium sized green apple diced + 200ml of cold water + 1tbsp minced fresh ginger"
    },
    {
        smoothie: "3-ingredient lemon grapefruit smoothie",
        ailment: "Diabetes",
        tag: "Diabetic friendly",
        servings: 1,
        id: 13,
        calories: 133,
        imgsrc: "images/smoothie2.png",
        recipe: "200 g or one large grapefruit peeled and diced + Juice of 2 lemons + 1/2 cup/110ml of coconut water"
        
    },
    {
        smoothie: "Fat burning weight loss smoothie",
        diet: "Weight loss",
        tag: "Weight loss smoothie",
        servings: 1,
        calories: 231,
        id: 14, 
        imgsrc: "images/smoothie5.png",
        recipe: "1 cup spinach + 2 tbsp fresh mint + 1 stalk celery chopped + 1/2 cup brewed green tea cooled + 1/2 grapefruit peeled and seeded + 1 cup pineapple frozen + 1/4 avocado + dash cayenne pepper optional + 1 serving Protein Smoothie Boost  optional"
    },
    {
        smoothie: "Weight loss pineapple smoothie",
        diet: "Weight loss",
        tag: "Weight loss smoothie",
        servings: 1,
        calories: 250,
        id: 15,
        imgsrc: "images/smoothie5.png",
        recipe: "3/4 cup fresh spinach + 3/4 cup frozen pineapple + 1/2 banana, frozen (peel and freeze ahead of time) + 1 tablespoon coconut flakes (unsweetened, toasted works great too!) + 2 scoops collagen peptides powder (see product recommendations) + 1 tsp matcha green tea powder + Juice from 1/2 lime + 3/4 cup unsweetened almond milk"
    },
    {
        smoothie: "Weight loss green smoothie",
        imgsrc: "images/smoothie5.png",
        diet: "Weight loss",
        tag: "Weight loss smoothie",
        permutation: "GLUDW",
        calories: 279,
        id: 16,
        servings: 1,
        recipe: " 1/3 cup coconut water + juice of 1/2 small lemon + 2 cups spinach or kale + 1/4 peeled avocad + 1 peach, pitted (or 1 cup frozen peaches) + 1/4 slice fresh peeled ginger + 1 teaspoon hemp, chia, or flax seeds + 1 scoop pea protein powder (unflavored or vanilla) + ice"
    }
]
let collate_button = document.getElementById("collate");
let age = document.getElementById("age-input");
let re_input = document.querySelector(".alert-background");
let yessir;
let resolve = document.querySelector(".button1");
let un_resolve = document.querySelector(".button2");
resolve.onclick = () =>{
    re_input.style.display = "none";
}
un_resolve.onclick = () =>{
    re_input.style.display = "none";
    yessir = true
}
let addToCart = (e) =>{
    let i = e.parentElement.id;
    let cartItems = JSON.parse(localStorage.getItem('Cart')) || [];
    if(!cartItems || cartItems.length === 0)localStorage.setItem("Cart", JSON.stringify(cartItems));
    
    cartItems.push(smoothies[i]);
    localStorage.setItem("Cart", JSON.stringify(cartItems));
}
collate_button.onclick = () =>{
    let determine = (added_arr, user_smoothies) =>{
        if((added_arr.some(element => element.innerText === "Dairy milk")) || added_arr.some(element => element.innerText === "Lactose intolerance")){
            user_smoothies = user_smoothies.concat(smoothies.filter(element => element.allergen === "Dairy milk"));
            console.log("May");
            }
            if(added_arr.some(element => element.innerText === "Gluten")){
            user_smoothies = user_smoothies.concat(smoothies.filter(element => element.allergen === "Gluten"))
            console.log("June");
            }
            if(added_arr.some(element => element.innerText === "Ulcer")){
            user_smoothies = user_smoothies.concat(smoothies.filter(element => element.ailment === "Ulcer"));
            console.log("July");
            }
            if(added_arr.some(element => element.innerText === "Diabetes")){
            user_smoothies = user_smoothies.concat(smoothies.filter(element => element.ailment === "Diabetes"));
            console.log("August");
            }
            if(added_arr.some(element => element.innerText === "Weight-loss")){
            user_smoothies = user_smoothies.concat(smoothies.filter(element => element.diet === "Weight loss"));
            console.log("September");
            }
            if(added_arr.some(element => element.innerText === "Weight-gain")){
            user_smoothies = user_smoothies.concat(smoothies.filter(element => element.diet === "Weight-gain"));
            console.log("October")
            }
            if((added_arr.some(element => element.innerText === "Gluten") && (added_arr.some(element => element.innerText === "Dairy milk") || added_arr.some(element => element.innerText === "Lactose intolerance")))){
            user_smoothies = smoothies.filter(element => element.permutation === "GL");
            }
            if(((added_arr.some(element => element.innerText === "Dairy milk") || added_arr.some(element => element.innerText === "Lactose intolerance")) && added_arr.some(element => element.innerText === "Ulcer")) || ((added_arr.some(element => element.innerText === "Gluten")) && (added_arr.some(element => element.innerText === "Ulcer"))) || (added_arr.some(element => element.innerText === "Gluten" && (element.innerText === "Lactose intolerance" || element.innerText === "Dairy milk")) && element.innerText === "Ulcer")){
           user_smoothies = smoothies.filter(element => element.permutation === "GLU")
            }
            if(added_arr.some(element => (element.innerText === "Dairy milk" || element.innerText === "Lactose intolerance" || element.innerText === "Gluten" || element.innerText === "Ulcer")) && added_arr.some(element => element.innerText === "Diabetes")){
            user_smoothies = smoothies.filter(element => element.permutation === "GLUD");
            console.log("Aye")
            }
            if(added_arr.some(element => (element.innerText === "Dairy milk" || element.innerText === "Lactose intolerance" || element.innerText === "Gluten" || element.innerText === "Ulcer" || element.innerText === "Diabetes")) && added_arr.some(element => element.innerText === "Weight-loss")){
            user_smoothies = smoothies.filter(element => element.permutation === "GLUDW");
            console.log("we move")
            }
            console.log(user_smoothies);
            let mapper = document.querySelector(".suggested_smoothies");
            let smoothie_shelf = mapper.querySelector(".smoothies");
            smoothie_shelf.innerHTML = "";
            user_smoothies.map((x) =>{
                return(
                    smoothie_shelf.innerHTML += `<div class="smoothie" id=${x.id}> <div class="smoothie_image"><img class="smoothie-img" src=${x.imgsrc} alt=""></div><div class="smoothie-text"><h3>${x.smoothie}</h3><p class="servings">${x.servings.toFixed(2)} Servings (for calories needed)</p></div><button class="add_to_cart" onclick = "addToCart(this)">Add to cart</button></div>`
                )
            });
          
            added_arr.forEach(element => element.classList.remove("added"));
            let selections = document.querySelector(".selections")
            selections.innerHTML = "";
            let modalpack = document.querySelector(".modal-pack");
            let modal = document.querySelector(".modal");
            modal.style.display = "none";
            modalpack.style.transform = "translateY(30rem)";
    }
    let age_value = age.value;
    if(yessir && age_value === ""){
        // console.log("Teams");
        let added_arr = Array.from(document.querySelectorAll(".added"));
        let user_smoothies = [];
        // console.log(yessir)
        if(added_arr.length == 0){
           alert("You have not made any preferences");
        }
        else{
            setTimeout(determine, 4000, added_arr, user_smoothies);
        }
        
    }    
    // console.log(age_value);
    if(age_value === "" && !yessir){
        console.log("Please put in age");
        re_input.style.display = "block";
    }
    else if(age_value !== "" && (age_value < 2 || age_value > 150)){
        console.log("no age exists")
    }else if((age_value !== "" && yessir) || (age_value !== "" && !yessir)){
        if(age_value >= 2 && age_value <= 3){
            let calorie_per_day = (1000 + 1400)/2;
            let calorie = calorie_per_day * (20/100);
            smoothies.forEach(element => {
             if(element.calories > calorie + 5){
                let newcalories = element.calories;
                for(i = newcalories; calorie < newcalories; i--){
                    newcalories -= 1;
                }
                element.servings = newcalories/element.calories;
                console.log(element.servings)
            }else if(element.calories < calorie-5){
                let newcalories = element.calories;
                for(i = newcalories; newcalories < calorie; i++){
                    newcalories += 1;
                }
                element.servings = newcalories/element.calories;
                console.log(element.servings);
            }else{
                console.log("this is okay")
            }
            });
            console.log(smoothies);
            let added_arr = Array.from(document.querySelectorAll(".added"));
            let user_smoothies = [];
            if(added_arr.length === 0){
                alert("You have not made any preferences");
            }else{
                setTimeout(determine, 3000, added_arr, user_smoothies);
            }
           
            document.querySelector("#age-input").value = "";
        }else if(age_value >=4 && age_value <=8){
            let calorie_per_day = (1400 + 1600)/2;
            let calorie = calorie_per_day * (20/100);
            smoothies.forEach(element => {
                if(element.calories > calorie + 5){
                    let newcalories = element.calories;
                    for(i = newcalories; calorie < newcalories; i--){
                        newcalories -= 1;
                    }
                    element.servings = element.calories/newcalories;
                    console.log(element.servings);
                }else if(element.calories < calorie -5){
                    let newcalories = element.calories;
                    for(i = newcalories; newcalories < calorie; i++){
                        newcalories += 1;
                    }
                    element.servings = newcalories/element.calories;
                    console.log(element.servings);
                }else{
                    console.log("this is okay")
                }
            });
            console.log(smoothies);
            let added_arr = Array.from(document.querySelectorAll(".added"));
            let user_smoothies = [];
            if(added_arr.length === 0){
                alert("You have not made any preferences");
            }else{
                setTimeout(determine, 3000, added_arr, user_smoothies)
            }
            document.querySelector("#age-input").value = "";
        }else if(age_value >= 9 && age_value <= 13){
            let calorie_per_day = (1800 + 2200)/2;
            let calorie = calorie_per_day * (20/100);
            smoothies.forEach(element => {
                if(element.calories > calorie + 5){
                    let newcalories = element.calories;
                    for(i = newcalories; calorie < newcalories; i--){
                        newcalories -= 1;
                    }
                    element.servings = element.calories/newcalories;
                    console.log(element.servings);
                }else if(element.calories < calorie -5){
                    let newcalories = element.calories;
                    for(i = newcalories; newcalories < calorie; i++){
                        newcalories += 1;
                    }
                    element.servings = newcalories/element.calories;
                    console.log(element.servings);
                }else{
                    console.log("this is okay")
                }
                }
            );
            console.log(smoothies);
            let added_arr = Array.from(document.querySelectorAll(".added"));
            let user_smoothies = [];
            if(added_arr.length === 0){
                alert("You have not made any preferences");
            }else{
                setTimeout(determine, 3000, added_arr, user_smoothies);
            }
            document.querySelector("#age-input").value = "";
        }else if(age_value >=14 && age_value <= 18){
            let calorie_per_day = (2400 + 2800)/2;
            let calorie = calorie_per_day * (20/100);
            smoothies.forEach(element =>{
                if(element.calories > calorie + 5){
                    let newcalories = element.calories;
                    for(i = newcalories; calorie < newcalories; i--){
                        newcalories -= 1;
                    }
                    element.servings = element.calories/newcalories;
                    console.log(element.servings);
                }else if(element.calories < calorie -5){
                    let newcalories = element.calories;
                    for(i = newcalories; newcalories < calorie; i++){
                        newcalories += 1;
                    }
                    element.servings = newcalories/element.calories;
                    console.log(element.servings);
                }else{
                    console.log("this is okay")
                }
            });
            console.log(smoothies);
            let added_arr = Array.from(document.querySelectorAll(".added"));
            let user_smoothies = [];
            if(added_arr.length === 0){
                alert("You have not made any preferences");
            }else{
                setTimeout(determine, 3000, added_arr, user_smoothies)
            }
            document.querySelector("#age-input").value = "";
        }else if(age_value >= 19 && age_value <= 30){
            let calorie_per_day = (2600 + 2800)/2;
            let calorie = calorie_per_day * (20/100);
            smoothies.forEach(element =>{
                if(element.calories > calorie + 5){
                    let newcalories = element.calories;
                    for(i = newcalories; calorie < newcalories; i--){
                        newcalories -= 1;
                    }
                    element.servings = element.calories/newcalories;
                    console.log(element.servings);
                }else if(element.calories < calorie -5){
                    let newcalories = element.calories;
                    for(i = newcalories; newcalories < calorie; i++){
                        newcalories += 1;
                    }
                    element.servings = newcalories/element.calories;
                    console.log(element.servings);
                }else{
                    console.log("this is okay")
                }
            });
            console.log(smoothies);
            let added_arr = Array.from(document.querySelectorAll(".added"));
            let user_smoothies = [];
            if(added_arr.length === 0){
                alert("You have not made any preference");
            }else{
                setTimeout(determine, 3000, added_arr, user_smoothies);
            }
            document.querySelector("#age-input").value = "";
        }else if(age_value >= 31 && age_value <= 50){
            let calorie_per_day = (2400 + 2600)/2;
            let calorie = calorie_per_day * 0.2;
            smoothies.forEach(element =>{
                if(element.calories > calorie + 5){
                    let newcalories = element.calories;
                    for(i = newcalories; calorie < newcalories; i--){
                        newcalories -= 1;
                    }
                    element.servings = element.calories/newcalories;
                    console.log(element.servings);
                }else if(element.calories < calorie -5){
                    let newcalories = element.calories;
                    for(i = newcalories; newcalories < calorie; i++){
                        newcalories += 1;
                    }
                    element.servings = newcalories/element.calories;
                    console.log(element.servings);
                }else{
                    console.log("this is okay")
                }
            })
            console.log(smoothies);
            let added_arr = Array.from(document.querySelectorAll(".added"));
            let user_smoothies = [];
            if(added_arr.length === 0){
                alert("You have not made any preferences");
            }else{
                setTimeout(determine, 3000, added_arr, user_smoothies)
            }
            document.querySelector("#age-input").value = "";
        }else if(age_value >= 51){
            let calorie_per_day = (2200 + 2400)/2;
            let calorie = calorie_per_day * 0.2;
            smoothies.forEach(element =>{
                if(element.calories > calorie + 5){
                    let newcalories = element.calories;
                    for(i = newcalories; calorie < newcalories; i--){
                        newcalories -= 1;
                    }
                    element.servings = element.calories/newcalories;
                    console.log(element.servings);
                }else if(element.calories < calorie -5){
                    let newcalories = element.calories;
                    for(i = newcalories; newcalories < calorie; i++){
                        newcalories += 1;
                    }
                    element.servings = newcalories/element.calories;
                    console.log(element.servings);
                }else{
                    console.log("this is okay")
                }
            });
            console.log(smoothies);
            let added_arr = Array.from(document.querySelectorAll(".added"));
            let user_smoothies = [];
            if(added_arr.length === 0){
                alert("You have not made any preferences");
            }else{
                setTimeout(determine, 3000, added_arr, user_smoothies);
            }
            document.querySelector("#age-input").value = "";
        }
        else if(yessir && age_value === ""){
            let added_arr = Array.from(document.querySelectorAll(".added"));
            let user_smoothies = [];
            if(added_arr.length === 0){
               alert("You have not made any preferences");
            }else{
               setTimeout(determine, 3000, added_arr, user_smoothies);
            }
            document.querySelector("#age-input").value = "";
        }
    }
}
