function drink(myString) {

    if (myString === 'coffee') {
        console.log('Contains caffeine');
    } else if (myString === 'black tea') {
        console.log('Contains caffeine');
    } else if (myString === 'soda') {
        console.log('Contains caffeine');
    } else if (myString === 'lemonade') {
        console.log('No caffeine');
    } else {
        console.log('Drink not recognized');
    }
}

drink('soda')
