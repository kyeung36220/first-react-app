import pfp from "./assets/pfp.jpg"

function Card() {
    return (
        <div className="card">
            <img className="cardImage" src= {pfp} alt="profile picture"></img>
            <h2 className="cardTitle">Kenneth</h2>
            <p className="cardText">I make websites and play Pokemon TCG Pocket</p>
        </div>
    )
}

export default Card