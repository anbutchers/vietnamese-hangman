# Vietnamese Hangman

A web-based Hangman game to practice Vietnamese vocabulary. Users guess letters of Vietnamese words, hear their pronunciation, and see the English meaning when they win.

## Features

- Supports Vietnamese diacritics (tone marks)
- Plays audio pronunciation for each word
- Hangman drawing shows remaining lives
- "Listen" button for repeating pronunciation
- Auto-play audio for each new word
- Start screen for user initiation
- Responsive UI, works on desktop and mobile

## How to Play

1. Open `index.html` in your browser
2. Click **Play** to start the game
3. Guess letters by clicking the buttons
4. Click **🔊 Listen** to hear the word (first click is free)
5. Click **Next Word** to skip to a new word
6. Try to guess the word before the hangman is completed
7. The English meaning is revealed when you win

## Project Structure

```
vietnamese-hangman/
│
├── index.html            # Main HTML file
├── script.js             # JavaScript game logic
├── vnedict_common_clean.txt   # Vietnamese-English word list
└── audio/                # MP3 pronunciation files
      ├── an.mp3
      ├── ban.mp3
      └── ... other words
```

## Setup / Running Locally

1. Clone the repository:

```bash
git clone https://github.com/yourusername/vietnamese-hangman.git
cd vietnamese-hangman
```

2. Open `index.html` in your browser
3. Click **Play** to start the game

> No server required — it’s a static website

## Deploy Online

- **GitHub Pages**: Push your repo → Settings → Pages → select `main` branch
- **Netlify** or **Cloudflare Pages** also work

## Technologies Used

- HTML5, CSS3
- JavaScript (ES6)
- MP3 audio files
- Static hosting

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m "Add feature"`)
5. Push to your branch (`git push origin feature-name`)
6. Create a Pull Request

## License

Open-source. Free to modify and use.

