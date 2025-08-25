import React from 'react';
export const Button = ({label}:{label:string}) => {
  return (
    <button className='px-4 py-2 rounded bg-white text-black dark:bg-black dark:text-white'>
      {label}
    </button>
  )
}


