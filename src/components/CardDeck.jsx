// should display 12 cards
// should have an event handler to shuffle the cards if one is clicked
import { useEffect, useState } from "react";
import Card from "./Card";

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

function flushArray(array) { array.length = 0};

export default function CardDeck({ score, handleGameOver, handleVictory, increaseScore }) {
    const [deck, setDeck] = useState([]);
    const [clickedChampions, setClickedChampions] = useState([]);

    useEffect(() => {
        let ignore = false;
        async function loadChampions() {
            // need to get the latest version of the datadragon API
            const versionResponse = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
            const versions = await versionResponse.json();
            const latestVersion = versions[0];
            // then get the champions
            const championsResponse = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
            const champions = await championsResponse.json();
            const data = [];
            let count = 0;
            for (const [key, value] of Object.entries(champions.data)) {
                count++;
                data.push(
                    {
                        id: value.key, 
                        imageUrl: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg`,
                        name: key
                    }
                )
            }
            // pick twelve at random
            const luckyPicks = [];
            while (luckyPicks.length < 12) {
                const randomNumber = Math.floor(Math.random() * data.length).toString();
                if (!luckyPicks.some(pick => pick === randomNumber)) {
                    luckyPicks.push(randomNumber);
                }
            }
            const selectedChampions = luckyPicks.map(index => data[Number(index)]);

            if (!ignore) setDeck(selectedChampions);
        }

        loadChampions();

        return () => { ignore = true; };
    }, []);

    function handleClick(champion) {
        if (clickedChampions.some(clickedChampion => clickedChampion === champion)) {
            setClickedChampions([]);
            handleGameOver();
        } else {
            if (score === deck.length - 1) {
                setClickedChampions([]);
                handleVictory();
            } else {
                setClickedChampions(prev => [...prev, champion])
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