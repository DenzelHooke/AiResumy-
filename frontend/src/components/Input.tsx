import React from 'react'

type InputProps = {
    label?: string;
    name?: string;
    value?: string;
    type?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>; 
}

export default function Input({label, name, type="string", onChange}: InputProps) {
  return (
    <>
        <label>
         {label} <input className="w-full px-4 py-2 rounded-lg border border-gray-300 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
    placeholder-gray-400 text-gray-900 
    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-500
    transition-colors" type={type   } name={name} onChange={onChange} />
    </label>
    </>

  )
}
