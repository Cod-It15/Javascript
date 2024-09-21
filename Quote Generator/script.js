let quote_list = [
    ' Life is not about finding yourself. It is about creating yourself.',
    'The best way to predict the future is to invent it',
    'Believe you can and you are halfway there. - Theodore Roosevelt',
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    'If you can not explain it to a six year old, you do not understand it yourself. - Albert Einstein',
    'The only impossible journey is the one you never begin. - Tom Sawyer',
    'Do not watch the clock; do what it does. Keep going. - Sam Levenson',
    'You miss 100% of the shots you do not take - Wayne Gretzky',
    'You are never too old to set another goal or to dream a new dream.- C.S. Lewis',
    'The biggest risk is not taking any risk... - Mark Zuckerberg',
    'Do something today that your future self will thank you for. - Ayaan',
     'You do not have to be great to start, but you have to start to be great - Zig Ziglar'
]
let random_index = Math.floor(Math.random()*10)


let btn = document.getElementById('btn')




btn.addEventListener(click(getRandomQuote))
