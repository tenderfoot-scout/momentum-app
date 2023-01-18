//----- RANDOM QUOTE GENERATOR -----
//Generate random quote
var quotes = [
    'May the force be with you', 'You know nothing, Jon Snow', "You're a wizard, Harry"
  ]
  
  function newQuote() {
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote-display').innerHTML = quotes[randomNum];
  }
  
  //Add new quote
  function addQuote() {
    var quotePrompt = prompt('Enter your new quote:', '');
    if (quotePrompt == null || quotePrompt == "") {
      alert('user cancelled quote prompt');
    } else {
      quotes.push(quotePrompt);
      console.log(quotes);
    }
  }