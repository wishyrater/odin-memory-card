// this should just be a card. a mostly static asset
// should have an image, and a title
// when clicked, should trigger an event to check score etc.
export default function Card({ onClick, imageUrl, name }) {
    return (
        <div className="card" onClick={onClick} style={{width: "500px", border: "1px solid black"}}>
            <img src={imageUrl} alt="Splash art" style={{width: "300px", height: "auto"}}/>
            <span><p>{name}</p></span>
        </div>
    )
}