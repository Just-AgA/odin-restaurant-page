function aboutDiv() {
    const aboutPage = document.createElement("div");
    aboutPage.classList.add("about-div");

    const aboutUs = document.createElement("h2");
    aboutUs.innerHTML = "About Us";
    aboutPage.appendChild(aboutUs);

    const aboutDescription = document.createElement("p");
    aboutDescription.innerHTML ="Here at <strong>Brew & Bites</strong> we are all about bringing people together over delicious food and freshly brewed coffee in a cozy, inviting space. Whether you're here for a quick bite or to relax with friends, we strive to create a warm and memorable experience for everyone. Our menu offers a variety of dishes made with the finest ingredients, from our hearty grilled sandwiches to crispy fries, paired perfectly with our selection of coffees. Every meal is crafted to make you feel right at home."
    aboutPage.appendChild(aboutDescription);

    return aboutPage;
}

function contactDiv() {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    const contactHeading = document.createElement("h2");
    contactHeading.innerHTML = "Contact Us";
    contact.appendChild(contactHeading);

    const contactPara = document.createElement("p");
    contactPara.innerHTML = "<strong>Address:</strong> </br>1234 Craft Ave,Flavor Town, FT 56789";

    contact.appendChild(contactPara);

    const contactTelephone = document.createElement("p");
    contactTelephone.innerHTML = "<strong>Telephone:</strong></br> +1 (555) 123-4567";
    contact.appendChild(contactTelephone);

    const contactEmail = document.createElement("p");
    contactEmail.innerHTML = "<strong>Email:</strong> </br>info@brewbites.com";
    contact.appendChild(contactEmail);
    
    return contact;
}

export const about = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    content.appendChild(aboutDiv());
    content.appendChild(contactDiv());

}