let words = [];
let selectedWord = "";
let selectedWordMeaning = "";
let guessed = [];

let wrongGuesses = 0;
let maxWrong = 6;

let currentAudio = null;
let listenUsed = false;
let gameOver = false;


const alphabet = [
"a","á","à","ả","ã","ạ",
"ă","ắ","ằ","ẳ","ẵ","ặ",
"â","ấ","ầ","ẩ","ẫ","ậ",
"b","c","d","đ",
"e","é","è","ẻ","ẽ","ẹ",
"ê","ế","ề","ể","ễ","ệ",
"g","h","i","í","ì","ỉ","ĩ","ị",
"k","l","m","n",
"o","ó","ò","ỏ","õ","ọ",
"ô","ố","ồ","ổ","ỗ","ộ",
"ơ","ớ","ờ","ở","ỡ","ợ",
"p","q","r","s","t",
"u","ú","ù","ủ","ũ","ụ",
"ư","ứ","ừ","ử","ữ","ự",
"v","x","y","ý","ỳ","ỷ","ỹ","ỵ"
];

/* SANITIZE AUDIO FILENAME */
function sanitizeFilename(text){
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .replace(/đ/g,"d")
        .replace(/Đ/g,"d")
        .replace(/\s+/g,"_")
        .replace(/[^a-zA-Z0-9_]/g,"")
        .toLowerCase();
}

/* LOAD AUDIO */
function loadAudio(word){
    const safe = sanitizeFilename(word);
    currentAudio = new Audio("audio/" + safe + ".mp3");
}

/* SAFE PLAY AUDIO */
function safePlayAudio() {
    if(currentAudio){
        currentAudio.currentTime = 0;
        currentAudio.play().catch(err => {
            console.log("Audio blocked", err);
        });
    }
}

function startGame(){
    const random = words[Math.floor(Math.random()*words.length)];

    selectedWord = random.vn.toLowerCase().normalize("NFC");
    selectedWordMeaning = random.en;

    guessed = [];
    wrongGuesses = 0;
    listenUsed = false;
    gameOver = false; // reset for the new word

    loadAudio(selectedWord);

    createLetterButtons();
    updateWordDisplay();
    drawHangman();

    document.getElementById("message").textContent="";

    setTimeout(() => safePlayAudio(), 300);
}

/* CREATE LETTER BUTTONS */
function createLetterButtons(){
    const container = document.getElementById("letters");
    container.innerHTML="";

    alphabet.forEach(letter => {
        const btn = document.createElement("button");
        btn.textContent = letter;
        btn.onclick = () => guess(letter);
        container.appendChild(btn);
    });
}

/* UPDATE WORD DISPLAY */
function updateWordDisplay(){
    let display = "";
    for(let char of selectedWord){
        if(char === " "){
            display += " ";
        }
        else if(guessed.includes(char)){
            display += char + " ";
        }
        else{
            display += "_ ";
        }
    }
    document.getElementById("word").textContent = display.trim();
    checkWin();
}

/* GUESS LETTER */
function guess(letter){
    guessed.push(letter);
    disableLetter(letter);

    if(!selectedWord.includes(letter)){
        wrongGuesses++;
        drawHangman();
        checkLose();
    }

    updateWordDisplay();
}

/* DISABLE LETTER */
function disableLetter(letter){
    const buttons = document.querySelectorAll("#letters button");
    buttons.forEach(btn=>{
        if(btn.textContent === letter){
            btn.disabled = true;
        }
    });
}

/* HANGMAN DRAWING */
function drawHangman(){
    const stages = [
` +---+
 |   |
     |
     |
     |
     |
=========`,
` +---+
 |   |
 O   |
     |
     |
     |
=========`,
` +---+
 |   |
 O   |
 |   |
     |
     |
=========`,
` +---+
 |   |
 O   |
/|   |
     |
     |
=========`,
` +---+
 |   |
 O   |
/|\\  |
     |
     |
=========`,
` +---+
 |   |
 O   |
/|\\  |
/    |
     |
=========`,
` +---+
 |   |
 O   |
/|\\  |
/ \\  |
     |
=========`];
    document.getElementById("hangman").textContent = stages[wrongGuesses];
}

function checkWin(){
    let won = true;
    for(let char of selectedWord){
        if(char !== " " && !guessed.includes(char)){
            won = false;
        }
    }

    if(won){
        document.getElementById("message").textContent =
        "🎉 You Win! Meaning: " + selectedWordMeaning;
        disableAllButtons();
        gameOver = true; // mark game as over
    }
}

function checkLose(){
    if(wrongGuesses >= maxWrong){
        document.getElementById("message").textContent =
        "💀 You lost! Word was: " + selectedWord;
        disableAllButtons();
        gameOver = true; // mark game as over
    }
}

/* DISABLE ALL LETTERS */
function disableAllButtons(){
    const buttons = document.querySelectorAll("#letters button");
    buttons.forEach(btn => btn.disabled = true);
}

document.getElementById("listenBtn").addEventListener("click", ()=>{
    if(currentAudio){
        currentAudio.currentTime = 0;
        currentAudio.play();

        // Only increment wrongGuesses if the game is still ongoing
        if(listenUsed && !gameOver){
            wrongGuesses++;
            drawHangman();
            checkLose();
        }

        listenUsed = true;
    }
});


/* NEXT WORD BUTTON */
document.getElementById("nextBtn").addEventListener("click", ()=>{
    startGame();
    setTimeout(() => safePlayAudio(), 300);
});

/* START BUTTON */
document.getElementById("startBtn").addEventListener("click", () => {

    // Hide start screen, show game screen
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";

    // Fetch word list and start first game
    fetch("vnedict_common_clean.txt")
        .then(response => response.text())
        .then(text => {
            const lines = text.split("\n");

            words = lines.map(line => {
                if(!line.includes(":")) return null;
                const parts = line.split(":");
                return { vn: parts[0].trim(), en: parts[1].trim() };
            }).filter(x => x !== null);

            startGame();
            setTimeout(() => safePlayAudio(), 300); // auto-play first word audio
        });
});
