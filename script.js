const catalogueBox = document.querySelector(".catalogueBox");
const searchBar = document.querySelector(".search");
const inventory = [
    {
       name: "Medix 55",
       icon: "./Pictures/medix 55 pics.jpg" 
    }
];
function returnSearchResult(event) {
    event.preventDefault();
    const searchResult = inventory.filter((item) => {
        return item.name == searchBar("value")
    })
    catalogueBox.innerHTML = `
    <div>
        <img src="${searchResult[0].icon}" />
        <h2>${searchResult[0].name}</h2>
    </div>`
}

function redirectToproduct(id) {
    window.location.href = `./product.html?id=${id}`
}

productBox.innerHTML = inventory.map((item, id) => {
    return `
        <div onClick="redirectToproduct(${id})">
            <img src="${item.icon}"/>
            <h2>${item.name}</h2>
        </div>
    `
}).join("");
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 function processPayment() {
    if (screen.innerHTML <= 0) {
        statusBar.innerHTML = `<p style="color: red">Cannot Proceed with Payment</p>`
        return
    }
    transactionStatus.classList.add("show");
    for (index = 0; index < 3; index++) {
        transactionStatus.innerHTML += "Thank you!!"
    }
}

operatorKeys.forEach((operatorKey) => {
    operatorKey.addEventListener("click", handleClick)
})

makePayment.addEventListener("click", processPayment)