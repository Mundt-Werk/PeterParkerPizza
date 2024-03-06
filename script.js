                                               
let shoppingCart = [];

function loadOrderPage(){
    loadPizzaContainer();
    loadVegetarContainer();
    loadCalzoneContainer();
    loadDrinkContainer();
}

function loadPizzaContainer(){
    let pizzaContainer = document.getElementById('pizzaContainer');
    pizzaContainer.innerHTML ='';

    for (let i = 0; i < pizza_Container.length; i++) {
        const pizza = pizza_Container[i];
        pizzaContainer.innerHTML += generatePostsPizza(i, pizza);
    }
}

function loadVegetarContainer(){
    let vegetarContainer = document.getElementById('vegetarContainer');
    vegetarContainer.innerHTML ='';

    for (let i = 0; i < vegetar_Container.length; i++) {
        const vegetar = vegetar_Container[i];
        vegetarContainer.innerHTML += generatePostsVegetar(i, vegetar);
    }
}

function loadCalzoneContainer(){
    let calzoneContainer = document.getElementById('calzoneContainer');
    calzoneContainer.innerHTML ='';

    for (let i = 0; i < calzone_Container.length; i++) {
        const calzone = calzone_Container[i];
        calzoneContainer.innerHTML += generatePostsCalzone(i, calzone);
    }
}

function loadDrinkContainer(){
    let drinkContainer = document.getElementById('drinkContainer');
    drinkContainer.innerHTML ='';

    for (let i = 0; i < drink_Container.length; i++) {
        const drink = drink_Container[i];
        drinkContainer.innerHTML += generatePostsDrink(i, drink);
    }
}

function generatePostsPizza(i, pizza){
    return `
    <div onclick="addToShoppingCart()" class="eat_container">
    <div class="menu_and_price">
        <div>
            <h4>${pizza['mealName']}</h4>
            <p>${pizza['mealDescription']}</p>
        </div>
        <div>
            <h4>${pizza['mealPrice']} €</h4>
        </div>
    </div>
    <div class="pizza_mini_img" >
        <img src="${pizza['mealImage']}" alt="spiderManSpecialPizza">
    </div>
    <div class="add_to_shop">
        <img src="./img/plus-solid.svg" alt="plusButton">
    </div>
</div>
    `;
}

function generatePostsVegetar(i, vegetar){
    return`
    <div onclick="addToShoppingCart()" class="eat_container">
    <div class="menu_and_price">
        <div>
            <h4>${vegetar['mealName']}</h4>
            <p>${vegetar['mealDescription']}</p>
        </div>
        <div>
            <h4>${vegetar['mealPrice']} €</h4>
        </div>
    </div>
    <div class="pizza_mini_img" >
        <img src="${vegetar['mealImage']}" alt="spiderManSpecialPizza">
    </div>
    <div class="add_to_shop">
        <img src="./img/plus-solid.svg" alt="plusButton">
    </div>
</div>
    `;
}

function generatePostsCalzone(i, calzone) {
    return`
    <div onclick="addToShoppingCart()" class="eat_container">
    <div class="menu_and_price">
        <div>
            <h4>${calzone['mealName']}</h4>
            <p>${calzone['mealDescription']}</p>
        </div>
        <div>
            <h4>${calzone['mealPrice']} €</h4>
        </div>
    </div>
    <div class="pizza_mini_img" >
        <img src="${calzone['mealImage']}" alt="spiderManSpecialPizza">
    </div>
    <div class="add_to_shop">
        <img src="./img/plus-solid.svg" alt="plusButton">
    </div>
</div>
    `;
}

function generatePostsDrink(i, drink){
    return`
    <div onclick="addToShoppingCart()" class="eat_container">
    <div class="menu_and_price">
        <div>
            <h4>${drink['mealName']}</h4>
            <p>${drink['mealDescription']}</p>
        </div>
        <div>
            <h4>${drink['mealPrice']} €</h4>
        </div>
    </div>
    <div class="pizza_mini_img" >
        <img src="${drink['mealImage']}" alt="spiderManSpecialPizza">
    </div>
    <div class="add_to_shop">
        <img src="./img/plus-solid.svg" alt="plusButton">
    </div>
</div>
    `;
}

function loadDeliveryContainer(){
    let deliveryContainer = document.getElementById('deliveryContainer');
    deliveryContainer.innerHTML ='';


        deliveryContainer.innerHTML += `
        <div class="one_of_delivery">
                    <div class="amount_name_price">
                        <p>${1}</p>
                        <p>${mealName}</p>
                        <p>${mealPrice}</p>
                    </div>
                    <div class="how_mutch">
                        <img class="cursor_pointer" onclick="removeOneDish()" src="./img/minus-solid.svg" alt="minusIcon">
                        <p>1</p>
                        <img class="cursor_pointer" onclick="addOneDish()" src="./img/plus-solid.svg" alt="plusIcon">
                    </div>
                </div>

                 <div class="pay_delivery">
                    <div class="space_between">
                        <p>Zwischensumme</p>
                        <p>21,96 €</p>
                    </div>
                    <div class="space_between">
                        <p>Lieferkosten</p>
                        <p>Kostenlos</p>
                    </div>
                    <div class="space_between">
                        <p>Gesamt</p>
                        <p>21,96 €</p>
                    </div>
                    <button class="cursor_pointer">Bezahlen (Preis) €</button>
                </div>
        `;
    }

function addToShoppingCart(mealName, mealPrice){
    removePlaceholer();
    loadDeliveryContainer();

    shoppingCart.push({
        mealName: mealName,
        mealPrice: mealPrice,
        quantity: 1 
    });
}

function removePlaceholer(){
    document.getElementById('deliveryPlaceholder').classList.add('d_none');
}

function addPlaceholer(){
    document.getElementById('deliveryPlaceholder').classList.remove('d_none');
}

function openShoppingCart(){
    document.getElementById('smallShoppingCartClosed').classList.add('d_none');
    document.getElementById('smallShoppingCartOpen').classList.remove('d_none');
}

function closeShoppingCart(){
    document.getElementById('smallShoppingCartClosed').classList.remove('d_none');
    document.getElementById('smallShoppingCartOpen').classList.add('d_none');
}