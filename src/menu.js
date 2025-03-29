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

