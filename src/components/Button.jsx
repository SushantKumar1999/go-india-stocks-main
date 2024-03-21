import Link from 'next/link';

const Button = ({
  className,
  children,
  type = 'button',
  variant,
  sameTab = true,
  onClick,
  href,
  size = 'sm',
  center = false,
  ...rest
}) => {
  const classes = `${size === 'sm' ? 'p-3 px-5 text-sm' : 'text-sm p-4 px-6'} ${
    center ? 'mx-auto' : ''
  } ${
    variant === 'outline' ? 'border-[1.5px] border-gray-400' : ''
  } block w-fit font-medium capitalize rounded text-accent hover:bg-gray-200 focus:outline-none focus:bg-gray-200 duration-150 cursor-pointer ${className}`;

  if (type === 'link') {
    return (
      <Link
        className={classes}
        href={href}
        target={sameTab ? '_self' : '_blank'}
        rel='noopener noreferrer'
        {...rest}
      >
        {children}
      </Link>
    );
  }

  if (type == 'button') {
    return (
      <button type={type} className={classes} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  return <></>;
};

export default Button;
