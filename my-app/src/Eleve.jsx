// export function Eleve()
// {
//     const prenom = "Massinissa";
//     const nom = "CHAOUCHI";
//     const age = 24;
//     return (
//         <div>
//             <h2>{nom}</h2>
//             <p>{prenom}</p>
//             <p>{age} ans</p>
//         </div>
//     );
// }

// Props - Paramétrer un composant
// Les props sont les attributs paramétrables des composants JSX que vous créez.

// L'intérêt des composants est la modularité, un composant a pour objectif d'être réutilisé dans des contextes différents et se doit donc d'être paramétrable.

// Les props d'un composant sont définies en paramètre de sa fonction et on définit leurs valeurs à l'appel du composant à la manière du HTML.

// export function Eleve({prenom = 'Massinissa', nom = 'CHAOUCHI', age='17'})
// {   
    
//     return (
//         <div>
//             <h2>{nom}</h2>
//             <p>{prenom}</p>
//             <p>{age} ans</p>
//             <p>{ age>=18 ? "Majeur" : "Mineur" }</p>
//         </div>
//     );
// }