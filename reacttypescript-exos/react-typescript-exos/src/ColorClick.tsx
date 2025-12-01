// style css attribut c'est quand on change les couleurs

import { useState } from 'react';

export default function ColorClick() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>

    <h2>ColorClick</h2>
    <section className="click">
    <div className="boxeun">
        <h3>backgroundColor</h3>
        <button>Red</button>
        <button>Green</button>
        <button>Blue</button>

        <h3>textColor</h3>
         <button>White</button>
        <button>Black</button>
        <button>Red</button>
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
