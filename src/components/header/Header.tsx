import Image from 'next/image';
import cartIcon from '../../images/cartIcon.png';
import logoIcon from '../../images/logo.png';
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { StateProps } from '../../../type';
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from 'react';
import { addUser, setIsLoading } from '@/store/nextSlice';

function Header() {
  const {productData, favoriteData, userInfo} = useSelector((state:StateProps)=>state.next)
  const { data: session } = useSession()
  const dispatch = useDispatch()
  useEffect(()=>{
    if(session){
      dispatch(
        addUser({
          name : session?.user?.name,
          email : session?.user?.email,
          image: session?.user?.image,
        })
      )
    }
  },[session])
  return (
    <div className='w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50'>
      <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4'>
        {/* logo */}
        <Link onClick={()=>dispatch(setIsLoading(true))} href='/' className='px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]'>
          <Image className="w-28 object-cover mt-1" src={logoIcon} alt="logoImg"></Image>
        </Link>
        {/* Delivery To  */}
        <div className='px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] hidden xl:inline-flex gap-1'>
          <SlLocationPin />
          <div>
            <p className='text-xs'>Delivery to</p>
            <p className='text-white font-bold uppercase'>USA</p>
          </div>
        </div>
        {/* SearchBar  */}
        <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
          <input className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow' type='text' placeholder='Search next_amazon_yt products' />
          <span className='w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md'>
            <HiOutlineSearch />
          </span>
        </div>
        {/* Sign In  */}
        {
          userInfo ? (
            <div className='flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1'>
              <Image className='rounded-full object-cover' src={userInfo.image} width={32} height={32} alt='userImage' />
              <div className='text-xs text-gray-100 flex flex-col justify-between '>
                <p className='hidden md:block'>{userInfo.name}</p>
                <p className='hidden md:block'>{userInfo.email}</p>
              </div>
            </div>
          ):(

        <div onClick={()=>signIn()} className='text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]'>
          <p>Hello, sign in</p>
          <p className='text-white font-bold flex items-center'>Account & Lists
            <span> <BiCaretDown /> </span>
          </p>
        </div>
          )
        }
        {/* favorite  */}
        <div className='text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]'>
          <p>Marked</p>
          <p className='text-white font-bold'>& Favorite</p>
          {
            favoriteData.length > 0 && <span className='absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 items-center justify-center text-xs text-amazon_yellow'>{favoriteData.length}</span>
          }
        </div>
        {/* Cart  */}
        <Link href='/cart' className='flex items-center px-2 border-[1px] border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative'>
          <Image
            className='w-auto h-8 object-cover'
            src={cartIcon}
            alt='cartImg'
          />
          <p className='text-xs text-white font-boold mt-3'>Cart</p>
          <span className='absolute text-amazon_yellow text-sm z-500 top-2 left-[30px] font-semibold'>{ productData ? productData.length:0 }</span>
      </Link>
    </div>
    </div >
  )
}

export default Header 