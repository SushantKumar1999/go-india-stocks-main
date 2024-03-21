import {
  Discussion,
  FeaturedCompanies,
  MarketStories,
  Navigation,
  Sidebar,
  TabList,
} from '@/containers';

export default function Home() {
  return (
    <main className='h-full '>
      {/* <FeaturedCompanies /> */}
      <div className='relative inset-0 flex h-full'>
        <Sidebar />
        <TabList className='block md:hidden' />
        <Discussion className='hidden md:block' />
        <MarketStories className='hidden md:block' />
        <Navigation className='md:hidden' />
      </div>
    </main>
  );
}
