import { useState } from 'react';
import './App.css';
import Carousal from './components/Carousal';
// import Container from './components/Container/Container';

import sliderData from './data/data';

function App() {
  return (
    <div className='main'>
      <Carousal slides={sliderData} autoplay={true} showItems={3} />
    </div>
  );
}

export default App;
