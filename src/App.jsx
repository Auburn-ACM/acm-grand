import BinaryToName from './components/BinaryToName';
import NameToBinary from './components/NameToBinary';

function App() {
  return (
    <div className="sm:mx-7 mx-4">
      <div className='my-5'>
        <h1 className='text-center font-bold text-3xl text-dark-blue text-primary'>Auburn ACM: GRAND</h1>
        {/* Link: http://www.engineeringchallenges.org/challenges/9109.aspx */}
        <h3 className='text-center text-xl my-1'>Grand Challenge: <span className="font-bold">Secure Cyberspace </span></h3>
        <p className='text-secondary text-md'>
          We want to make a computer that works like a real brain, but computers don't think like humans! 
          Computers use <span class='font-bold'>binary</span> to store information.
          For this challenge, we want you to write your name in a way that a computer can understand. Try using an <span className='font-bold'>ASCII</span> table to help you. If you get stuck, try using the helper below.
        </p>
      </div>
      <div className="my-5 w-full flex flex-col gap-2 text-lg text-light-blue font-secondary">
        <h2 className='text-center font-bold'>Put in your name in binary</h2>
        <BinaryToName />
        <img className='md:mx-20 sm:mx-10 mx-auto' src="ascii-table.png" alt='ASCII Table' />
      </div>
      <div className="my-10 w-full flex flex-col gap-2 text-lg text-light-blue font-secondary">
        <h2 className='text-center font-bold'>Helper: Enter letters you need help with</h2>
        <NameToBinary />
      </div>
    </div>
  );
}

export default App;
