
function menu() {

    function menuLoad() {
        //Generate HTML elements and querySelectors
        //Menu container
        const article = document.createElement("article");
        article.setAttribute("class", "menu-container");
        const mainContent = document.querySelector("#content");
        //Menu card arrays
        const drinkArr = [];
        const foodArr = [];
        const dessertArr = [];

        /*Create 3 sections:
        1. Drinks
        2. Food
        3. Desserts
        */
        const drinkSection = createSection("Drinks");
        const foodSection = createSection("Burgers");
        const dessertSection = createSection("Desserts");
        

        //Create menu cards
        //Drink cards
        drinkArr.push(createMenuCard("Franky's Cola", "A classic ice cold cola that goes great with burgers, fries, or anything salty!", 5));
        drinkArr.push(createMenuCard("Melon Soda", "A fruity drink with the taste of melons! This drink is very sweet and goes well with ice cream as a float!", 3));
        drinkArr.push(createMenuCard("All Blue", "A drink inspired by Sanji's goal. A blueberry soda mixed with oranges cocktail style.", 6));

        drinkArr.forEach(function(element) {
            drinkSection.appendChild(element);
        });

        //Burger cards
        foodArr.push(createMenuCard("SUUUUPERR!!", "Franky's all american burger. A 1lb beef patty with american cheese, lettuce, tomato, and onions topped with ketchup, mustard, and mayo. Served with fries.", 8));
        foodArr.push(createMenuCard("Dwarf Giant Steak", "A hamburger steak made for true warriors on their birthday. A giant hamburg steak served with rice and a side salad. Optionally can add miso soup.", 10));
        foodArr.push(createMenuCard("Final Flash", "A burger that would give any saiyan pride. A double-decker burger with grilled onions, pineapple, grilled jalapenos and our super saiyan sauce (chipotle-garlic aioli). Served with sweet potato fries.", 12));

        foodArr.forEach(function(element) {
            foodSection.appendChild(element);
        });

        //Dessert cards
        dessertArr.push(createMenuCard("Ice Age", "A dessert that would freeze an ocean! Shaved ice with blueberry syrup topped with kiwi, sweet red beans, chocolate syrup, and bananas.", 4));
        dessertArr.push(createMenuCard("Big Mom Strawberry Cake", "A strawberry creme flavored sponge cake that could satisfy any craving.", 5));
        dessertArr.push(createMenuCard("Philosopher's Stone", "A deluxe strawberry chocolate parfait with oreos, chocolate wafers, coffee crumble, chocolate pockys, and a chocolate wafer straw. You don't need to lose an arm or a brother for this one.", 6));

        dessertArr.forEach(function(element) {
            dessertSection.appendChild(element);
        });

        article.appendChild(drinkSection);
        article.appendChild(foodSection);
        article.appendChild(dessertSection);

        mainContent.appendChild(article);

    }

    function createSection(sectionName) {
        const sectionContainer = document.createElement("div");
        const sectionHeader= document.createElement("h2");
        sectionHeader.setAttribute("class", "section-header");
        sectionHeader.textContent = sectionName;
        sectionContainer.appendChild(sectionHeader);
        sectionContainer.setAttribute("class", "menu-section");
        return sectionContainer;
    }

    function createMenuCard(itemName, description, price) {
        const menuCardContainer = document.createElement("div");
        menuCardContainer.setAttribute("class", "menu-card");

        const cardHeader = document.createElement("div");
        cardHeader.setAttribute("class", "card-header");

        const foodTitle = document.createElement("h4");
        foodTitle.setAttribute("class", "food-title")
        foodTitle.textContent = itemName;

        const priceHTML = document.createElement("p");
        priceHTML.setAttribute("class", "price");
        priceHTML.textContent =`$${price}`;

        const foodDescrip = document.createElement("p");
        foodDescrip.setAttribute("class", "food-description");
        foodDescrip.textContent = description;

        cardHeader.appendChild(foodTitle);
        cardHeader.appendChild(priceHTML);
        menuCardContainer.appendChild(cardHeader);
        menuCardContainer.appendChild(foodDescrip);

        return menuCardContainer;
    }

    return { menuLoad };
}

export default menu;