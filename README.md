# Multiplayer Quiz App

## Overview

The Multiplayer Quiz App is a React-based web application where two contestants compete in a quiz game consisting of 5 multiple-choice questions. Players take turns answering questions, each with a 15-second timer. The player with the most correct answers wins.

## Features

- **Two-Player Turn-Based Gameplay**: Player 1 answers all questions first, then Player 2.
- **5 Multiple-Choice Questions**: Each question has four possible answers.
- **15-Second Timer**: Players have a limited time to answer each question.
- **Answer Locking**: Once an answer is selected, it cannot be changed.
- **Winner Declaration**: The player with the most correct answers wins, or a tie is declared.
- **Responsive UI**: Works on desktops, tablets, and mobile devices.

## Technologies Used

- **React.js**: For building the frontend interface.
- **CSS**: For styling and responsiveness.

## Installation and Setup

### Prerequisites

- Node.js installed (>= 16.x)
- Git installed

### Clone the Repository

```sh
git clone https://github.com/KundanDG52/multiplayer-quiz-app.git
cd multiplayer-quiz-app
```

### Install Dependencies

```sh
npm install
```

### Start the Development Server

```sh
npm start
```

The app will be available at `http://localhost:3000`.

### Build for Production

```sh
npm run build
```

## Project Structure

```
multiplayer-quiz-app/
├── public/
├── src/
│   ├── App.js       # Contains all logic code
│   ├── App.css      # Contains normal responsive CSS
│   ├── index.js     # React root file
├── package.json
├── README.md
```

## Technical Details

- **Game Flow**:
  - Player 1 answers all 5 questions first.
  - Player 2 takes their turn after Player 1.
  - At the end, scores are compared to determine the winner.
- **Timer Implementation**:
  - Each question has a 15-second timer.
  - If time runs out, the game moves to the next question automatically.
- **State Management**:
  - React's `useState` and `useEffect` manage game state.
- **Responsive Design**:
  - CSS ensures proper layout across different screen sizes.

## Future Enhancements

- **Leaderboard System**: Store and display top scores.
- **Real-Time Multiplayer Mode**: Implement live multiplayer gameplay using WebSockets.
- **Dynamic Questions**: Generate quiz questions dynamically from an API.

## License

This project is open-source under the MIT License.
