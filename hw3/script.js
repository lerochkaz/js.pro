'use strict';

const productKey = 'product';
const reviewKey = 'review';

function addInfo(nameProduct, review) {
    const productArr = getProduct();
    productArr.push({product: nameProduct, review: review});
    saveProducts(productArr);
}
 
function getProduct() {
    const data = localStorage.getItem(productKey);
    if (data === null) {
        return [];
    } 
    return JSON.parse(data);    
}

function saveProducts(productArr) {
    const json = JSON.stringify(productArr); 
    localStorage.setItem(productKey, json);
}
