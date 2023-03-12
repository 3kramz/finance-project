import React from 'react';
import Left from './Left/Left';
import Middle from './Middle/Middle';
import Right from './Right/Right';

const Dashboard = () => {
    return (
        <div className='flex justify-around w-[1465px] h-[900px] bg-[#0E131A] '>
            <Left/>
            <Middle/>
            <Right/>
            
        </div>
    );
};

export default Dashboard;