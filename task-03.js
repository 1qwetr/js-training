const ADMIN_PASSWORD = 'test123';
const password = prompt('Password: ');
let message = 'Доступ запрещён, неверный пароль';

if (password === null) {
  message = 'Отменено пользователем!';
}
if (ADMIN_PASSWORD === password) {
  message = 'Добро пожаловать!';
}

alert(message);
