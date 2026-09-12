// should display 12 cards
// should have an event handler to shuffle the cards if one is clicked
import { useState } from "react";
import Card from "./Card";

const initialChampions = [
    {
        id: 1,
        imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg",
        name: "Vayne",
    },
    {
        id: 2,
        imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
        name: "Ezreal",
    },
    {
        id: 3,
        imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
        name: "Jinx"
    },
    {
        id: 4,
        imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg",
        name: "Elise"
    },
];

// Fisher-Yates shuffle. Credit: https://stackoverflow.com/a/2450976
function shuffleArray(array) {
    const copy = [...array];
    let currentIndex = copy.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [copy[currentIndex], copy[randomIndex]] = [copy[randomIndex], copy[currentIndex]];
    }

    return copy;
}

const clickedChampions = [];
function flushClickedChampions() { clickedChampions.length = 0};

export default function CardDeck({ score, handleGameOver, handleVictory, increaseScore }) {
    const [deck, setDeck] = useState(initialChampions);

    function handleClick(champion) {
        if (clickedChampions.some(clickedChampion => clickedChampion === champion)) {
            flushClickedChampions();
            handleGameOver();
        } else {
            if (score === initialChampions.length - 1) {
                flushClickedChampions();
                handleVictory();
            } else {
                clickedChampions.push(champion);
                increaseScore();
                setDeck(prevDeck => shuffleArray(prevDeck));
            }

        }
    }

    return (
        <div className="card-grid">
            {deck.map((champion) => (
                <Card key={champion.id} onClick={handleClick} champion={champion} />
            ))}
        </div>
    )
}