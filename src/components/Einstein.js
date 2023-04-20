import React from 'react';
import FunnyAlbert from './FunnyAlbert.png'

function Img() {
  const handleClick = () => {
    window.open("https://simple.wikipedia.org/wiki/Albert_Einstein#:~:text=Albert%20Einstein%20%2814%20March%201879%20%E2%80%93%2018%20April,light%20%28energy%20%3D%20mass%20%C3%97%20speed%20of%20light%C2%B2%29.", "_blank");
  };
  return (
    <div>
      <img src={FunnyAlbert} alt="logo" onClick={handleClick} />
    </div>
  );
}

export default Img;
