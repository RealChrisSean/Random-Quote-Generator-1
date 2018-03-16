

//The below quotes variable is an array of objects that hold all the necessary data.
//The background & color properties hold the the values for both the background color and text color.
var quotes = [
  {
    quote:  'I can accept failure, everyone fails at something. But I cant accept not trying.',
    source: 'Michael Jordan',
    background: '#000',
    color: '#fff'
    },
    {
    quote:  'Its not whether you get knocked down. Its whether you get up.',
    source: 'Kevin Durant',
    background: 'red',
    color: '#fff'
    },
    {
    quote:  'Its not whether you get knocked down. Its whether you get up.',
    source: 'Kobe Bryant',
    background: 'blue',
    color: '#fff'
    },
    {
    quote: 'Success comes after you conquer your biggest obstacles and hurdles.',
    source: 'Stephen Curry',
    background: 'white',
    color: 'red'
    },
    {
    quote: 'I think team first. It allows me to succeed, it allows my team to succeed.',
    source: 'Lebron James',
    background: '#000',
    color: 'yellow'
    }
];

//getRandomQuote randomly picks a number between 1 * the amount of objects within the quotes array.
function getRandomQuote() {
  var randomLine = Math.floor( Math.random() * quotes.length);
  return(quotes[randomLine]);
}

var nIntervId;

//changeColor() changes the quotes, background color, and color on the page every 3 seconds.
function changeColor() {
  nIntervId = setInterval(printQuote, 3000);
}

//printQuote() prints the quote and changes the colors on index.html
function printQuote() {
var line = getRandomQuote();
var message = '';
var message =  '<p class="quote" style=color:' + line.color + ';>' + line.quote + '</p>';
    message += '<p class="source" style=color:' + line.color + ';> ' + line.source + '</p>';
    document.getElementById('quote-box').innerHTML = message;
    document.body.style.backgroundColor = line.background;
}
