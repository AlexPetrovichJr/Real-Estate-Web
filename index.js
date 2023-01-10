import {housingData} from './dataBase.js'
// console.log(housingData)
class HouseList {
    constructor(){
        this.list = [];
        this.delete = false;
    }
    addProp(propToAdd){
        this.list.push(propToAdd);

    }

}
// let counter = 0;

class Property {
    constructor(type, address, city, state){
        this.type = type;
        this.address = address;
        this.city = city;
        this.state = state;
        this.ele = document.body.querySelector('#propertyContainer');
        this.createCard = document.createElement('div');
        this.button = document.createElement('button');
        // this.buttonL = document.querySelector('.it');
        this.bText = document.createTextNode('delete');


    }
    
    renderHC(info){
        // this.list.forEach(() => {
        //     let newEle = document.body.querySelector('#propertyContainer');
        //     const newDiv = document.createElement('div');
        //     newDive.classlist.add('property')
        //     newDiv.innerText = `${this.list[i].Type} ${this.list[i].Address} ${}`

        // });
    
            this.ele.append(this.createCard);
            this.ele.lastChild.innerHTML=info;
            this.button.setAttribute('class', 'dButton');
            this.button.appendChild(this.bText);
            this.ele.lastChild.append(this.button);
            // counter += 1;
            // return counter;
            
            //create card element of data base
            //append card to container
            //return card
            //call card
    }
    
}
const dButton = document.querySelector('.dButton');

dButton.addEventListener('click', function(){

});




const sButton = document.querySelector(".submit");

sButton.addEventListener('click', function () {

let userType = document.querySelector('.type');
let userAdd = document.querySelector('.address');
let userCity = document.querySelector('.city');
let userState = document.querySelector('.state');



 let userHousing = {
    Type: userType.value, 
    Address: userAdd.value,
    City: userCity.value,
    State: userState.value, 
 };


housingData.push(userHousing);
// console.log(house.list);
//this will clear previous list of data
document.body.querySelector("#propertyContainer").innerHTML="";
//envokes the propertyBrother function to re-populate the list
propertyBrothers()

});





let house = new HouseList;

function propertyBrothers( ){

    housingData.forEach((element,) => {
    const newProperty = new Property(element.Type, element.Address, element.City, element.State);
// console.log(newProperty);
    house.addProp(newProperty)
    newProperty.renderHC();
//turns objects in housing data into a string
    let propToStr = `Type of Housing: ${element.Type}, Address: ${element.Address}, City: ${element.City}, State: ${element.State}`;
    console.log(propToStr);
//adds the string info as a argument for renderHC
    newProperty.renderHC(propToStr);

});

}
propertyBrothers()

console.log(house.list)

// console.log(housingData);