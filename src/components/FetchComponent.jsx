import React, { useState } from "react";
import axios from "axios";

const FetchComponent = () => {
  const [pokemon, setPokemon] = useState([]); //useState is set as empty array//
  /*
    (From previous Pokemon API assignment)
*/
  //     const fetchAllPokemonNames = () => {
  //         fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  //           .then(response => {
  //             // not the actual JSON response body but the entire HTTP response
  //             return response.json();
  //         }).then(response => {
  //             // we now run another promise to parse the HTTP response into usable JSON
  //             console.log(response);
  //         }).catch(err=>{
  //             console.log(err);
  //         });
  //     }

  const axiosAllPokemonNames = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => {
        console.log(res.data.results);
        setPokemon(res.data.results); //List of Pokemon//
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>POKEMON - Gotta Catch Em All!</h1>
      <button onClick={axiosAllPokemonNames}>Fetch Pokemon</button>
      <ul>
        {pokemon.length > 0 &&
          pokemon.map((poke, idx) => <li key={idx}>{poke.name}</li>)}
      </ul>
    </div>
  );
};

export default FetchComponent;
