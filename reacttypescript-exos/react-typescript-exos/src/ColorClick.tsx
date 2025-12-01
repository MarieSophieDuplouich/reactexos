// style css attribut c'est quand on change les couleurs

import { useState } from 'react';

export default function ColorClick() {
    const [color, setColor] = useState("blue");
    const [textColor, setTextColor] = useState("green");

    function handleClick() {
        setColor("pink");
         setTextColor("green");
       
    }

    return (
        <>
    <button style={{ background: color, color:textColor }} onClick={handleClick}>
      You pressed me {color} times
    </button>




    <h2>ColorClick</h2>
    <section className="click">
    <div className="boxeun">
        <h3>backgroundColor</h3>
        <button className='red' >Red</button>
        <button className='green'>Green</button>
        <button className='blue'>Blue</button>

        <h3>textColor</h3>
         <button className='white' >White</button>
        <button className='black' >Black</button>
        <button className='red' >Red</button>
    </div>
    
    <div className="boxedeux">
    <h3>Oh rage, ô désespoir</h3>
    <p>Oh rage, ô désespoir, que mon souffle se brise,
         Quand le jour s'efface et que l'âme s'afflige. 
         Je jette mes mots contre le mur du silence, Espérant qu'un écho rende enfin ma sentence.</p>
    </div>

    </section>
    </>
    );
}
