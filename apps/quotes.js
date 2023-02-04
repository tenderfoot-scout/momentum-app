const quoteModal = document.getElementById('quote-modal-container');
const openQuoteModalBtn = document.getElementById('open-quote-modal');
const closeQuoteModalBtn = document.querySelector('.close-quote-modal');
let emptyInputAlert = document.getElementById('empty-alert');
let quotes = '';

const quoteList = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : [
  "May the force be with you",
  "You know nothing, Jon Snow",
   "You're a wizard, Harry"
]
console.log(quoteList);

function generateQuote() {
  var randomNum = Math.floor(Math.random() * (quoteList.length));
  document.getElementById('quote-display').innerHTML = quoteList[randomNum];
}

document.querySelector(".add-quote-btn").addEventListener("click", event => {
  const quoteInput= document.querySelector("#quote-input");
  addQuote(quoteInput);
})

function addQuote(quoteInput) {
  if (quoteInput.value !== "" && quoteInput.value !== " ") {
    quoteList.push(quoteInput.value);
    localStorage.setItem('quotes', JSON.stringify(quoteList));
    location.reload();
    //quoteModalClose;
  } else {
    emptyInputAlert.style.display = 'inline';
  }
}

// MODAL FUNCTIONS

openQuoteModalBtn.addEventListener('click', quoteModalOpen);
closeQuoteModalBtn.addEventListener('click', quoteModalClose);

function quoteModalOpen() {
  quoteModal.style.display = 'block';
}

function quoteModalClose() {
  quoteModal.style.display = 'none';
}