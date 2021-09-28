import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './index.scss';

const RightArrow = ({ onClick }) => {
  return (
    <button className='rightArrow' onClick={onClick}>
      <AiOutlineArrowRight />
    </button>
  );
};

export default RightArrow;
