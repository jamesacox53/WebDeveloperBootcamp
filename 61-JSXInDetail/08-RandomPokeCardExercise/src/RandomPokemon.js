import "./RandomPokemon.css";

export default function RandomPokemon() {
  const randPokeInt = Math.floor(Math.random() * 151) + 1;
  const pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randPokeInt}.png`;

  return (
    <div className="RandomPokemon">
      <h1>Pokemon #{randPokeInt}</h1>
      <img src={pokeImgUrl} alt="" />
    </div>
  );
}
