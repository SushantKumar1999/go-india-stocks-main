import Image from 'next/image';
import { Button, SearchBar, UserProfile } from '@/components';

const Navbar = ({ className }) => {
  return (
    <nav
      className={`flex items-center justify-between gap-10 p-2 px-5 bg-bg-secondary ${className}`}
    >
      <h1 className='text-lg'>
        <a href='/'>
          <Image src='/logo.webp' alt='logo' height={100} width={100} />
        </a>
      </h1>

      <SearchBar className='flex-grow' />

      <UserProfile
        className='w-10 md:hidden'
        src='https://source.unsplash.com/random/100x100?user,man,woman,employee'
      />

      {/* Buttons */}
      <div className='hidden gap-2 md:flex '>
        <Button>Contact Us</Button>
        <Button variant='outline' type='link' href='#'>
          SIGN UP
        </Button>
        <Button variant='outline' type='link' href='#'>
          SIGN IN
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
