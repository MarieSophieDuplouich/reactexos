// style css attribut c'est quand on change les couleurs

import { useState } from 'react';
// type Couleur = {
//     red: string;
//     green: string;
//     blue: string;
// };

export default function ColorClick() {
    const couleurs = ["red", "green", "blue", "wheat"];

    const [color, setColor] = useState(couleurs[3]);



    const coulours = ["white", "black", "red"];
    const [textColor, setTextColor] = useState(coulours[1]);


  

    return (
        <>
            <h2>ColorClick</h2>
            <section className="click">
                <div className="boxeun">
                    <h3>backgroundColor</h3>
                    <button onClick={() => setColor(couleurs[0])} className="red" >Red</button>
                    <button onClick={() => setColor(couleurs[1])} className="green">Green</button>
                    <button onClick={() => setColor(couleurs[2])} className="blue">Blue</button>

                    <h3>textColor</h3>
                    <button onClick={() => setTextColor(coulours[0])} className='white' >White</button>
                    <button onClick={() => setTextColor(coulours[1])} className='black' >Black</button>
                    <button onClick={() => setTextColor(coulours[2])} className='red' >Red</button>
                </div>


                <div className="boxedeux" style={{ backgroundColor: color, color : textColor}}>
                    <h3>Oh rage, ô désespoir</h3>
                    <p>Oh rage, ô désespoir, que mon souffle se brise,
                        Quand le jour s'efface et que l'âme s'afflige.
                        Je jette mes mots contre le mur du silence, Espérant qu'un écho rende enfin ma sentence.</p>
                </div>

            </section>
        </>
    );
}
