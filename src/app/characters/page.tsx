import Card from "../../components/card/card";
import fetch from "../../functions/fetch";

export default function Characters() {
  const data = fetch("https://rickandmortyapi.com/api/character");
  let characters;

  data.then((res) => {
    characters = res;
    console.log(res);
  });

  return (
    <div>
      <h1>Characters</h1>
      {characters
        ? characters.map((character) => {
            return <Card />;
          })
        : null}
    </div>
  );
}

// suggest from chatgpt 

import React, { useEffect, useState } from 'react';

interface Character {
  id: number;
  name: string;
  // Add other properties as needed
}

interface CardProps {
  character: Character;
}

const Card: React.FC<CardProps> = ({ character }) => {
  // Implement your Card component here
  return <div>{character.name}</div>;
};

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}
