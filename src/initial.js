const pageComponent = () => {
    const page = document.createElement("h1");
    page.innerText = "Brew & Bites Restaurant";
    return page;
}

const paragraphComponent = () => {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome to <strong>Brew & Bites</strong> restaurant,a charming spot where every sip of coffee and bite of food feels like home. Whether you're here to relax with a warm latte or enjoy a delicious meal, our cozy ambiance and friendly service will make you feel right at ease. From savory sides to hearty main dishes, we've got something to satisfy every craving."
    return paragraph;
}

const openingHrsComponent = () => {
    const openingHrs = document.createElement("p");
    openingHrs.innerHTML = "<span>Opening hours:</span>";
    return openingHrs;
}

const unorderedListComponent = () => {
    const unorderedList = document.createElement("ul");
    const listItems = ["<span>Monday to Friday:</span> 7:00 AM - 9:00 PM", "<span>Saturday:</span> 8:00 AM - 10:00 PM", "<span>Sunday:</span> 9:00 AM - 6:00 PM"];

    listItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item;
        unorderedList.appendChild(li);
    })
    return unorderedList;
}

const addressComponent = () => {
    const address = document.createElement("address");
    const addressParagraph = document.createElement("p");
    addressParagraph.innerHTML = "123 Maple Street,<br> Pleasantville, <br>USA";
    address.appendChild(addressParagraph);
    return address;
}

const initialDivComponent = () => {
    const initialDiv = document.createElement("div");
    initialDiv.classList.add("init-div");
    
    initialDiv.appendChild(pageComponent());
    initialDiv.appendChild(paragraphComponent());
    initialDiv.appendChild(openingHrsComponent())
    initialDiv.appendChild(unorderedListComponent());
    initialDiv.appendChild(addressComponent());
    return initialDiv;
}

export const initialLoad = () => {
    const firstPage = document.querySelector("#content");
    firstPage.innerHTML = "";

    firstPage.appendChild(initialDivComponent());
}
