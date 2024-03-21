import marketStories from '@/content/market-stories';
import Image from 'next/image';
import Link from 'next/link';

const MarketStories = ({ className }) => {
  return (
    <section className={`relative flex-grow w-1/12 p-5 ${className}`}>
      <h1 className='hidden heading-primary md:block'>market stories</h1>

      <div className='grid h-[calc(100vh-250px)] xs:h-[calc(100vh-225px)]  md:h-[calc(100vh-300px)] py-8 gap-5 overflow-scroll grid-cols-fluid'>
        {marketStories.map(({ title,img, text, id, url }) => (
          <Link
            key={id}
            href={url}
            target='_blank'
            className='group relative h-[200px] cursor-pointer overflow-hidden shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-700'
          >
            <Image
              src={img}
              alt={url}
              width={300}
              height={300}
              className='object-cover w-full h-full'
            />
            <div className='absolute inset-0 z-10 flex items-end p-3 px-5 text-white to-black-black/70 bg-gradient-to-t from-black/70 hover:from-orange-700 group-focus:from-orange-700'>
              <div className='flex flex-col'>
              <h1>{title}</h1>
              <h4 className='mt-5 text-sm'>{text}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MarketStories;
