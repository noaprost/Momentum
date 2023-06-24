const quotes = [
    {
        quote : "if not now, then when?",
        author : "Anonymous"
    },
    {
        quote : "There is always some madness in love. But there is also always some reason in madness.",
        author : "Friedrich Nietzsche"
    },
    {
        quote : "If you would be loved, love and be lovable.",
        author : "Benjamin Franklin"
    },
    {
        quote : "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
        author : "Anonymous"
    },
    {
        quote : "The course of true love never did run smooth.",
        author : "William Shakespeare"
    },
    {
        quote : "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
        author : "Helen Keller"
    },
    {
        quote : "Try not to become a man of success but rather try to become a man of value.",
        author : "Albert Einstein"
    },
    {
        quote : "I find that the harder I work, the more luck I seem to have.",
        author : "Thomas Jefferson"
    },
    {
        quote : "Don't be afraid to give up the good to go for the great.",
        author : "John D. Rockefeller"
    },
    {
        quote : "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
        author : "Jim Rohn"
    }
]

const quote = document.querySelector(".quotes span:first-child")
const author = document.querySelector(".quotes span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author