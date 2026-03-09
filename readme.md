# Vietnamese Hangman

A web-based Hangman game to practice Vietnamese vocabulary. Users guess letters of Vietnamese words, hear their pronunciation, and see the English meaning when they win.

# About This Project

Nhớ hồi nhỏ, thời mình còn bập bẹ học tiếng Anh, mẹ mua cho mình cái Kim Từ Điển (một loại từ điển điện tử nhỏ bằng bàn tay). Trong đó có trò Hangman, đại khái là nghe phát âm từ tiếng Anh rồi đoán cách đánh vần từ đó. Mình nghĩ một phần nhờ trò đó mà mình nghe tiếng Anh tương đối tốt ngay từ buổi đầu. Bây giờ, mình lại trở thành vai trò của một người dạy ngôn ngữ. Không phải dạy tiếng Anh mà là dạy tiếng Việt. Mình chợt nhớ lại những công cụ đã giúp mình thuở trước. Nhưng có vẻ như không có nhiều công cụ tương tự cho người học tiếng Việt. Mình quyết định tự tạo vậy. Hy vọng sẽ giúp được cho những ai đang học tiếng Việt.

I remember when I was little, back when I was just starting to learn English, my mom bought me a Kim Dictionary (a small electronic dictionary that fits in the palm of your hand). It had the Hangman game, where you basically listen to the pronunciation of an English word and then guess how it’s spelled. I think that game partly helped me develop a fairly good English listening skill right from the start. Now, I’ve taken on the role of a language teacher, not teaching English, but teaching Vietnamese. I suddenly remembered the tools that helped me back then. But it seems there aren’t many similar tools for people learning Vietnamese. So, I decided to create one myself. Hopefully, it will help those who are learning Vietnamese.

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

