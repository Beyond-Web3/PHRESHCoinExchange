import SearchCollections from '/components/SearchCollections'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Account from '/components/Account'
import NativeBalance from './NativeBalance'


function Navbar() {
    return (
        <div className="bg-blue-700 h-1/6 w-screen flex flex-grow z-50 items-center shadow-lg">
            <div className='text-white font-bold text-md md:text:lg lg:text-3xl justify-center ml-2 md:ml-5 lg:ml-10'>YakaCoin</div>

                <div className='hidden  md:flex p-1 h-16 w-16 rounded-full bg-white ml-10 justify-center'>
                    <Image src="/yaklogo.png"height={60} width={60} alt='YakHolder' className='rounded-full ' />
                </div>
              <div className='flex flex-grow ml-6 justify-between  '>
                <div className='rounded-xl hover:scale-105 p-1'>
                    <Link href="/yakaSwap" passHref className=" "><a className="text-white md:text-xl text-sm font-semibold ">Swap</a></Link>
                </div>
                
                <div className='rounded-xl hover:scale-105 p-1'>
                    <Link href="/" passHref className=" "><a className="text-white md:text-xl text-sm font-semibold ">NFT</a></Link>
                </div>
                <div className='rounded-xl hover:scale-105 p-1'>
                    <Link href="/buycrypto" passHref className=" "><a className="text-white md:text-xl text-sm font-semibold ">Buy Crypto</a></Link>
                </div>
                <div className='rounded-xl hover:scale-105 p-1'>
                    <Link href="/" passHref className=" "><a className="text-white md:text-xl text-sm font-semibold ">YakaPay</a></Link>
                </div>
              </div>
              <SearchCollections/>
              <div className='flex-grow text-center lg:ml-10'>
                    <Account />
              </div>
                    <div className=' flex items-center mr-4'>

                    <NativeBalance/>                  
                    </div>
        </div>
    )
}

export default Navbar
