function newQuote(){
    let quoteArray = [`"Where there is a way, there is a will." <br/>– Will`,
    `"The Best Way To Get Started Is To Quit Talking And Begin Doing." <br/>– Walt Disney`,
    `"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty." <br/>– Winston Churchill`,
    `"Don\'t Let Yesterday Take Up Too Much Of Today." – Will Rogers`,
    `"You Learn More From Failure Than From Success. Don\’t Let It Stop You. Failure Builds Character." <br/>– Unknown`,
    `"It\’s Not Whether You Get Knocked Down, It\’s Whether You Get Up." <br/>– Vince Lombardi`,
    `"Nothing is impossible, the word itself says \“I\’m possible\”\!" <br/>– Audrey Hepburn`,
    `"Perfection is not attainable, but if we chase perfection we can catch excellence."<br/>– Unknown`,
    `"If you look at what you have in life, you\’ll always have more. If you look at what you don’t have in life, you\’ll never have enough." <br/>– Oprah Winfrey"`,
    `"I can\’t change the direction of the wind, but I can adjust my sails to always reach my destination." <br/>– Jimmy Dean`,
    `"Believe you can and you\’re halfway there." `,
    `"Too many of us are not living our dreams because we are living our fears." `,
    `"Whatever the mind of man can conceive and believe, it can achieve."`,
    `"Strive not to be a success, but rather to be of value. -- Albert Einstein"`,
    `"The most difficult thing is the decision to act, the rest is merely tenacity." <br/>– Amelia Earhart`,
    `"Teamwork is the fuel that allows common people to attain uncommon results." <br/>– Andrew Carnegie`,
    `"Change your thoughts and you change your world." <br/>– Norman Vincent Peale`,
    `"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." <br/>– William James`,
    `"You can\’t finish the creativity within. The more you use, the more you have." <br/>– Maya Angelou`,
    `"Everything has beauty, but not everyone can see it." <br/>– Confucius`,
    `"Nothing will work unless you do." <br/>– Maya Angelou`,
    `"What we achieve inwardly will change outer reality."`,
    `"The only person you are destined to become is the person you decide to be." <br/>– Ralph Waldo Emerson`
    ];
    let randomNum = Math.floor(Math.random() * quoteArray.length);
    document.getElementById('quoteDisplay').innerHTML = quoteArray[randomNum];
}

