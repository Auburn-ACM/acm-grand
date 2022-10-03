import { useEffect, useState } from 'react';

function BinaryToName() {
  const [inBinary, setInBinary] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [outString, setOutString] = useState('');
  const [outHex, setOutHex] = useState('');
  const binary_regex = /^[0-1\s]*$/;

  const parseValidInput = (input) => {
    // separate input into bytes
    const bytes = input.split(' ');
    // convert each pair to a number
    const dec = bytes.map((pair) => parseInt(pair, 2));

    // convert each byte to hex
    const hex = dec.map((byte) => byte.toString(16).padStart(2, '0'));
    setOutHex(hex.join(' '));

    // convert each pair to a acii character
    // const dec = pairs.map((pair) => parseInt(pair, 16));
    const ascii = dec.map((dec) => String.fromCharCode(dec));
    setOutString(ascii.join(''));
  };

  useEffect(() => {
    const curr = inBinary.replaceAll('\n', '');
    if (curr.length !== 0 && !binary_regex.test(curr)) {
      setErrorState(true);
    } else {
      setErrorState(false);
      if (curr.length !== 0) {
        parseValidInput(curr);
      }
      else {
        setOutHex('');
        setOutString('');
      }
    }
  }, [inBinary]);
  const inputStyle = {
    borderColor: errorState ? 'red' : 'black',
    backgroundColor: errorState ? '#f001' : 'white'
  }
  return (
    <>
      <textarea className='text-orange rounded-sm border-2 border-black mx-auto font-code focus:outline-none px-1 w-4/5' 
        type="text" 
        value={inBinary} 
        onChange={(e) => setInBinary(e.target.value)} 
        label="Binary Value" 
        rows={3}
        autoComplete="off"
        style={inputStyle}
        />
      <div className='text-center font-semibold font-code text-light-blue'>
        <h1>Text: {!errorState && outString}</h1>
        <h1>Hexadecimal: {!errorState && outHex}</h1>
      </div>
    </>
  );
}

export default BinaryToName;
