import { useEffect, useState } from 'react';

// useState = donnée stockée
// useffect ça met à jour


export default function Horloge() {
  const [date, setDate] = useState(new Date()); //usestate


  useEffect(() => {

    const intervalId = setInterval(() => {
      setDate(new Date()); // met à jour la date chaque seconde
    }, 1000);

    return () => clearInterval(intervalId);

  }, []);

  const hourTime = date.getHours();
  const minutes = date.getMinutes();
  const secondes = date.getSeconds();

  return (
    <div>
      <div className="box">
        <div className="container">
          <div className="shape1"></div>
          <div className="shape2"></div>
          <div className="clock">
            <div className="wrapper">
              <div id="time">{hourTime}h {minutes} m {secondes}</div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}




