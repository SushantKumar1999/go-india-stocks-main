'use client';
import { IoSearchOutline } from 'react-icons/io5';
import { useState } from 'react';

const SearchBar = ({
  icon,
  placeholder,
  className,
  defaultValue = '',
  onChange,
  onSubmit,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);

  const changeHandler = (e) => {
    const searchValue = e.target.value.trimStart();
    setValue(searchValue);
    if (!onChange) return;
    onChange(searchValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    onSubmit(value);
  };

  return (
    <form
      className={`p-1 px-3 w-min-[150px] flex items-center bg-dark-3 rounded shadow-inner shadow-slate-600 ${className}`}
      autoComplete='off'
      onSubmit={submitHandler}
      {...props}
    >
      <input
        type='text'
        name='search'
        value={value}
        onChange={changeHandler}
        className='w-full h-full p-1 px-2 bg-transparent focus:outline-none'
        placeholder={placeholder}
      />
      <IoSearchOutline className='text-2xl' />
    </form>
  );
};

export default SearchBar;
