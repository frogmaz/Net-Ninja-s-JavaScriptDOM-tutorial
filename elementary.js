
var cards = document.querySelectorAll("#listContainer li .name");
console.log(cards);

var m = 1;
cards.forEach(function(card){
  card.textContent = 'budala ' + m;
  m++;
})

console.log(Array.from(cards));
