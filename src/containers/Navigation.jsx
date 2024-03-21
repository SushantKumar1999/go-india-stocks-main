import { BiConversation } from 'react-icons/bi';
import { CgMenuGridR } from 'react-icons/cg';
import { GoHome } from 'react-icons/go';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { CiGrid42 } from 'react-icons/ci';

const Navigation = ({ className }) => {
  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 h-18 text-2xl p-2 px-4 z-50 bg-accent text-white flex justify-between ${className}`}
    >
      <button className='flex justify-center flex-grow'>
        <CiGrid42 />
      </button>
      <button className='flex justify-center flex-grow'>
        <HiOutlineViewGrid />
      </button>
      <button className='flex justify-center flex-grow'>
        <GoHome />
      </button>
      <button className='flex justify-center flex-grow'>
        <CgMenuGridR />
      </button>
      <button className='flex justify-center flex-grow'>
        <BiConversation />
      </button>
    </footer>
  );
};

export default Navigation;
