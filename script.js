//1------------------------------
/*
let Arr = [7,9,3,4,5];
for(let i = 0; i < Arr.length; i++) {
    document.write (Arr[i] + '\n');
   }
*/
//2------------------------------
/*
let Arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = 0; i < Arr.length; i++) {
    if (Arr[i] >= -10 && Arr[i] <= -3){
 document.write (Arr[i] + '\n');
    }
   }
*/
//3------------------------------
/*
let Arr = [];
let result = 0;
for (let i = 23; i <= 57; i++) {
    Arr.push (i);
    result =+ result+i;
}
console.log(Arr);
console.log('Сумма элементов в массиве: '+result);

let Arr2 = [];
let i = 23;
while(i >= 23 && i <= 57 ) {
    i++;
    Arr2.push (i-1);
}
console.log(Arr2);
*/
//4------------------------------
/*
let ArrString = ['10', '20', '30', '50', '235', '3000'];

for(let i=0; i<ArrString.length; i++){
    if (ArrString[i].charAt(0) == 1 ) {
        console.log(ArrString[i]);
        }
    if (ArrString[i].charAt(0) == 2 ) {
        console.log(ArrString[i]);
        }
    if (ArrString[i].charAt(0) == 5 ) {
        console.log(ArrString[i]);
        }
}
*/
//5------------------------------
/*
let Days = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
for (let i = 0; i < 5; i++) {
    console.log(Days[i]);
}
for(let j = 5; j <=6; j++) {
    console.log( '%c%s', 'color: black; font-weight:bold; font: 1.5rem/1; ', Days[j]);
}
*/
//6------------------------------
/*
let Random = ['ПН',3,-7,77,true,undefined];
Random.push('T')
console.log(Random);
for (let i = Random.length-1; i <Random.length; i++){
   console.log('последний элемент масива '+'"'+Random[i]+'"'); 
}
*/
//7------------------------------
/******************
let Array = [];



while(true) {
let a = +prompt('Введите числа');
   
    if (a === null && typeof a === "undefined"){ 
        console.log(typeof a);
   
    } else {Array.push(a); 
        console.log(Array);

    }
}




    */