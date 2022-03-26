let NowAge_2 = (a,y) => {
    y = prompt('Текущий год');
    a = prompt('Год Рождения');
    let z = y - a;
    console.log(z);
}
NowAge_2();

let timer = 0;
const intervalId = setInterval(() => {
    console.log('Hello World');
    timer += 1;
    if (timer === 5) {
        console.log('Done');
        clearInterval(intervalId);
    }
}, 1000);
