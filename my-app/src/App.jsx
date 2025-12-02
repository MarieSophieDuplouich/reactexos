import { React, useState } from "react";
import ReactDOM from "react-dom/client";
import Clicker from "./Clicker";
import Horloge from "./Horloge";
import Billy from "./Billy";
import Chronometre from "./Chronometre";
import FilterableProductTable from "./FilterableProductTable";
// import {Main} from "./Main";      // Import du composant App
// import { Eleve } from "./Eleve";


// root.render(<Main/>);            // Appel du composant App
// root.render(<App/>);


function App({ pokemons}) {

  const nom = "Siri";
  const date = new Date();
  const datefr = new Intl.DateTimeFormat("fr-FR").format(date);
  // const str = date.getHours();
  const localTime = datefr.toString();
  const hourTime = date.getHours();
  const minutes = date.getMinutes();


    //points d'attaque filtre pokemon
  const [rangeAttack, onrangeAttack] = useState('');

  // const pokemon = {
  //     name:"Mew",
  //     image:"http://unsplash.it/100/200",
  //     pokeId:151
  // };

  //pokemon recherche par points d'attaque suite
const filteredPokemons = pokemons.filter(poke=> {
  if(!rangeAttack) return true;

  return parseInt(poke.stats.attack)>= parseInt(rangeAttack);
});
 //pokemon recherche par points d'attaque suite fin

    rows.push(
      <ProductRow
        product={product}
        key={product.name}
        price={product.price}
      />
    );
    lastCategory = product.category;


  return (
    <div className="centrer">
      <h1>Hello, {nom} et nous sommes le {datefr} {hourTime}h {minutes}
      </h1>
      {/* <h2> {pokemon.name}</h2> */}

      {/* <img className="pokemon" src={pokemon.image} alt={pokemon.name}/> 
     <h3>{pokemon.pokeId}</h3> */}
      <Clicker />
      <Horloge />
      <Billy />
      <Chronometre />
      <FilterableProductTable />


      <form>
   
        <input type="number"
          value={rangeAttack} placeholder="filtrer par points d'attaque"
          onChange={(e) => onrangeAttack(e.target.value)} />
 
      </form>
       

    
      <div className="pokemon-list">
        {pokemons.map(poke => (
          <div key={poke.id} className="pokemon-card">
            <h3>{poke.name}</h3>
            <img src={poke.image} alt={poke.name} />
            <p>ID : {poke.pokedexId}</p>
            <p>points d'attaque : {poke.stats.attack}</p>
            <p>ça se passe ci-dessous le filtrage </p>
          </div>
        ))}
      </div>
   {filteredPokemons.length === 0 &&(
    <p>Aucun Pokémon ne correspond à ce filtre.</p>
   )}

    </div>
  ) ;
}



export default App;



















// console.log("Hello MSD");

// import React from "react";
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// /* Affichage du composant root  */
// root.render(<App/>);

// // En résumé
// // La méthode ReactDOM.createRoot permet de créer un composant React lié à une véritable balise HTML.
// // La méthode render permet d'afficher le composant.
// // La méthode render prend en paramètre du JSX, soit le HTML à afficher.

// function App(){
//     // return (
//     //  <div>
//     //     <h1>Titre</h1>
//     //     <img src="https://unsplash.it/100/100"/>
//     //     <p>Je suis un paragraphe</p>
//     // </div>
//     // );
//     // const name = "Massinissa";
//     // const birth = new Date("12-31-1999");
//     //  const eleves = ["Mathieu","Arnaud","Cléo","François"];
//     //     const elevesElements = eleves.map( eleve => <li>{eleve}</li> );
//     // return <div><h1>Bonjour {name} tu as {2024 - birth.getFullYear()} ans  </h1><ul>{elevesElements}</ul></div> ;
//         let eleves = [
//         { name : "Massinissa", grade : "4eme" },
//         { name : "Arnaud", grade : "3eme" },
//         { name : "Cléo", grade : "3eme" },
//         { name : "Louis", grade : "6eme" },
//     ];
//     const elevesElements = eleves.map((eleve)=>{
//         return (
//             <div>
//                 <h2>{eleve.name}</h2>
//                 <p>{eleve.grade}</p>
//             </div>
//         );
//     });
//     return (
//         <div>
//             {elevesElements}
//         </div>
//     );
// }
// Event
// Pour réagir à un événement React vous fournit tout un ensemble de props auxquelles on affecte une fonction callback.

// export function Clicker(){
//     function handleClick(){
//         alert("Click !");
//     }
//     return <button onClick={handleClick}>Click me !</button>
// }
// Je dois placer ma fonction entre accolades pour que JSX l'interprète comme du JavaScript.

// Le nom des props est analogue au nom des événements HTML, préfixé d'un on, le tout en camelCase.

// Voir tous les événements possibles : https://www.w3schools.com/jsref/dom_obj_event.asp


// state
// Les states sont les données dynamiques que le composant affiche. Quand vous changez la valeur d'un state, React va rafraîchir l'affichage du composant.

// La création d'un state se fait grâce à la fonction useState() du module react. Il faut donc l'importer dans le fichier du composant.

// import { useState } from "react";
// Un state est composé de deux éléments :

// une constante pour lire le state
// une fonction pour modifier le state
// La plupart du temps les states seront modifiés lors d'un événement.

// Par exemple ici j'incrémente un compteur quand je clique sur un bouton.

// import { useState } from "react";
// export function Counter(){
//     /**
//      * Je crée un nouveau state.
//      * J'accède au state via la variable compteur.
//      * Je modifie le state via la fonction setCompteur
//      * */
//     const [compteur, setCompteur] = useState(0);

//     function handleClick(){
//         setCompteur(compteur+1);
//     }

//     return (
//         <button onClick={handleClick}>{compteur}</button>
//     );
// }


