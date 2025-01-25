let quoteDataBase = [ //each represents a quote
    "When shall we meet again? In thunder, lightning, or in rain?",
    "I knew nothing but shadows and I thought them to be real.",
    "If you gaze long enough into an abyss, the abyss will gaze back into you",
    "Believe nothing you hear, and only one half of what you see",
    "No tears please, its a waste of good suffering",
    "Evil thencforeth became my good"
];

let authors = [ //respects the quotes
    '- Shakespeare, "Macbeth"',
    "- Oscar Wilde",
    "- Friedrich Nietzsche",
    "- Edgar Allen Poe",
    '- Pinhead, "Hellraiser"',
    '- Mary Shelley, "Frankenstein"'
];

window.onload = function() {
    countdownTimer();
    displayRandomQuotes();
}

function countdownTimer()  {
    let countDownDate = new Date("Jan 1, 2028 00:00:00").getTime();

    let x = setInterval(function() {
        //get todays date and time
        let now = new Date().getTime(); 
        let distance = countDownDate - now;

        //calculations for days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //display results
        document.getElementById("countdown").innerHTML = days + ":" +
            hours + ":" + minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Agony"
        }
    }, 1000); //1000 ms update
}

function displayRandomQuotes() {
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0) {
        document.getElementsByClassName("quotes")[0].innerText = quoteDataBase[0];
        document.getElementsByClassName("author")[0].innerText = authors[0];
    } else if (randomNum == 1) {
        document.getElementsByClassName("quotes")[0].innerText = quoteDataBase[1];
        document.getElementsByClassName("author")[0].innerText = authors[1];
    } else if (randomNum == 2) {
        document.getElementsByClassName("quotes")[0].innerText = quoteDataBase[2];
        document.getElementsByClassName("author")[0].innerText = authors[2];
    } else if (randomNum == 3) {
        document.getElementsByClassName("quotes")[0].innerText = quoteDataBase[3];
        document.getElementsByClassName("author")[0].innerText = authors[3];
    } else if (randomNum == 4) {
        document.getElementsByClassName("quotes")[0].innerText = quoteDataBase[4];
        document.getElementsByClassName("author")[0].innerText = authors[4];
    } else if (randomNum == 5) {
        document.getElementsByClassName("quotes")[0].innerText = quoteDataBase[5];
        document.getElementsByClassName("author")[0].innerText = authors[5];
    }
}
