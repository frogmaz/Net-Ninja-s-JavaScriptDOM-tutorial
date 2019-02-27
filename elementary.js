var btns = document.querySelectorAll('#listContainer .delete');
//sa All selektorom prikupljam svu dugmad u html kolekciju
btns.forEach(function(btn){
  //u kolekciji svakom dugmetu dodajem po "osluškivač klika" za koji je prikačena funkcija
  btn.addEventListener('click', function(){ //klik je okidač funkcije
    const li = this.parentElement;  //"this" upućuje čvor koji je trenutno predstavljen "btn" imenom (jedan od dugmića s klasom ".delete") i u odnosu na čiju poziciju se nalazi nadelement
    //lokacija nadelementa se čuva u konstanti "li"
    li.parentElement.removeChild(li);
    //pošto brisanje može da se radi samo iz nadelementa, moramo naći nadelement lokacije koja se čuva u konstanti "li" da bismo obrisali njegov podelement
  })
})

console.log(btns);
