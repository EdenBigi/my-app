
import { IoDiamondOutline } from 'react-icons/io5';
import { RiLoader3Line } from 'react-icons/ri';



const Loading = () => {
    return (
        <div className="flex items-center text-center">
            <IoDiamondOutline className='animate-spin w-6 h-6 ml-[16px] ' />
            <RiLoader3Line className='w-14 h-14 fixed animate-spin ' />


        </div>

    );
};

export default Loading;
