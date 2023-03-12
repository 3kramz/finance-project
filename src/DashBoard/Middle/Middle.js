import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from './Chart';
import Navbar from './Nav';
import ProjectsFinance from './Projects_finance';
import icon6 from '../../Icons/Ellipse 13.png';
import icon7 from '../../Icons/Ellipse 14.png';

const Middle = () => {
    const percentage = 66;
    const percentage2 = +86;
    return (
        <div className=' w-[808px] h-[700px] '>
            <Navbar />

            <div className='flex gap-7 my-[24px]'>

                <div className='card1 flex justify-center items-center gap-14'>
                    <div className=''>
                        <h1 className='font-[14px] text-white'>Total Finance</h1>
                        <p className='font-[27px] text-white'>9,000k</p>
                    </div>
                    <div >
                        <div style={{ width: 75, height: 75 }}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        </div>
                    </div>
                </div>
                <div className='card2 flex justify-center items-center gap-14'>

                    <div>
                        <h1 className='font-[14px] text-white'>Total Finance</h1>
                        <p className='font-[27px] text-white'>9,000k</p>
                    </div>
                    <div>
                        <div style={{ width: 75, height: 75 }}>
                            <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
                        </div>
                    </div>
                </div>
            </div>


{/* chart main */}
<div className='flex gap-6'>
                      

                        <div className=''>

                            <div className='chart3 p-8'>
                                <h1 className='text-white text-center'>Monday, 28 December 2021</h1>
                                <Chart />
                            </div>

                        </div>
                        {/* chart4 */}
                        <div className=''>

                            <div className='chart3 p-8'>
                                <h1 className='text-white text-center'>Your Finance Target</h1>
                                <div className='mt-[24px] flex justify-center'>
                                    <div style={{ width: 124, height: 124 }}>
                                        <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
                                    </div>
                                </div>

                                <div className='flex items-center justify-between'>

                                    <div className='mt-[25px]'>
                                        <div className='flex items-center'>
                                            <img className='mt-1' src={icon6} alt="" />
                                            <h1 className='text-white font-[12px]'>Result Achieved</h1>
                                        </div>
                                    </div>

                                    <div className='mt-[25px]'>
                                        <div className='flex items-center gap-2'>
                                            <img className='mt-1' src={icon7} alt="" />
                                            <h1 className='text-white font-[12px]'>In The Process</h1>
                                        </div>


                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>








            <ProjectsFinance />
        </div>
    );
};

export default Middle;