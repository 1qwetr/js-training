const msg_success = 'Заказ оформлен, с вами свяжется менеджер.';
const msg_failure = 'На складе недостаточно товаров';

const total = 100
const ordered = Number(prompt('Сколько товаров вам нужно?'));

console.log(ordered > total ? msg_failure : msg_success);
