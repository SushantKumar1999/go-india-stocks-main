import Image from 'next/image';

const UserProfile = ({ src, className }) => {
  return (
    <Image
      src={src}
      alt='user'
      width={50}
      height={50}
      className={`rounded-full ${className}`}
    />
  );
};

export default UserProfile;
