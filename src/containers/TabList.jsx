'use client';
import { useState } from 'react';
import { Discussion, MarketStories } from '.';

const TabList = ({ className }) => {
  const [selected, setSelected] = useState(0);

  return (
    <section className={`w-full ${className}`}>
      <header className='flex text-center justify-stretch'>
        {headers.map((header, i) => (
          <button
            key={i}
            className={`flex-1 p-3 text-white capitalize hover:bg-accent-hover focus:bg-accent-hover bg-accent border-b-2 border-accent  ${
              selected === i ? 'border-red-500 bg-accent-hover' : ''
            }`}
            onClick={() => setSelected(i)}
          >
            {header}
          </button>
        ))}
      </header>
      <main>
        {selected === 0 ? (
          <Discussion className='w-full' />
        ) : (
          <MarketStories className='w-full' />
        )}
      </main>
    </section>
  );
};

const headers = ['discussion fourm', 'market stories'];

export default TabList;
