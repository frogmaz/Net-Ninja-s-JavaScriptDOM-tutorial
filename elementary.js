const omotStavki =document.querySelector('#listContainer ul');
//delete cards
omotStavki.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentElement.removeChild(li);
  }
})

//add cards
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
  deleteBtn.classList.add('delete');

  //append to document
  li.appendChild(liName);
  li.appendChild(deleteBtn);
  omotStavki.appendChild(li);

})
