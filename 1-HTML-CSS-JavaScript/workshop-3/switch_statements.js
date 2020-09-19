function drink(myString) {
    switch(myString) {
        case 'coffee':
            console.log('Contains caffeine');
            break;
        case 'black tea':
            console.log('Contains caffeine');
            break;
        case 'soda':
            console.log('Contains caffeine');
            break;
        case 'lemonade':
            console.log('No caffeine');
            break;
        default: console.log('Drink not recognized');
    }
}

drink("soda")
