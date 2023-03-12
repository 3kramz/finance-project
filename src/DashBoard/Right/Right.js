import React from 'react';
import Profile from '../../Icons/User-Profile.png';
import users from '../../Icons/3 User.png';
import document from '../../Icons/Document.png';
import activity from '../../Icons/Activity.png';
import frame42 from '../../Icons/Frame 42.png'
import frame43 from '../../Icons/Frame 43.png'
import frame50 from '../../Icons/Frame 50.png'
import frame56 from '../../Icons/Frame 56.png'



const Right = () => {
    return (


        <div className=''>

            <div className='pt-[20px] w-[326px] h-[703px] bg-[#272D35] rounded-[20px]'>
                <div className=' w-[326px] mt-[21px] flex flex-col items-center justify-center '>
                    <img width={99} src={Profile} alt="" className='text-center' />
                    <h4 className='text-white text-[16px] font-semibold'>Emmy Dansom</h4>
                    <p className='text-[12px] text-[#7d8186] '>CEO</p>
                </div>

                <div className='mx-[34px] mt-[24px] flex flex-row items-center justify-between'>
                    <div className='w-[70px] h-[59px] bg-[#6F4CA4] rounded-[10px] flex justify-center items-center'>
                        <img className='w-[19px] h-[19px]' src={users} alt='' />

                    </div>
                    <div className='w-[70px] h-[59px] bg-[#6F4CA4] rounded-[10px] flex justify-center items-center'>
                        <img className='w-[19px] h-[19px]' src={activity} alt='' />

                    </div>
                    <div className='w-[70px] h-[59px] bg-[#6F4CA4] rounded-[10px] flex justify-center items-center'>
                        <img className='w-[19px] h-[19px]' src={document} alt='' />

                    </div>
                </div>

                <div className='ml-[34px] my-[41px] w-[258px] h-[2px] bg-[#FFFFFF]'></div>

                <div className=' mx-[34px]' >
                    <h4 className='text-white text-[14px] font-semibold  mb-[8px]'>About</h4>
                    <p className='text-[#7d8186] text-[10px] font-medium mb-[8px]'>Organized activities to make  money  and sell goods and services for profit.</p>
                </div>




                <div className='mt-[30px] mb-[24px] mx-[34px] flex gap-3 items-center' >
                    <img className='w-[64px] h-[64px]' src={frame43} alt='' />
                    <div>
                        <h3 className='text-white text-[14px] font-semibold '>Jonie Juger</h3>
                        <p className='text-[#7d8186] text-[10px] font-medium mb-[8px]'>Product Manager</p>
                    </div>
                </div>

                <div className='my-[24px] mx-[34px] flex gap-3 items-center' >
                    <img className='w-[64px] h-[64px]' src={frame42} alt='' />
                    <div>
                        <h3 className='text-white text-[14px] font-semibold '>Sarah Hosten</h3>
                        <p className='text-[#7d8186] text-[10px] font-medium mb-[8px]'>Graphic Designer</p>
                    </div>
                </div>

                <div className='my-[24px] mx-[34px] flex gap-3 items-center' >
                    <img className='w-[64px] h-[64px]' src={frame50} alt='' />
                    <div>
                        <h3 className='text-white text-[14px] font-semibold '>Deckred Anne</h3>
                        <p className='text-[#7d8186] text-[10px] font-medium mb-[8px]'>Financial Treasurer</p>
                    </div>
                </div>


            </div>

            <div className='py-[26.22px] px-[34.04px] mt-[24px] w-[326px] text-white h-[109px] bg-[#272D35] rounded-[20px] flex  items-center gap-5'>

                <div className=''>
                    <h2  className='text-white text-[16px] font-semibold'>Send Money</h2>
                    <div className='mt-[12px]  flex items-center gap-3'><img className='h-[17px] w-[20px]' src={frame56} alt='' /> Your Card</div>
                </div>
                <div>
                    <h2 className='text-white text-[24px] font-semibold'>$145,000</h2>
                </div>

            </div>

        </div>

    );
};

export default Right;