import { LuMenu } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { StateProps } from '../../../type';
import { signOut } from 'next-auth/react';
import { removeUser } from '@/store/nextSlice';
import { useSession, signIn } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';

function BottomHeader() {
    const [hideMobileMenu, setHideMobileMenu] = useState(true);
    const dispatch = useDispatch()
    const { data: session } = useSession()
    const { userInfo } = useSelector((state: StateProps) => state.next)
    const handleSignOut = () => {
        signOut();
        dispatch(removeUser());
    }
    return (
        <div className='w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center relative'>
            <div onClick={() => setHideMobileMenu(true)} className={
                !hideMobileMenu ?
                    ('w-full h-[100vh] absolute left-0 top-0 bg-amazon_blue z-[4999] opacity-90') :
                    ('hidden')}>
            </div>
            <div onClick={() => { setHideMobileMenu(true) }} className={
                hideMobileMenu ?
                    ('w-[70%] min-h-[100%] md:hidden bg-amazon_light fixed top-0 left-0 px-5 py-[50px] z-[5000] translate-x-[-100%] transition-all duration-300') :
                    ('w-[70%] min-h-[100%] md:hidden bg-amazon_light fixed top-0 left-0 px-5 py-[50px] z-[5000] translate-x-0 transition-all duration-300')}>
                <Link href={'/'} className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                    Home
                </Link>
                <Link href={'/notImplemented'} className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                    All
                </Link>
                <Link href={'/notImplemented'} className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                    Today Deals
                </Link>
                <Link href={'/notImplemented'} className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                    Customer Service
                </Link>
                <Link href={'/notImplemented'} className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                    Registry
                </Link>
                <Link href={'/notImplemented'} className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                    Gift Card
                </Link>
                <Link href={'/notImplemented'} className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                    Sell
                </Link>
                {
                    userInfo ? (
                        <button onClick={handleSignOut} className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-red-600 text-amazon_yellow hover:text-red-400 cursor-pointer duration-300'>
                            Sign Out
                        </button>
                    ) : (
                        <button onClick={() => signIn()} className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-red-600 text-amazon_yellow hover:text-red-400 cursor-pointer duration-300'>
                            Sign In
                        </button>
                    )
                }
            </div>
            <p onClick={() => setHideMobileMenu(false)} className='md:hidden flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                <LuMenu className='text-xl' />
            </p>
            <Link href={'/notImplemented'} className='hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                <LuMenu className='text-xl' /> All
            </Link>
            <Link href={'/'} className='hidden md:inline-flex flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                Home
            </Link>
            <Link href={'/notImplemented'} className='hidden md:inline-flex flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                Today Deals
            </Link>
            <Link href={'/notImplemented'} className='hidden md:inline-flex flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                Customer Service
            </Link>
            <Link href={'/notImplemented'} className='hidden md:inline-flex flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                Registry
            </Link>
            <Link href={'/notImplemented'} className='hidden md:inline-flex flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                Gift Card
            </Link>
            <Link href={'/notImplemented'} className='hidden md:inline-flex flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                Sell
            </Link>
            {
                userInfo ? (
                    <button onClick={handleSignOut} className='hidden md:inline-flex flex items-center gap-1 h-8 px-2 border border-transparent hover:border-red-600 text-amazon_yellow hover:text-red-400 cursor-pointer duration-300'>
                        Sign Out
                    </button>
                ) : (
                    <button onClick={() => signIn()} className='hidden md:inline-flex flex items-center gap-1 h-8 px-2 border border-transparent hover:border-red-600 text-amazon_yellow hover:text-red-400 cursor-pointer duration-300'>
                        Sign In
                    </button>
                )
            }
        </div >
    )
}

export default BottomHeader