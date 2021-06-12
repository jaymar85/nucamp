function drink(myString) {
    switch(myString) {
        case 'coffee':
        case 'soda': 
        case 'black tea':
            console.log('Contains caffeine');
            break;
        case 'lemonade':
            console.log('No caffeine');
            break;
        default: console.log('Drink not recognized');
    }
}

const yourDrink = drink("soda");
console.log(yourDrink);