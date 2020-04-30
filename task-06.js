let total = 0;
let current;

while( current = prompt('Number: ') ) {
  current = Number(current);
  if( isNaN(current) )
    continue;
  total += current;
}

alert(`Общая сумма чисел равна ${total}`);
