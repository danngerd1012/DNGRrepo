// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [ //store info
    {
        quote: "The best way to get approval is not to need it.",
        source: "Hugh Macleod",
        cite: "How to be Creative 27",
        date: "08-22-04"
    },
    {
        quote: "But thus do I counsel you, my friends: distrust all in whom the impulse to punish is powerful!",
        source: "Friedrich Nietzche",
        cite: "Also Sprach Zarathustra",
        date: "1883"
    },
    {
        quote: "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
        source: "Gertrude Stein",
        cite: "Everybody\'s Autobiography",
        date: '1937'
    },
    {
        quote: "If our house be on fire, without inquiring whether it was fired from within or without, we must try to extinguish it",
        source: "Thomas Jefferson",
        cite: "letter to James Lewis, Jr",
        date: "May 9, 1798"
    },
    {
        quote: "Humor is everywhere, in that there\'s irony in just about anything a human does.",
        source: "Bill Nye",
        cite: "Interview with Wired.com",
        date: "Apr 2005"
    },
    {
        quote: "The length of a film should be directly related to the endurance of the human bladder",
        source: "Alfred Hitchcock",
        cite: "In Simon Rose, Classic Film Guide",
        date: "1995"
    },
    {
        quote: "The reason we all like to think so well of others is that we are all afraid for ourselves. The basis of optimism is sheer terror",
        source: "Oscar Wilde",
        cite: "The Picture of Dorian Gray",
        date: "1891"
    },
    {
        quote: "It\'s not that I\'m afraid to die, I just don\'t want to be there when it happens",
        source: "Woody Allen",
        cite: "Without Feathers",
        date: "1976"
    },
    {
        quote: "'Wrong' is one of those concepts that depends on witnesses.",
        source: "Scott Adams",
        cite: "Dilbert",
        date: "11-05-09"
    },
    {
        quote: "Wish not so much to live long as to live well.",
        source: "Benjamin Franklin",
        cite: "Poor Richard\'s Almanac",
        date: "1738"
    },
    {
        quote: "The Argument from Intimidation is a confession of intellectual impotence",
        source: "Ayn Rand",
        cite: "The Virtue of Selfishness",
        date: "1964"
    },
    {
        quote: "The best way to get people to like you is not to like them too much.",
        source: "John Greene",
        cite: "An Abundance of Katherines",
        date: "2008"
    },
    {
        quote: "The belief in a supernatural source of evil is not necessary; men alone are quite capable of every wickedness.",
        source: "Joseph Conrad",
        cite: "Under Western Eyes",
        date: "1911"
    },
    {
        quote: "I daresay one profits more by the mistakes one makes off one\'s own bat than by doing the right thing on somebody\'s else advice.",
        source: "W. Somerset Maugham,",
        cite: "Of Human Bondage",
        date: "1915"
    },
    {
        quote: "A bore is a man who, when you ask him how he is, tells you.",
        source: "Bert Leston Taylor",
        cite: "The So-Called Human Race",
        date: "1922"
    }
];
//declare variables
var message = ' ';
//function to select the HTML element to which the object will be printed
function print(message) {
    var outputDiv = document.getElementById('quoteBox');
    outputDiv.innerHTML = message;
}
//selects random object from the array
function getRandomQuote() {
    var quoteData = quotes[Math.floor(Math.random() * quotes.length)];
    return quoteData;
}
//Create function calls the getRandomQuote function and adds tags to the strings so that they can be displayed by the HTML page
function printQuote() {
    var printData = getRandomQuote();
    message += '<p class="quote">' + printData.quote + '</p>';
    message += '<p class="source"><span>' + printData.source + '</span>';
    message += '<span class="citation">' + printData.cite + '</span>';
    message += '<span class="year">' + printData.date + '</span></p>';
    print(message);
    //prints to HTML
    message = '';
    //clears the message so that the quotes do not continue to stack
}