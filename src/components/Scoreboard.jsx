export default function Scoreboard({ currentScore, highScore}) {
    return (
        <div className="scoreboard">
            <div className="current-score-container">
                <span><p>Current score: {currentScore}</p></span>
            </div>
            <div className="high-score-container">
                <span><p>High Score: {highScore}</p></span>
            </div>
        </div>
    )
}