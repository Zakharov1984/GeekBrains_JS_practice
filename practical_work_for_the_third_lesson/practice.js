/* //Задание №1________________________________________________________________________________________
for(let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 !== 0) {
        console.log(`${i} - нечетное число`);
    } else {
        console.log(`${i} - четное число`);
    }

}
 */
/* //Задание №2________________________________________________________________________________________

const post = { 
    author: "John", //вывести этот текст
    postId: 23,
    comments: [ 
        { 
            userId: 10,
            userName: "Alex", 
            text: "lorem ipsum", 
            rating: { 
                likes: 10, 
                dislikes: 2 //вывести это число 
            }   
        }, 
        { 
            userId: 5, //вывести это число 
            userName: "Jane", 
            text: "lorem ipsum 2", //вывести этот текст 
            rating: { 
                likes: 3, 
                dislikes: 1 
            } 
        }, 
    ] 
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text); */

//Задание №3________________________________________________________________________________________

/* const products = [ 
    { id: 3, price: 200, },
    { id: 4, price: 900, }, 
    { id: 1, price: 1000, }, 
];

for (let i = 0; i < products.length; i++) {
    products[i].price =  products[i].price - (products[i].price / 100 * 15); 
    console.log(`Здравствуйте,егодня у нас распродажа, а значит товар ${products[i].id} будет стоить сегодня со скидкой 15% - ${products[i].price}`);
} */

//Задание №4________________________________________________________________________________________
//Задача 4.1__
/* const products = [
     { id: 3, price: 127, photos: [ "1.jpg", "2.jpg", ] }, 
     { id: 5, price: 499, photos: [] }, 
     { id: 10, price: 26, photos: [ "3.jpg" ] }, 
     { id: 8, price: 78, }, 
];

let sortingIMG = products.filter(function(image){    
    if (image.hasOwnProperty('photos')) { // делаем проверку, есть ли свойство photos в объекте.
        if (image.photos.length != 0){ // делаем проверку на пустой массив.
            return true;
        }
    }
    return false;
});

console.log(sortingIMG); */

//Задача 4.2__

const products = [
    { id: 3, price: 127, photos: [ "1.jpg", "2.jpg", ] }, 
    { id: 5, price: 499, photos: [] }, 
    { id: 10, price: 26, photos: [ "3.jpg" ] }, 
    { id: 8, price: 78, }, 
];

let sortingPrice = products.sort(function(number1, number2) { // это задание подсмотрел
    return number1.price - number2.price;
});

console.log(sortingPrice);



//Задание №6________________________________________________________________________________________

/* let elementX = 'x';
let totalRock = '';
for (let i = 0; i <=20; i++) {
    totalRock = totalRock + elementX;
    console.log(totalRock);
} */


