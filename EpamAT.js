let car = {
    color: "черный",
    power: function () {
        console.log("Мощность двигателя");
    }
};
car.color = "зеленый";
//console.log(car.color);
car.power();


function sum(груши, яблоки) {
    return (груши + яблоки);
}
let result = sum(4, 5);
console.log(result);


function nameChacker(checkName) {
    if (checkName == 'Aleks') {
        console.log('Привет Aleks');
    } else {
        console.log('Нет такого имени');
    }
}
nameChacker('Aleks');

function typeArg (arg){
    console.log(typeof(arg));
}
typeArg('argument');

function simpleNum(num) {
    result = true;
    if (num <= 1) {
        result = false;
    }else{
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            result = false;
            break;
        }
    }
}
    console.log(result);
}
simpleNum(1);