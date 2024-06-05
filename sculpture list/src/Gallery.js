import React, { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
  }

  let sculpture = sculptureList[index];
  return (
    <>
    <div className="sculptureList">

      
      <h2>
        <i>{sculpture.name}</i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <div className="imgdescription">
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p className='dcptn'>
        {sculpture.description}
      </p>
      <button className="btn" onClick={handleClick}>
        Next
      </button>
      </div>
    </div>
    </>
  );
}
