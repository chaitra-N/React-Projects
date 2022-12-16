import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  ///destruction the properties of the people object array
  //in the above line setting the value to index instead of hardcoding the value to display the people object so that when one value changed the other changeds as well
  const { name, job, text, image } = people[index];

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <div className='author'>{name}</div>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn'>surprise me</button>
    </article>
  );
};

export default Review;
