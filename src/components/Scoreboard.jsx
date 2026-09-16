import "./Scoreboard.css";

export default function Scoreboard({ currentScore, highScore}) {
    return (
        <div className="scoreboard">
            <div className="current-score-container">
                <span>Current score: {currentScore}</span>
            </div>
            <div className="high-score-container">
                <span>High Score: {highScore}</span>
            </div>
        </div>
    )
}