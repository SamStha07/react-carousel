import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import './index.scss';

const LeftArrow = ({ onClick }) => {
  return (
    <button className='leftArrow' onClick={onClick}>
      <AiOutlineArrowLeft />
    </button>
  );
};

export default LeftArrow;
