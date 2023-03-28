import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function PeopleData() {
  const { loading, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <h1> Loading...</h1>;
  }

  return (
    <div>
      {data.characters.results.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
}

export default PeopleData;
