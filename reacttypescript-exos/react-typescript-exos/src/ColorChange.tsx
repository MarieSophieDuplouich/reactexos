// style css attribut c'est quand on change les couleurs

import { useState } from 'react';
// type Couleur = {
//     red: string;
//     green: string;
//     blue: string;
// };

export default function ColorChange() {
    const couleurs = ["red", "green", "blue", "wheat"];

    const [color, setColor] = useState(couleurs[3]);



    const coulours = ["white", "black", "red"];
    const [textColor, setTextColor] = useState(coulours[1]);


  

    return (
        <>
            <h2>ColorChange</h2>
            <section className="click">
                <div className="boxeun">
                    <h3>backgroundColor</h3>
                    {/* <input type="text" onSubmit={() => setColor(couleurs[color])}  /> */}
                        <input type="text"  onChange={e => setColor(e.target.value)}  />
                    <h3>textColor</h3>
                      {/* <input type="text" value={color} onSubmit={() => setTextColor(coulours[textColor])}/> */}
                          <input type="text"  onChange={e => setTextColor(e.target.value)}  />
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

