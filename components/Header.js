import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <nav className='flex flex-row items-center p-3 '>   
        <div className='w-full justify-center item-center'>
          <div className=' flex-row lg:ml-auto w-full items-center justify-center flex lg:h-auto'>
            <Link href='/'>
              <a className='   px-3 py-2 rounded font-medium items-center justify-center text-xl'>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='   px-3 py-2 rounded font-medium items-center justify-center text-xl'>
                Services
              </a>
            </Link>
            <Link href='/'>
              <a className='  px-3 py-2 rounded font-medium items-center justify-center text-xl'>
                About us
              </a>
            </Link>
            <Link href='/'>
              <a className='   px-3 py-2 rounded font-medium items-center justify-center text-xl'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};