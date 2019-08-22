// pyramide
n = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"))
function pyramid(n) {
  let result = '', str = ' ', add = '*';
  for (var i = 0; i < n; i++) {
    str += add;
    add = '*';
    if (!(i % 2)) result += str + '\n';
  }
  return result;
}
console.log(pyramid(n));
