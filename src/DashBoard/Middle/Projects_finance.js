import React from 'react';
import img143 from '../../Icons/image 143.png'
import img141 from '../../Icons/image 141.png'

const Projects_finance = () => {
    return (
        <div className='w-[807px] h-[209px] bg-[#272D35] rounded-[20px] mt-[24px] pt-[27px] pl-[30.5px]'>

            <div class="relative overflow-x-auto">
                <h4 className='text-white font-semibold'>Projects finance</h4>
                <table class="w-full text-sm text-left text-[12px]  font-medium">
                    <thead class="text-xs text-[#7d8186]">
                        <tr>
                            <th scope="col" class="py-3 ">
                                
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Proggress
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Achived
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                View All
                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-white">
                            <th scope="row" class=" py-4 font-medium  whitespace-nowrap flex items-center gap-2">
                                <img src={img141} alt='' />
                                Darby Day
                            </th>
                            <td class="px-6 py-4">
                                Meet the terget
                            </td>
                            <td class="px-6 py-4">
                                $145,000
                            </td>
                            <td class="px-6 py-4">
                                Financial officer
                            </td>

                            <td class="px-6 py-4">
                                . . .
                            </td>
                        </tr>
                        <tr class="text-white">
                            <th scope="row" class=" py-4 font-medium whitespace-nowrap flex items-center gap-2">
                            <img src={img143} alt='' />
                                Helt Diven
                            </th>
                            <td class="px-6 py-4">
                                On Going
                            </td>
                            <td class="px-6 py-4">
                                $299,000
                            </td>
                            <td class="px-6 py-4">
                                Project manager
                            </td>
                            <td class="px-6 py-4">
                                . . .
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>






        </div>
    );
};

export default Projects_finance;