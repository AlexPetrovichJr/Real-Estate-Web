import {housingData} from './dataBase.js'
// console.log(housingData)
class HouseList {
    constructor(){
        this.list = [];
    }
    addProp(propToAdd){
        this.list.push(propToAdd);

    }
}

class Property {
    constructor(type, address, city, state){
        this.type = type;
        this.address = address;
        this.city = city;
        this.state = state;
        this.ele = document.body.querySelector('#propertyContainer');
        this.createCard = document.createElement('div');


    }
    renderHC(){
            this.ele.append(this.createCard);
            //create card element of data base
            //append card to container
            //return card
            //call card
    }
    
}
let house = new HouseList;
housingData.forEach((element,) => {
    const newProperty = new Property(element.Type, element.Address, element.City, element.State);
// console.log(newProperty);
    house.addProp(newProperty)
    newProperty.renderHC();
});
console.log(house.list)
