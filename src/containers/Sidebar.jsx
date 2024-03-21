'use client';
import { Dropdown, SidebarLink } from '@/components';
import { IoIosArrowForward } from 'react-icons/io';
import { FaBell } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi';
import { useState } from 'react';
import navLinks from '@/content/sidebar';

const Sidebar = ({ className = '' }) => {
  const [visible, setVisible] = useState(false);

  return (
    <nav
      className={`${
        visible ? 'absolute lg:relative' : 'absolute'
      } lg:w-3/12 h-full bg-accent w-[50%] z-30  transition-all duration-200 ${
        visible ? 'left-0' : '-left-[50%] lg:-left-[25%] text-white'
      } ${className}`}
    >
      <header className='flex justify-between p-4 py-5 mb-3 text-white border-b border-white/50'>
        <div className='flex items-center gap-2'>
          <HiUser className='text-2xl' />
          Hello, User
        </div>
        <FaBell className='text-2xl' />
      </header>

      <main className='h-full overflow-scroll'>
        {navLinks.map((sec, i) =>
          sec.title ? (
            <Dropdown key={sec.title} title={sec.title} links={sec.links} />
          ) : (
            <SidebarLink key={i} href='#'>
              {sec}
            </SidebarLink>
          )
        )}
      </main>

      {/* Opening Closing Btn */}
      <button
        onClick={() => setVisible((prev) => !prev)}
        className='absolute top-[250px] right-0 z-50 p-1 py-5 transition-all duration-200 translate-x-full bg-accent rounded-r-md hover:bg-accent-hover text-white/80 hover:text-white'
      >
        <IoIosArrowForward />
      </button>
    </nav>
  );
};

export default Sidebar;
