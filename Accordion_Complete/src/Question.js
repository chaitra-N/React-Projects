import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setMoreInfo(!moreInfo)}>
          {moreInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {moreInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
