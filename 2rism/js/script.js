'use strict'

const tabItem = document.querySelectorAll('.nav-list__link');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('nav-list__link--active');
    });

    tabTarget.classList.add('nav-list__link--active');
}

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(evt){
    evt.preventDefault();
    popup.classList.toggle("open");
    renderPopup();
}

function renderPopup(){
    popup.appendChild(menu);
}

customSelect('Select');

const picker = new easepick.create({
    element: "#date",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
    ],
    zIndex: 10,
    grid: 1,
    calendars: 1,
})

