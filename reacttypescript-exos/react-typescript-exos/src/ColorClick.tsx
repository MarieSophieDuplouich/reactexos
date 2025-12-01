// style css attribut c'est quand on change les couleurs

import { useState } from 'react';

export default function ColorClick() {
    const [color, setColor] = useState("blue");
  

    function handleClick() {
        setColor("pink");
       
    }
    
          const [textColor, setTextColor] = useState("green");
    function handleClicktextcolor(){
    
                 setTextColor("red");
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
        <button onClick={handleClick} className='red' >Red</button>
        <button  onClick={handleClick} className='green'>Green</button>
        <button  onClick={handleClick} className='blue'>Blue</button>

        <h3>textColor</h3>
         <button  onClick={ handleClicktextcolor} className='white' >White</button>
        <button onClick={ handleClicktextcolor}className='black' >Black</button>
        <button  onClick={ handleClicktextcolor}className='red' >Red</button>
    </div>
    
    <div className="boxedeux" style={{ background: color, color:textColor }}>
    <h3>Oh rage, ô désespoir</h3>
    <p>Oh rage, ô désespoir, que mon souffle se brise,
         Quand le jour s'efface et que l'âme s'afflige. 
         Je jette mes mots contre le mur du silence, Espérant qu'un écho rende enfin ma sentence.</p>
    </div>

    </section>
    </>
    );
}
