const quotes = [
    {
        quote:"When you reach the end of your rope, tie a knot in it and hang on.",
        author:"- Franklin D. Roosevelt -",
    },
    
    {
        quote:"You will face many defeats in life, but never let yourself be defeated. ",
        author:"- Maya Angelou -",
    },
    
    {
        quote:"Keep smiling, because life is a beautiful thing and there's so much to smile about.",
        author:"- Marilyn Monroe -",
    },
    {
        quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author:"- Oprah Winfrey -",
    },
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"- Nelson Mandela -",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: " - Walt Disney -",
    },
    
        
];

const quote = document.querySelector('.quote div:first-child');
const author = document.querySelector('.quote div:last-child');

const todayQoute = quotes[Math.floor(Math.random() * quotes.length )]; 

quote.innerText = todayQoute.quote;
author.innerText = todayQoute.author;