import faker from "faker";

const mount = (el) => {

    let products = '';

for ( let i=0; i<3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}

el  .innerHTML = products;
// This code generates 3 random product names using Faker.js and displays them in the HTML element with id 'dev-products'.

}


//context / situation 1:
//we are running this file in development  in insolation, 
//we are using local index.html file,
// which definitely has eleement with id dev-products
//we want to immediately render our app into that element
if( process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products');

    //assuming our container app does have an element with id dev-products
    if (el) {
        // we are running this file in isolation
        mount(el);
    }
}




//context / situation 2:
//we are running this file in development or production, through container app,
// No gurantee that an element with id dev-products exists
//we do not want immediately render our app 



export { mount };