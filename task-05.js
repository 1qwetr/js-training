const country = prompt('Из какой вы страны?');
let price = -1;

if( country === null ) {
  throw new Error;
}

switch( country.toLowerCase() ) {
  case 'китай':
    price = 100;
    break;
  case 'чили':
    price = 250;
    break;
  case 'австралия':
    price = 170;
    break;
  case 'индия':
    price = 80;
    break;
  case 'ямайка':
    price = 120;
    break;
}

alert(price > 0 ? `Доставка в ${country} будет стоить ${price} кредитов.` : 'В вашей стране доставка не доступна.');
