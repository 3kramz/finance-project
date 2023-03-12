import React from 'react';

import Logo from '../../Icons/upToPro.png'

const UpgardeToPro = () => {
    return (
        <div className='text-white bg-[#272D35] w-[207px] h-[209px] rounded-[20px] mt-[24px] flex flex-col items-center px-[35px]' >

           <img src={Logo} alt='Logo' className='w-[50px] h-[50px]  mt-[20px]' />

           <h4 className='text-[15px] font-semibold mt-[18px]'>Upgarde To Pro</h4>
        <p className='text-[#7d8186] text-[10px] text-center'>Check your magicon this Pro Dashbard </p>
        </div>
    );
};

export default UpgardeToPro;