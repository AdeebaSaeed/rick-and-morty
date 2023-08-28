import { useEffect, useState } from 'react';
import './Card.css';

interface Character {
  id: number;
  name: string;
  image: string;
  location: {
    name: string;
  };
  status: string;
}

function Card() {
  const [characters, setCharacters] = useState<Character[]>([]);

  async function fetchData() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json() as { results: Character[] };
      if (data && data.results) {
        setCharacters(data.results);
      }
    } catch (err) {
      console.error('Error fetching data: ', err);
    }
  }

  useEffect(() => {
    fetchData().catch((error) => {
      console.error('Error in fetchData:', error);
    });
  }, []); 

  function getStatusColor(status: string): string {
    switch (status) {
      case 'Dead':
        return '#dc3545';
      case 'Alive':
        return '#198754';
      default:
        return '#6c757d';
    }
  }

  return (
    <div className="container">
      <h1 className="text-center">Rick and Morty Characters</h1>
      <div className="character-container">
        {characters.map((character) => (
          <div key={character.id} className="cardContainer">
            <img className="cardImage" src={character.image} alt={character.name} />
            <div className="cardContent">
              <div className="cardTitle">{character.name}</div>
              <div className="cardStatus" style={{ backgroundColor: getStatusColor(character.status) }}>
                {character.status}
              </div>
              <div className="cardLocation">
                <div>Last Location</div>
                <div>{character.location.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

