export default function Billy() {

    const billy = {
      name:"Billy",
      image:"http://unsplash.it/100/200",
      age:27
  };

  return (
   <div> 
<div className="card">
   <div className="card-avatar">
    <img src={billy.image} alt={billy.name} />
   </div>
   <div className="card-details">
      <div className="name">{billy.name}</div>
      <div className="occupation">Hero</div>
      
      <div className="card-about">
         <div className="item">
            <span className="value">{billy.age}</span>
            <span className="label">Age</span>
         </div>
         <div className="item">
            <span className="value">70 kg </span>
            <span className="label">Weight</span>
         </div>
         <div className="item">
            <span className="value">175 cm</span>
            <span className="label">Height</span>
         </div>
      </div>
      <div className="skills">
         <span className="value">Immeasurable Physical Prowess, Supernatural Reflexes and Senses, Invulnerability, Indomitable Will, Enhanced Fighting Skill</span>
      </div>
   </div>
</div>
  
  </div>
  );
}
