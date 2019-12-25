
// let str = prompt('Введите строку', 'шалаш');

// function che (str) {
//   return str == str.split('').reverse().join('');
// }

// if ( che (str) ) {
//   alert("Строка палиндром");
// } else {
//   alert("Строка НЕ палиндром");
// } 

/* Вариант б */
// let str = prompt('Введите строку', 'шалаш');

// function fastestIsPalindrome(str) {
//   let len = Math.floor(str.length / 2);
   
//     for (let i = 0; i < len; i++) {
//     //   console.log(str[str.length - i - 1]);
//       if (str[i] !== str[str.length - i - 1])
//         return false;
//     return true;
//   }
// }

// if ( fastestIsPalindrome(str) ) {
//   console.log("Строка палиндром");
// } else {
//   console.log("Строка НЕ палиндром");
// }  



/* ЗАДАНИЕ №2 */
/* function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
} */

/* Вариант с ? */
/* function min(a, b) {
  return a < b ? a : b;
} */


/* ЗАДАНИЕ №3 */

// let arr = [];

// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max - min);
//   return Math.round(rand);
// }

// for (let i=0; i<10; i++) {
//   arr.push(randomInteger(0, 100));
// }


// for (let i=0; i<arr.length; i++) {
//   if ( String(arr[i]).includes("0", 0) ) {

//     let smallArr = String(arr[i]).split("");

//     for (let i=0; i<smallArr.length; i++) {
//       if ( smallArr[i] == 0 ) {
//         smallArr.splice(i, 1, "zero");
//       }
//     }
//     arr[i] = smallArr.join("");
//   }
// }

// console.log(arr);



// function solution() {
//     let list = [], i;
    
//     for (i = 0; i < 10; i++) {
//     list.push(Math.floor(Math.random() * 101));
//     }
    
//     for (i = 0; i < list.length; i++) {
//     if (list[i] == 0) {
//     list[i] = 'zero';
//     }
//     console.log(i + ': ' + list[i]);
//     }
//     }
//     solution();

let show = function(state){
  document.getElementById('modalForm').style.display = state;
  document.getElementById('filter').style.display = state;
}



$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.elementor-menu').toggleClass('active');
        
    });
});


