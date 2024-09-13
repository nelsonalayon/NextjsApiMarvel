// suggest from chatgpt
"use client";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";

import getData from "@/functions/fetch";


import { md5 } from "js-md5";

import Card from "../../components/card/card";
import Loading from "./loading";

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  // Add other properties as needed
}

interface CardProps {
  character: Character;
}

const Card2: React.FC<CardProps> = ({ character }) => {
  // Implement your Card component here
  return <div>{character.name}</div>;
};

export default function Characters() {
  const [offset, setOffset] = useState(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const timestamp = new Date().getTime().toString();
    const hash = md5(
      timestamp +
        process.env.NEXT_PUBLIC_MARVEL_API_SECRET_KEY +
        process.env.NEXT_PUBLIC_MARVEL_API_KEY
    );
    if (offset === 0) {
      setIsLoading(true);
    } else {
      setIsLoadingMore(true);
    }
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&ts=${timestamp}&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_KEY}&hash=${hash}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...data.data.results,
        ]);
        setIsLoading(false);
        setIsLoadingMore(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsLoadingMore(false);
        console.error("Error:", error);
      });
  }, [offset]);

  return (
    <div className="m-10">
      <h1 className="text-4xl font-bold">CHARACTERS</h1>

      <div className="flex flex-wrap justify-between">
        {isLoading ? (
          <Loading />
        ) : (
          characters.map((character, index) => <Card character={character} key={ index } />)
        )}
        {isLoadingMore && <Loading />}
      </div>
      <button onClick={() => setOffset(offset + 20)} className="button" style={{ width: '-webkit-fill-available' }}>
        {isLoadingMore ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
