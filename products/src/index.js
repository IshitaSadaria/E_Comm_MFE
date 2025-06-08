import faker from "faker";

let products = '';

for ( let i=0; i<3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;
// This code generates 3 random product names using Faker.js and displays them in the HTML element with id 'dev-products'.

