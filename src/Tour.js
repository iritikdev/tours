import React, { useState } from 'react';


const Tour = ({id, name, info, image, price, onClick, handleDelete}) => {
  const [readMore, setReadMore] = useState(true)
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <p className={"tour-price"}>₹{price}</p>
      </div>
      <p>{readMore ? `${info.slice(0,200)}...` : info} 
        <button onClick={() => setReadMore(!readMore)} >{
          !readMore ? "read less" : "read more"
        }</button>
      </p>
      <button className="delete-btn" onClick={() => handleDelete(id)}>not interested</button>
    </footer>
  </article>
};

export default Tour;
