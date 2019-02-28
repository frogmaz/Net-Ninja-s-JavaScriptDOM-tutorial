const omotStavki =document.querySelector('#listContainer ul');

//delete notes
omotStavki.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentElement.removeChild(li);
  }
})

//add notes
const dodajStavku = document.forms['addNote'];

dodajStavku.addEventListener('submit',function(e){
  e.preventDefault();
  const upis = dodajStavku.querySelector('input[type="text"]').value;
  console.log(upis);

  //empty notes not allowed
  if(upis == ''){
    const obavestenje = document.querySelector('#popup');
    obavestenje.style.opacity = '1';
    return;
  }else{
    const obavestenje = document.querySelector('#popup');
    obavestenje.style.opacity = '0';
  }

  //create elements
  const li =document.createElement('li');
  const liName =document.createElement('span');
  const deleteBtn =document.createElement('span');

  //add content
  deleteBtn.textContent = 'Бриши';
  liName.textContent = upis;

  //add classes
  liName.classList.add('name');
  deleteBtn.classList.add('delete'); // .remove() za brisanje

  //append to document
  li.appendChild(liName);
  li.appendChild(deleteBtn);
  omotStavki.appendChild(li);

  //removing typed text
  dodajStavku.querySelector('input[type="text"]').value = '';

})

//hide notes
const skrijListu = document.querySelector('#hide');

skrijListu.addEventListener('change',function(e){
  if(skrijListu.checked){
    omotStavki.style.maxHeight = "0";
  } else{
    omotStavki.style.maxHeight = "260px";
  }
});

//custom search filter
const pretraga = document.forms['search'].querySelector('input');

pretraga.addEventListener('keyup',function(e){
  const trag = e.target.value.toLowerCase();
  const stavke = omotStavki.getElementsByTagName('li');
  Array.from(stavke).forEach(function(stavka){
    const sadrzaj = stavka.firstElementChild.textContent;
    if(sadrzaj.toLowerCase().includes(trag)){
      stavka.style.display = 'flex';
    } else {
      stavka.style.display = 'none';
    }
  })
})
