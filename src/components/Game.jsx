import { useState } from "react";
import CardDeck from "./CardDeck"
import Scoreboard from "./Scoreboard"

const initialScore = 0;

export default function Game() {
    const [score, setScore] = useState(initialScore);

    function increaseScore() {
        setScore(prevScore => prevScore + 1);
        console.log(score);
    }

    return (
        <div className="game">
            <CardDeck score={score} increaseScore={increaseScore}></CardDeck>
            <Scoreboard currentScore={score}></Scoreboard>
        </div>
    )
}