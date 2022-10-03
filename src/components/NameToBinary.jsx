import { useEffect, useState } from 'react';

function NameToBinary() {
  const [stringName, setStringName] = useState('');
  const [outBin, setOutBin] = useState('');
  
  const parseInput = (input) => {
    let out = '';
    for (let i = 0; i < input.length; i++) {
      const temp = input.charCodeAt(i).toString(2)
      out += temp.padStart(8, '0') + ' ';
    }
    setOutBin(out);
  };

  useEffect(() => {
    if (stringName.length !== 0) {
      parseInput(stringName);
    }
    else {
      setOutBin('');
    }
  }, [stringName])
  return (
    <>
      <input className='text-orange rounded-sm border-2 border-black mx-auto font-code focus:outline-none px-1 w-3/5' 
        type="text" 
        value={stringName} 
        onChange={(e) => setStringName(e.target.value)} 
        label="Text Value" 
        autoComplete="off"
        />
      <div className='text-center font-semibold font-code text-light-blue'>
        <h1>{outBin}</h1>
      </div>
    </>
  );
}

export default NameToBinary;
