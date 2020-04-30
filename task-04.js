let balance = 23580;
const pricePerDroid = 3000;

let need = prompt('Сколько дроидов вам нужно?');

if( need === null ) {
  console.log('Отменено пользователем!');
  throw new Error;
}

need = Number(need);
if( isNaN(need) || need <= 0 ) {
  throw new Error;
}

const totalPrice = need * pricePerDroid;

if( totalPrice > balance ) {
  console.log('Недостаточно средств на счету!');
  throw new Error;
}

balance -= totalPrice;

console.log(`Вы купили ${need} дроидов, на счету осталось ${balance} кредитов`);
