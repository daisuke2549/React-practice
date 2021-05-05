// //アロー関数

// let getTriangle = (base, height)  => {     //=>を使って関数を記述する
//      return base * height / 2;  
// };

// console.log('三角形の面積は' + getTriangle(500,2));//三角形の面積は10



// let sum = (a,b) => {
//     return a+b+120;
// }

// console.log(sum(100,340));


// function getRandomInt(max){
//     return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(5));


// var number = 22;

// number++;


// console.log(number);


// // for(var i = 0; i <100; i++){
// //     console.log(i);
// // }


// //オブジェクト
// //データと機能をまとめたもの
// //プロパティ
// //オブジェクト内のデータ

// //メソッド
// //オブジェクトの機能に相当

// let sasaki = {
//     name: "佐々木", //プロパティ
//     age: 29,
//     occupation: "Webエンジニア"  //メソッド
// };


// console.log(sasaki.age);




// import youtuber from "./foo.js";

// youtuber.plan
// youtuber.list


let youtuber  ={
    list:{  //プロパティ
        business: {
        youtuber: [
            {name: "しまぶー", age:20, teachprogramming(){}},
            {name: "あっちゃん", age:34, teachhisttory(){}},
        ],
        teach(){} 
    },
    entertainment: {
        youtuber: [{name: "ヒカキン"}, {name:"はじめ君"}],
        makeSmile(){}
    }
    },
    plan(){},    //メソッド
    uploadVideo(){}  //メソッド
};

window.console.log(1+2+3);

window.alert("警告メッセージです");


window.document.getElementById()