// style css attribut c'est quand on change les couleurs

import { useState } from 'react';
// type Couleur = {
//     red: string;
//     green: string;
//     blue: string;
// };

export default function ColorClick() {
    const couleurs = ["red", "green", "blue", "wheat"];

    const [color, setColor] = useState(couleurs[3

    ]

    );



    // function handleClick() {
    //     setColor([
    //         "red",
    //         "green",
    //         "blue"
    //     ]
    //     );i


    // }

    // const [textColor, setTextColor] = useState("green");
    // function handleClicktextcolor() {

    //     setTextColor("red");


    // }

    return (
        <>
            <h2>ColorClick</h2>
            <section className="click">
                <div className="boxeun">
                    <h3>backgroundColor</h3>
                    <button onClick={() => setColor(couleurs[0])} className="red" >Red</button>
                    <button onClick={() => setColor(couleurs[1])} className="green">Green</button>
                    <button onClick={() => setColor(couleurs[2])} className="blue">Blue</button>
                    {/* 
                    <h3>textColor</h3>
                    <button onClick={handleClicktextcolor} className='white' >White</button>
                    <button onClick={handleClicktextcolor} className='black' >Black</button>
                    <button onClick={handleClicktextcolor} className='red' >Red</button> */}
                </div>
                {/* la couleur doit apparaître dans boxedeux */}

                <div className="boxedeux" style={{ backgroundColor: color }}>
                    <h3>Oh rage, ô désespoir</h3>
                    <p>Oh rage, ô désespoir, que mon souffle se brise,
                        Quand le jour s'efface et que l'âme s'afflige.
                        Je jette mes mots contre le mur du silence, Espérant qu'un écho rende enfin ma sentence.</p>
                </div>

            </section>
        </>
    );
}
