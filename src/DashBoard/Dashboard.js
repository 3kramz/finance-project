import React from 'react';
import Left from './Left/Left';
import Middle from './Middle/Middle';
import Right from './Right/Right';
import Rectangle225 from '../Icons/Rectangle 225.png';
import Rectangle226 from '../Icons/Rectangle 226.png';


const Dashboard = () => {
    return (
      <div className="flex justify-center items-center full-bg  w-[1665px] h-[1000px] ">
          <div className='p-[32px] rounded-[40px] flex justify-around w-[1465px] h-[900px] bg-[#0E131A] '>
            <Left/>
            <Middle/>
            <Right/>
            
        </div>
      </div>
    );
};

export default Dashboard;