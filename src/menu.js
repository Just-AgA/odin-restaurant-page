function drinksMenu() {
    const coffeeMenu = document.createElement("div");
    coffeeMenu.classList.add("coffee-menu");
    const coffee = document.createElement("h2");
    coffee.innerHTML = "Coffee";
    coffeeMenu.appendChild(coffee);
    const drinks = [
        "<strong>Espresso 2$</strong></br> A strong, concentrated shot of coffee with a rich flavor. Perfect for a quick pick-me-up.",
        "<strong>Cappuccino 3$</strong></br> A smooth blend of espresso, steamed milk, and foam, offering a creamy and frothy texture.",
        "<strong>Latte 2$</strong></br> Espresso combined with velvety steamed milk, creating a mellow and smooth coffee experience.",
        "<strong>Americano 1$</strong></br> Espresso diluted with hot water for a simple, robust coffee flavor without the intensity of a straight shot.",
        "<strong>Mocha 3$</strong></br> A delightful fusion of espresso, steamed milk, and chocolate, topped with whipped cream for extra indulgence."
    ];

    const ulList = document.createElement("ul");
    drinks.forEach(drink => {
        const drinkLi = document.createElement("li");
        drinkLi.innerHTML = drink;
        ulList.appendChild(drinkLi);
    })

    coffeeMenu.appendChild(ulList);
    return coffeeMenu;
}

function sidesMenu() {
    const menuItems = [
        "<strong>Garlic Bread 4$</strong><br>Freshly baked bread with a buttery garlic spread, toasted to golden perfection.",
        "<strong>Fries 4$</strong><br>Crispy, golden-brown fries served hot, a perfect balance of crunchy on the outside and tender inside.",
        "<strong>Side Salad 3$</strong><br>A light mix of fresh greens, cherry tomatoes, and cucumber, served with a tangy vinaigrette dressing.",
        "<strong>Coleslaw 2$</strong><br>A refreshing and creamy cabbage slaw with a hint of tanginess, complementing any dish.",
        "<strong>Soup of the Day 5$</strong><br>A warm, hearty soup made fresh daily; ask your server for today’s special."
    ];
    
    const sidesMenuDiv = document.createElement("div");
    sidesMenuDiv.classList.add("sides-menu");
    const sides = document.createElement("h2");
    sides.innerHTML = "Sides";
    sidesMenuDiv.appendChild(sides);
    const sidesUl = document.createElement("ul");
    
    menuItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = item; 
        sidesUl.appendChild(listItem); // Append the <li> to the menu
    });
    sidesMenuDiv.appendChild(sidesUl);

    return sidesMenuDiv;
}

export const menu =() => {
    const content = document.querySelector("#content");
    content.innerHTML = "";

   

    

    const mainMenu = document.createElement("div");
    mainMenu.classList.add("main-menu");
    const mains = document.createElement("h2");
    mains.innerHTML = "Main";
    mainMenu.appendChild(mains);

    const mainDishes = [
        "<strong>Grilled Chicken Sandwich 6$</strong></br>A juicy, tender grilled chicken breast served with crisp lettuce, tomato, and creamy mayo on a soft bun.",
        "<strong>Cheeseburger 4$</strong></br>A perfectly grilled beef patty, melted cheddar cheese, pickles, and a zesty house sauce, all in a soft bun.",
        "<strong>Vegetarian Pasta 4$</strong></br>Penne pasta tossed with a rich marinara sauce, fresh basil, and topped with parmesan cheese for a light yet flavorful meal.",
        "<strong>Steak Frites 6$</strong></br>A tender grilled steak, cooked to your liking, served with crispy fries and a side of garlic butter for added flavor.",
        "<strong>Fish Tacos 5$</strong></br>Lightly battered and crispy fish served in soft tortillas with tangy slaw and a drizzle of lime crema."
    ];

    const mainUl = document.createElement("ul");
    mainDishes.forEach(dish => {
        const dishLi = document.createElement("li");
        dishLi.innerHTML = dish;
        mainUl.appendChild(dishLi);
    })
    mainMenu.appendChild(mainUl);

    content.appendChild(drinksMenu());
    content.appendChild(sidesMenu());
    content.appendChild(mainMenu);
}