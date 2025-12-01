import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
// import App from "./App";
import {App} from './App.jsx';

fetch("https://pokebuildapi.fr/api/v&/pokemon/limit/100")
.then(res=>res.json())
.then(pokemons=>{
    ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode >

        <App pokemons={pokemons}/>
    </React.StrictMode>   

    );
});





// import { Eleve } from "./Eleve";

// export function Main(){
   
//     return (
//      <div>
//         <h1>Titre</h1>
//         <img src="https://unsplash.it/100/100"/>
//         <p>Je suis un paragraphe</p>
//     </div>
//     );
  
// }


// /src/App.jsx

// export function App(){
//     return (
//         <div>
//             <h1>Hello App</h1>
//             <UserProfil name="Manu" lastName="CHAO"/>
//         </div>
//     );
// }
// /src/UserProfil.jsx

// import { useState } from "react";
// export function UserProfil({name,lastName}){
//     // J'initialise l'utilisateur
//     const [user,setUser] = useState({name, lastName});
    
//     function onChangeName(event){
//         const newName = event.target.value;
//         setUser({...user, name : newName});
//     }
//     function onChangeLastName(event){
//         const newLastName = event.target.value;
//         setUser({...user, lastName : newLastName});
//     }

//     return (
//         <div>
//             <h2>{user.name}</h2>
//             <h2>{user.lastName}</h2>
//             <input onChange={onChangeName} value={user.name}/>
//             <input onChange={onChangeLastName} value={user.lastName}/>
//         </div>
//     );
// }

