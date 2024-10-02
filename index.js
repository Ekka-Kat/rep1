const userAge = "16";
if (userAge>18) {
console.log ('Пользователю больше 18 лет');
} else if (userAge == 18) {
    console.log ('Пользователю 18');
} else {console.log ('пользователю меньше 18')}

//тернарный оператор
const isUserAge = (userAge>=18) ? 18 : 'не 18';
console.log(isUserAge);

//let t1 = -31

//if (t1<-30) {
 //   console.log ('Оставатесь дома');
//} else console.log ('Можно выйти');

let t1 =-31
if (-30<t1<=-10)
{console.log ('Сегодня холодно');}
else if (t1<-30)  {console.log ('Сегодня слишком холодно');}
else console.log ('сегодня не очень холодно')

//---------------------------------------//
console.log (null||0||""||undefined);
//----------------------------------------//
for (let i = 0; i<10; i++) {
    console.log('Я строка')
}