import { useEffect, useState } from 'react';

function NameToHex() {
  const [stringName, setStringName] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [outHex, setOutHex] = useState('');
  const is_ascii_regex = /^[\x00-\x7F]*$/;
  
  const parseInput = (input) => {
    let out = '';
    for (let i = 0; i < input.length; i++) {
      out += input.charCodeAt(i).toString(16) + ' ';
    }
    setOutHex(out);
  };

  useEffect(() => {
    if (stringName.length !== 0 && !is_ascii_regex.test(stringName)) {
      setErrorState(true);
    } else {
      setErrorState(false);
      if (stringName.length !== 0) {
        parseInput(stringName);
      }
      else {
        setOutHex('');
      }
    }
  }, [stringName])
  const inputStyle = {
    borderColor: errorState ? 'red' : 'black',
    backgroundColor: errorState ? '#f001' : 'white'
  }
  return (
    <>
      <input className='text-dark-blue rounded-sm border-2 border-black mx-auto font-code focus:outline-none px-1 w-3/5' 
        type="text" 
        value={stringName} 
        onChange={(e) => setStringName(e.target.value)} 
        label="Hexadecimal Value" 
        style={inputStyle} 
        autoComplete="off"
        />
      <div className='text-center font-semibold font-code text-light-blue'>
        {/* {errorState && <h1 className='text-red-500'>Invalid input</h1>} */}
        {!errorState && <h1>{outHex}</h1>}
      </div>
    </>
  );
}

export default NameToHex;
