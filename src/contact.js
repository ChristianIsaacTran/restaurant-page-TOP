
function contact() {

    function contactLoad() {
        const article = document.createElement("article");
        const mainContent = document.querySelector("#content");
        article.setAttribute("class", "contact-container");
        article.appendChild(createContactCard("Christian Tran", "321-320-3000", "something@email.com"));
        
        mainContent.appendChild(article);
    }

    function createContactCard(personName, givenPhone, givenEmail) {
        const contactCardContainer = document.createElement("div");
        contactCardContainer.setAttribute("class", "contact-card");

        const details = document.createElement("div");
        details.setAttribute("class", "details");

        const name = document.createElement("h2");
        name.setAttribute("class", "person-name");

        const phone = document.createElement("p");
        phone.setAttribute("class", "phone");
        
        const email = document.createElement("p");
        email.setAttribute("class", "email");

        name.textContent = personName;
        phone.textContent = givenPhone;
        email.textContent = givenEmail;

        details.appendChild(phone);
        details.appendChild(email);
        contactCardContainer.appendChild(name);
        contactCardContainer.appendChild(details);

        return contactCardContainer;
    }

    return {contactLoad};
}

export default contact;