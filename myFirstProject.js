"use strict";

let destinations = randomDes(['Dallas, TX', 'Fort Worth, TX', 'Granbury, TX', 'Denton, TX'])
let restaurants = randomRes(['Taco Bell', 'Whataburger', 'Chicken Express', 'McDonalds'])
let transportations = randomTran(['uber', 'car', 'train', 'motorcycle'])
let entertainments = randomEnt(['zoo', 'lake', 'aquarium', 'mueseum'])


function randomDes(destination){
    let i = Math.floor(Math.random() * destination.length);
    return destination[i];
}

console.log(destinations);

function randomRes(restaurant){
    let i = Math.floor(Math.random() * restaurant.length);
    return restaurant[i];
}
console.log(restaurants);

function randomTran(transportation){
    let i = Math.floor(Math.random() * transportation.length);
    return transportation[i];
}
console.log(transportations);

function randomEnt(entertainment){
    let i = Math.floor(Math.random() * entertainment.length);
    return entertainment[i];
}
console.log(entertainments);

let areYouSure;
areYouSure = prompt("How do you like this trip? Type Yes or No")

    if(areYouSure === "Yes"){
        alert("Trip complete! You took a " + transportations + " to " + destinations + " and ate at " + restaurants + ". You also visted the " + entertainments + "!")
    }
    else if(areYouSure === "No"){
        window.location.reload(true); 
    }
         




