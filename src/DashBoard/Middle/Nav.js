import React from 'react';
import SearchIcon from '../../Icons/icon-search.png'
import Message from '../../Icons/Message.png'
import Notification from '../../Icons/Notification.png'


const Nav = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='relative'>
                <input type="text" placeholder='Tap hare to search' className='bg-[#272D35] text-white w-[577px]  h-[77px] pl-[76px] rounded-[20px] border-[1px] border-[#272D35] text-[14px]focus:outline-none focus:border-[#272D35] focus:ring-0 ' />

                <img src={SearchIcon} alt='' className='absolute top-[27px] left-[32px]' />
            </div>

          
                <div className='relative bg-[#272D35] w-[92px] h-[72px] flex justify-center items-center rounded-[20px]'>
                    <img src={Message} alt='' className='w-[25px] absulute' />
                    <div className='text-white absolute top-[10px] right-[25px] w-[24px] h-[24px] bg-[#6F4CA4] rounded-full flex justify-center items-center'>2</div>
                    
                </div>

                <div className='relative bg-[#272D35] w-[92px] h-[72px] flex justify-center items-center rounded-[20px]'>
                    <img src={Notification} alt='' className='w-[25px] absulute' />
                    <div className='absolute top-[10px] right-[25px] w-[24px] h-[24px] bg-[#6F4CA4] rounded-full flex justify-center items-center'>8</div>

                </div>
            
            
            </div>

           




       
    );
};

export default Nav;