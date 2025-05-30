import React from 'react';
import Image from 'next/image';
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
const FeedCard: React.FC = () => {
    return <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer ">
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-1'>

    <Image className='rounded-full'
        src="data:image/png;base64,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" alt="Placeholder"
        width={50} height={50} />
            </div>
            <div className='col-span-11'>
                   <h5 className='text-xl' >Mithilesh Deore</h5>
                 
                <p>
                    Mithilesh Deore is a software developer with a passion for creating innovative and user-friendly applications. With a strong background in web development,
                  </p>
                 <div className='flex justify-between items-center mt-2 p-2 w-[90%] '>
                <div>
                    <BiMessageRounded className='text-2xl text-gray-500 hover:text-blue-500 transition-all cursor-pointer' />
                </div>
                <div>
                    <FaRetweet className='text-2xl text-gray-500 hover:text-green-500 transition-all cursor-pointer' />
                </div>
                <div>
                    <IoIosHeartEmpty className='text-2xl text-gray-500 hover:text-red-500 transition-all cursor-pointer' />
                </div>
                <div>
                    <LuUpload className='text-2xl text-gray-500 hover:text-blue-500 transition-all cursor-pointer' />
                </div>
                 </div>
                   
                   </div>    
         
        </div>
    </div>;
};

export default FeedCard;
