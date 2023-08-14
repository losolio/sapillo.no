import { useEffect, useState } from 'react';

export default function Waiting() {
  const smileys = ['😜', '🤪', '😺', '😸', '🙃', '😎', '🤩', '😹', '😋', '🤓'];
  const [currentSmiley, setCurrentSmiley] = useState(smileys[0]);
  const [setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // First, fade out
      setOpacity(0);

      setTimeout(() => {
        // Once faded out, switch smiley
        const randomSmiley =
          smileys[Math.floor(Math.random() * smileys.length)];
        setCurrentSmiley(randomSmiley);

        // Then fade in
        setOpacity(1);
      }, 2500); // Half of the interval for the fade-out and change
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-pink-900'>
      <svg
        className='sapillo'
        viewBox='0 0 64 64'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <rect
          x='16'
          y='22'
          width='10'
          height='2'
          fill='#006400'
          className='eyebrow'
        ></rect>
        <rect
          x='38'
          y='22'
          width='10'
          height='2'
          fill='#006400'
          className='eyebrow'
        ></rect>

        <ellipse cx='32' cy='44' rx='20' ry='18' fill='green' />
        <ellipse cx='26' cy='32' rx='5' ry='6' fill='white' />
        <ellipse cx='38' cy='32' rx='5' ry='6' fill='white' />
        <circle cx='26' cy='30' r='2.5' fill='black' />
        <circle cx='38' cy='30' r='2.5' fill='black' />
        <path
          d='M 28 50 Q 32 53, 36 50'
          stroke='black'
          fill='transparent'
          strokeWidth='2'
        />
        <line x1='18' y1='54' x2='12' y2='60' stroke='green' strokeWidth='3' />
        <line x1='46' y1='54' x2='52' y2='60' stroke='green' strokeWidth='3' />
      </svg>

      <h1 className='text-4xl font-semibold text-orange-100 mt-5 mb-2'>
        Vi forbereder oss!
      </h1>
      <p className='text-2xl text-gray-200 mb-5'>sapillo.no {currentSmiley}</p>
    </div>
  );
}
