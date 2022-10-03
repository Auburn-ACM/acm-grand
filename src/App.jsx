import { useEffect, useState } from 'react';
import HexToName from './components/HexToName';
import NameToHex from './components/NameToHex';

function App() {
  return (
    <div class="mx-5">
      <div className='my-5'>
        <h1 className='text-center font-bold text-3xl text-dark-blue text-primary'>Auburn ACM: GRAND</h1>
        {/* Link: http://www.engineeringchallenges.org/challenges/9109.aspx */}
        <h3 className='text-center text-xl'>Grand Challenge: <span className="font-bold">Reverse-Engineer the Brain </span></h3>
        <p className='text-secondary text-md'>
          We want to make a computer that works like a real brain, but computers don't think like humans! 
          Computers use <span class='font-bold'>binary</span> to store information, but the brain uses <span class='font-bold'>neurons</span> to store information.
          For this challenge, we want you to write your name in a way that a computer can understand. Try using an <span class='font-bold'>ASCII</span> table to help you. If you get stuck, try using the helper below.
        </p>
      </div>
      <div className="my-10 w-full flex flex-col gap-2 text-lg text-light-blue font-secondary">
        <h2 className='text-center font-bold'>Put in your name as hexadecimal</h2>
        <HexToName />
      </div>
      <div className="my-20 w-full flex flex-col gap-2 text-lg text-light-blue font-secondary">
        <h2 className='text-center font-bold'>Enter your name normally</h2>
      < NameToHex />
      </div>
    </div>
  );
}

export default App;
