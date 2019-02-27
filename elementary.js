//sa All selektorom prikupljam svu dugmad u html kolekciju
var btns = document.querySelectorAll('#listContainer .delete');
//u kolekciji svakom dugmetu dodajem po "osluškivač klika" za koji je prikačena funkcija
btns.forEach(function(btn){
  btn.addEventListener('click', function(){ //klik je okidač funkcije
    this.parentElement.remove(); //jednostavnije
  })
})

console.log(btns);
