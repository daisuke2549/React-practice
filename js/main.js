//アロー関数

let getTriangle = (base, height)  => {     //=>を使って関数を記述する
     return base * height / 2;  
};

console.log('三角形の面積は' + getTriangle(500,2));//三角形の面積は10



let sum = (a,b) => {
    return a+b+120;
}

console.log(sum(100,340));


function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(5));