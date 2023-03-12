import React from 'react';

import Home from '../../Icons/Home.png'
import Document from '../../Icons/Document.png'
import LogOut from '../../Icons/Logout.png'
import Profile from '../../Icons/Profile.png'
import Settings from '../../Icons/Setting.png'
import TimeSquare from '../../Icons/Time Square.png'
import toggle from '../../Icons/toggle_off_black_24dp 2.png'



import Calender from '../../Icons/Calendar.png'


const Dash = () => {
    return (
        <div className=' w-[207px] h-[603px] rounded-[20px] bg-[#272D35] py-[40.5px]' >
            <div className=' text-[#7d8186] font-medium'>
                <p className='text-white
                 flex ml-[31px] mb-[35px] font-bold'> <img src={Home} alt=''/> Dashboard</p>
                <p className='flex ml-[31px] my-[35px]'>  <img src={Document} alt=''/> Documents</p>
                <p className='flex ml-[31px] my-[35px]'>  <img src={TimeSquare} alt=''/> Payments</p>
                <p className='flex ml-[31px] my-[35px]'>  <img src={Calender} alt=''/> Calender</p>
                <p className='flex ml-[31px] my-[35px]'>  <img src={Profile} alt=''/> Profile</p>
                  <br/>
                       <div className='ml-[30px] w-[124px] h-[2px] bg-[#FFFFFF]'></div>
                   <br/>
                <p className='flex ml-[31px] my-[35px]'> <img src={toggle} alt=''/>  DarkMode</p>
                <p className='flex ml-[31px] my-[35px]'> <img src={Settings} alt=''/>  Settings</p>
                <p className='flex ml-[31px] my-[35px] text-[#CD5656]'> <img src={LogOut} alt=''/>  LogOut</p>
               
            </div>
           
        </div>
    );
};

export default Dash;