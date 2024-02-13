const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const autorText = document.getElementById('autor')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

// get quote from api 
let apiQuote = [];

// show quote 
 function newQuote(){
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
  quoteText.textContent = quote.text;
  console.log(quote);
 }

async function getQuote(){
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