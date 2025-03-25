const pageComponent = () => {
    const page = document.createElement("h1");
    page.innerText = "Brew & Bites Restaurant";
    return page;
}

const paragraphComponent = () => {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome to <strong>Brew & Bites</strong> restaurant,a charming spot where every sip of coffee and bite of food feels like home. Whether you're here to relax with a warm latte or enjoy a delicious meal, our cozy ambiance and friendly service will make you feel right at ease. From savory sides to hearty main dishes, we’ve got something to satisfy every craving."
    return paragraph;
}

const openingHrsComponent = () => {
    const openingHrs = document.createElement("p");
    openingHrs.innerHTML = "Opening hours:";
    return openingHrs;
}

const unorderedListComponent = () => {
    const unorderedList = document.createElement("ul");
    const listItems = ["Monday to Friday: 7:00 AM - 9:00 PM", "Saturday: 8:00 AM - 10:00 PM", "Sunday: 9:00 AM - 6:00 PM"];

    listItems.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        unorderedList.appendChild(li);
    })
    return unorderedList;
}

