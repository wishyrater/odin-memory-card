import "./Card.css";

export default function Card({ onClick, champion }) {
    return (
        <div className="card" onClick={() => onClick(champion)} >
            <img src={champion.imageUrl} alt="Splash art"/>
            <span><p>{champion.name}</p></span>
        </div>
    )
}