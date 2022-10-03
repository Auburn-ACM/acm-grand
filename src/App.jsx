import { useEffect, useState } from 'react';
import HexToName from './components/HexToName';
import NameToHex from './components/NameToHex';

function App() {
  return (
    <>
      <div className="mt-10 px-5 w-full flex flex-col gap-2 text-lg text-dark-blue font-primary">
        <h2 className='text-center font-bold'>Put in your name as hexadecimal</h2>
        <HexToName />
      </div>
      <div className="mt-20 w-full flex flex-col gap-2 text-lg text-dark-blue font-primary">
        <h2 className='text-center font-bold'>Enter your name normally</h2>
      < NameToHex />
      </div>
    </>
  );
}

export default App;
