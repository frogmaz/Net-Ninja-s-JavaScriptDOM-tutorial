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
