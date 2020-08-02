function writeCards(names, event) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    result.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return result;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}