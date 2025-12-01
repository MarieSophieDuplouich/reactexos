

import { useEffect, useState } from 'react';

export default function Chrono() {
  const [timelaunched, setTimelaunched] = useState(0); 
  const [çaBouge, setçaBouge] = useState(false);

  const toggleChronometre = () => {
    setçaBouge(prev => !prev); // démarre / arrête le chrono
  };

  useEffect(() => {
    if (!çaBouge) return; // si le chrono n’est pas lancé, on ne crée pas l'interval

    const interval = setInterval(() => {
      setTimelaunched(prev => prev + 1);
    }, 1000);

    // nettoyage : on supprime l'interval quand çaBouge change
    return () => clearInterval(interval);

  }, [çaBouge]);

  return (
    <div>
         <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</div>
          <div>⠀⠀⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀</div>
          <div>⠀⠀⠀⠀⣴⠿⠏⠀⠀⠀⠀⠀⠀⢳⡀⠀⡏⠀⠀⠀⠀⠀⢷</div>
          <div>⠀⠀⠀⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀⣧⠀⢸⠀⠀⠀⠀⠀ ⡇</div>
          <div>⠀⠀⠀⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲⣿⠀⣸⠀⠀{timelaunched} ⠀ ⡇</div>
          <div>⠀⠀⠀⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀⣿⠀⢹⠀⠀⠀⠀⠀ ⡇</div>
          <div>⠀⠀⠀⠙⢿⣯⠄⠀⠀⠀⢀⡀⠀⠀⡿⠀⠀⡇⠀⠀⠀⠀⡼</div>
          <div>⠀⠀⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀⠀⠘⠤⣄⣠⠞⠀</div>
          <div>⠀⠀⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</div>
          <div>⠀⠀⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀</div>
          <div>⠀⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀</div>
          <div>⠀⠀⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀⠀⣄⢸⠀⠀⠀⠀⠀⠀</div>
          <div>⠀⠀⣿⣿⣧⣀⣿.........⣀⣰⣏⣘⣆⣀⠀</div>
      <button onClick={toggleChronometre}>
        {çaBouge ? 'STOP' : 'START'}
      </button>
      <button onClick={() => setTimelaunched(0)}>Réinitialiser</button>
    </div>
  );
}





