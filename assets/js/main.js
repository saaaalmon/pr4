'use strict'
//задание 1
let a = +prompt('число a');
let b = +prompt('число b');
for(let i=a; i<=b; i++){
if(i %2 !== 0) continue;
alert(i);
}
// задание 2
let i = 0;
while(i<3){
    alert(`number ${i}`); i++
}
// Задание 3

let num = +prompt('Введите число больше 10');
for(; num<10;) {
    let num = +prompt('Введите число еще раз'); if (num>10) break
}

// Задание 4

function min(a, b){
    if (a<b)
        alert(a)
    else alert(b)
} min(12,4)


// Задание 5

let ask = (question,yes, no)=>{
     if (confirm(question)) yes()
    else no()
};

  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );
  

// Задание 6
checkAge (+prompt('Склько вам лет'))

function checkAge(age) {
    (age >= 18) ?  true :  confirm('Родители разрешили?')
}
