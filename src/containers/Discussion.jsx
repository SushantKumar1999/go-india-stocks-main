import { Card, Post, } from '@/components';
import posts from '@/content/post';

const Discussion = ({ className }) => {
  return (
    <section className={`flex-grow w-6/12 p-2 xl:p-5 h-[calc(100vh-230px)] ${className}`}>
      <h1 className='hidden heading-primary md:block'>Discussion fourm</h1>
      <div className='px-0 py-3 space-y-2 xs:space-y-3 md:space-y-4 xl:px-10 '>
        <div className='h-[calc(100vh-400px)] xs:h-[calc(100vh-350px)] md:h-[calc(140vh-450px)] py-5 space-y-5 overflow-y-scroll'>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discussion;
