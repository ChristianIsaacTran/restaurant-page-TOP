import image1 from "./imgs/pexels-aimbere-elorza-1176843138-27220713.jpg";
import image2 from "./imgs/pexels-allanglezg-31650326.jpg";
import image3 from "./imgs/pexels-valeriya-1199957.jpg";
import image4 from "./imgs/pexels-valeriya-1639557.jpg";

function home() {

    //Generate new HTML elements and containers
    const article = document.createElement("article");
    const biographyContainer = document.createElement("div");
    const bioHeader = document.createElement("h2");
    const biography = document.createElement("p");
    const imageList = document.createElement("ul");
    const quoteContainer = document.createElement("div");
    const quote = document.createElement("h2");
    const emphasis = document.createElement("em");
    const burgerImg1 = document.createElement("img");
    const burgerImg2 = document.createElement("img");
    const burgerImg3 = document.createElement("img");
    const burgerImg4 = document.createElement("img");

    function homeLoad() {
        

        //Assign image paths
        burgerImg1.src = image1;
        burgerImg2.src = image2;
        burgerImg3.src = image3;
        burgerImg4.src = image4;
        const imgArr = [burgerImg1, burgerImg2, burgerImg3, burgerImg4];

        //Create image list, generate list items with images in them
        imgArr.forEach(function (element) {
            const listItem = document.createElement("li");
            listItem.appendChild(element);
            imageList.appendChild(listItem);
        });

        //Create biography div
        biographyContainer.setAttribute("class", "biography");
        bioHeader.textContent = "Welcome to Burger Radio";
        biography.textContent = "This is where I would describe the restaurant if it were real, but unfortunately this restaurant is made up entirely out of imagination and does not exist nor take any ownership for any of the burgers/foods that are depicted. So far, the launch of this mythical restaurant has been stellar! We've had some out of our famous celebrities like Boruto Uzumaki, Monkey D. Luffy, and Franky in our doors! Our burgers are made with the finest ingredients, smashed and seared to perfection and topped with your choice of our 55 sauces!";
        biographyContainer.appendChild(bioHeader);
        biographyContainer.appendChild(biography);

        //Create quote div
        quoteContainer.setAttribute("class", "quote");
        emphasis.textContent = "\"This burger will hit all the right frequencies!\" - Some Guy";
        quote.appendChild(emphasis);
        quoteContainer.appendChild(quote);

        //Append the containers to the main content container
        article.setAttribute("class", "summary");
        article.appendChild(biographyContainer);
        article.appendChild(imageList);
        const mainContent = document.querySelector("#content");
        mainContent.appendChild(article);
        mainContent.appendChild(quoteContainer);
    }

    return {homeLoad};
}

export default home;