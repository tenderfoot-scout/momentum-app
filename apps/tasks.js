// ----- TO-DO LIST -----

// Delete Item btn
let nodeList = document.getElementsByTagName('li');
for (i = 0; i < nodeList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = close;
  span.appendChild(txt);
  nodeList[i].appendChild(span);
}

// Deleting task
let close = document.getElementsByClassName('close');
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Mark as complete
let list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

// Add item
function addItem() {
    let item = document.createElement('li');
    let inputItem = document.getElementById('userInput').value;
    let createItem = document.createTextNode(inputItem);
    item.appendChild(createItem);
    if(inputItem === '') {
      alert('Cannot leave blank');
    } else {
      document.getElementById('toDoList').appendChild(item)
    }
    document.getElementById('userInput').value = '';
  
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    item.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

// MODAL
// Get DOM Elements
const modal = document.getElementById('modal-container');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.querySelector('close');

// Events

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


//functions of modal
function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}