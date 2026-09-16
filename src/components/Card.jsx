// this should just be a card. a mostly static asset
// should have an image, and a title
// when clicked, should trigger an event to check score etc.
export default function Card({ onClick, champion }) {
    return (
        <div className="card" onClick={() => onClick(champion)} >
            <img src={champion.imageUrl} alt="Splash art" style={{maxWidth: "100%", height:"auto"}}/>
            <span><p>{champion.name}</p></span>
        </div>
    )
}