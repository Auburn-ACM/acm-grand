import { useEffect, useState } from 'react';

function HexToName() {
  const [input, setInput] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [outname, setOutname] = useState('');
  const [binary, setBinary] = useState('');
  const hex_regex = /^[0-9a-fA-F]+$/;

  const parseValidInput = (input) => {
    // separate input into pairs of 2 characters
    const pairs = input.match(/.{1,2}/g);
    // convert each pair to a number
    const dec = pairs.map((pair) => parseInt(pair, 16));

    // convert each pair to binary
    const binary = dec.map((num) => {
        const b = num.toString(2);
        return b.padStart(8, '0');
    });
    setBinary(binary.join(' '));

    // convert each pair to a acii character
    // const dec = pairs.map((pair) => parseInt(pair, 16));
    const ascii = dec.map((dec) => String.fromCharCode(dec));
    setOutname(ascii.join(''));
  };

  useEffect(() => {
    const curr = input.replaceAll(' ', '');
    if (curr.length !== 0 && !hex_regex.test(curr)) {
      setErrorState(true);
    } else {
      setErrorState(false);
      if (curr.length !== 0) {
        parseValidInput(curr);
      }
    }
  }, [input])
  const inputStyle = {
    borderColor: errorState ? 'red' : 'black',
    backgroundColor: errorState ? '#f001' : 'white'
  }
  return (
    <>
      <input className='text-orange rounded-sm border-2 border-black mx-auto font-code focus:outline-none px-1 w-3/5' 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        label="Hexadecimal Value" 
        style={inputStyle} />
      <div className='text-center font-semibold font-code text-light-blue'>
        {/* {errorState && <h1 className='text-red-500'>Invalid input</h1>} */}
        {!errorState && <h1>{outname}</h1>}
        {!errorState && <h1>{binary}</h1>}
      </div>
    </>
  );
}

export default HexToName;
