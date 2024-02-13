const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const autorText = document.getElementById('autor')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')


//show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loading
function complete() {
  quoteContainer.hidden = false
  loader.hidden = true
}

// get quote from api 
let apiQuote = [];

// show quote 
 function newQuote(){
  loading()
  const quote = apiQuote [Math.floor(Math.random() * apiQuote.length)]
  // To check if autor field is unknow 
  if (quote.autor = null) {
    autorText.textContent = 'Unknown';
  }else {
    autorText.textContent = quote.author;
  }

  // check if quote length to determine styling
  if (quote.text.length > 50) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // set quote and hide the loader
  complete()
  quoteText.textContent = quote.text;
  console.log(quote);
 }

async function getQuote(){
  loading()
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
       const response = await fetch(apiUrl);
       apiQuote = await response.json();
       newQuote()
    }catch(error) {
        // catch error here
    }

}

// Tweet function
 function tweetQuote () {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${autorText.textContent}`;
    window.open(twitterUrl, '_blank')
 }

 // Event listeners
 newQuoteBtn.addEventListener('click', newQuote);
 twitterBtn.addEventListener('click', tweetQuote);


// on load 
getQuote();
// loading()
