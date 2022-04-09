import React from 'react'

function IndexCard() {
    return (
    <div className='mx-auto rounded-2xl w-80 h-98 bg-gradient-to-tr from-white to-orange-50 justify-center mt-10'>
      <div className='text-lg text-slate-800 text-center font-bold'>Quick Links</div>
      <div className='mx-auto w-3/4 text-center  '>
        <div className='bg-gradient-to-b from-blue-400 to-blue-600  text-center shadow-xl mb-3 mt-3 h-1/4 p-4 rounded-xl'>
                <div className='text-black text-center text-lg font-semibold'>Update Profile</div>
           </div>
        </div>
      <div className='mx-auto w-3/4 text-center '>
        <div className='bg-gradient-to-b from-red-600 to-red-400  text-center shadow-xl mb-3 mt-3 h-1/4 p-4 rounded-xl'>
                <div className='text-black text-center text-lg font-semibold'>Swap Coins!</div>
           </div>
        </div>
        <div className='mx-auto w-3/4 text-center '>
        <div className='bg-gradient-to-b from-green-600 to-green-400  text-center shadow-xl mb-3 mt-3 h-1/4 p-4 rounded-xl'>
                <div className='text-black text-center text-lg font-semibold'>Buy Crypto!</div>
           </div>
        </div>

        
    </div>
    )
}

export default IndexCard
