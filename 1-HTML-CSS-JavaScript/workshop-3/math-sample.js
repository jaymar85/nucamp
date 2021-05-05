let coin = ['heads', 'tails'];

function game() {
    const index = Math.floor(Math.random() * coin.length);
    console.log(index)
    const target = coin[index];
    console.log(target)
}