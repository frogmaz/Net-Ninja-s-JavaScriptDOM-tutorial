
// selektovanje svog sadrzaja za postavljenom "adresom" u zagradi
// da sam koristio querySelector (bez All) uzeo bi samo prvi element sa ove adrese
var cards = document.querySelectorAll("#listContainer li .name");
console.log(cards);

//dodavanje tekstualnog HTML sadrzaja
cards.forEach(function(card){
  card.textContent += " (jest, jest)";
})

//dodavanje celog HTML elementa
const cardList = document.querySelector('#listContainer ul');
cardList.innerHTML += "<p> NEMA NITA </p>";

//čvorovi unutar DOM-a
const container = document.querySelector("#container");
console.log(container.nodeType); //tip, odnosno nivo, čvora
console.log(container.nodeName); //pod kojim imenom html elementa stoji ovaj čvor
console.log(container.hasChildNodes()); //sadrži ili ne sadrži podelemente

// kopiranje kontejnera
// u zagradi TRUE da bi se kopirao CEO čvor sa svim svojim podelementima
const clonedContainer = container.cloneNode(true);
console.log(clonedContainer);
