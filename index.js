'use strict';

const btnEl = document.querySelector('.btn');
const inputNameEl = document.querySelector('.nameProduct');
const inputReviewEl = document.querySelector('.review');

btnEl.addEventListener('click', () => {
    if(inputNameEl.value==="" || inputReviewEl.value===""){
        throw new Error("Поля не заполнены");
    }
    addInfo(inputNameEl.value, inputReviewEl.value); 
    inputNameEl.value="";
    inputReviewEl.value="";
});





