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

for (let i = 1;   i <  10; i++){
    console.log(i);
}


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

// window.alert("警告メッセージです");


// window.document.getElementById()


// function isTweetable(text){
//     return text.length <= 140;
// };


//匿名関数 =関数がなくても動く

const isTweetable   = function isTweetable(text){
    return text.length <= 140;
};

console.log(isTweetable("foo"));


function alertTweetable(text){
    if (isTweetable(text)){
       console.log("you can tweet!");
    }
};

function unfollow(){
    console.log("フォローを外しましたか");
}

function cancelTweet(){
    console.log("ツイートをキャンセルしました");
}

function confirmed(fn){
    if(window.confirm("実行しますか")){
        fn();
    }
}

// confirmed(unfollow);


var score = 40;
var score = 1000;

console.log(score);


const obj = {
    foo:123
}

console.log(obj.foo)

obj.foo = 456;

console.log(obj.foo);

//関数とは？　⇨ タスクや値計算を実行する文の集まり
//オブジェクトのメソッドが関数


