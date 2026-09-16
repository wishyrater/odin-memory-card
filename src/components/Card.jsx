import "./Card.css";

export default function Card({ onClick, champion }) {
    return (
        <div className="card" onClick={() => onClick(champion)} >
            <img src={champion.imageUrl} alt="Splash art" style={{maxWidth: "100%", height:"auto"}}/>
            <span><p>{champion.name}</p></span>
        </div>
    )
}