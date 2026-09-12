import { useState } from "react";
import CardDeck from "./CardDeck"
import Scoreboard from "./Scoreboard"

const initialScore = 0;
const initialPhase = "intro";

export default function Game() {
    const [score, setScore] = useState(initialScore);
    const [highScore, setHighScore] = useState(initialScore);
    const [phase, setPhase] = useState(initialPhase);

    function increaseScore() {
        setScore(prevScore => prevScore + 1);
    }

    function handleGameOver() {
        if (score > highScore) {
            setHighScore(score);
        }
        setPhase("game over");
        alert("Oops! You already clicked that champion. Try again.");
    }

    function handleVictory() {
        setHighScore(0);
        setPhase("victory");
    }

    function startGame() {
        setScore(0);
        setPhase("playing");
    }

    if (phase === "intro") {
        return (
            <div className="game">
                <span><p>How sharp is your memory? Click all champions without clicking the same champion twice, and you win!</p></span>
                <button onClick={startGame}>Start game</button>
            </div>
        )
    } else if (phase === "playing") {
        return (
            <div className="game">
                <CardDeck score={score} handleGameOver={handleGameOver} handleVictory={handleVictory} increaseScore={increaseScore}></CardDeck>
                <Scoreboard currentScore={score} highScore={highScore}></Scoreboard>
            </div> 
        )
    } else if (phase === "game over") {
        return (
            <div className="game">
                <span><p>Oops! You already clicked that champion. Try again.</p></span>
                <button onClick={startGame}>Try again</button>
                <Scoreboard currentScore={score} highScore={highScore}></Scoreboard>
            </div>
        )
    } else if (phase === "victory") {
        return (
            <div className="game">
                <span><p>Nice one! You got them all. Want to play again?</p></span>
                <button onClick={startGame}>Play again</button>
            </div>
        )
    }
}