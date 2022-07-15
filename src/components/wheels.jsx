import { useState } from 'react';
import Car from '../assets/audi.png';
import wheel1 from '../assets/wheel1.png';
import wheel2 from '../assets/wheel2.webp';
import wheel3 from '../assets/wheel3.webp';
import wheel4 from '../assets/wheel5.png';

const Wheels = () => {
    const [wheel, setWheel] = useState(wheel1);

    return (
        <div className="flex flex-col">
            <div className='flex justify-center'>
                <div className='flex relative'>
                    <img src={ Car } alt="car" />
                    {/*  */}
                    <img className='absolute max-w-[14%] ml-[15.5%] mt-[22.5%] sm:w-[82px] sm:ml-[93px] sm:mt-[135px]' src={wheel} alt="wheel" />
                    <img className='absolute max-w-[14%] ml-[76%] mt-[22.5%] sm:w-[82px] sm:ml-[457px] sm:mt-[138px]' src={wheel} alt="wheel" />
                </div>
            </div>
            
            <div className="flex justify-center gap-4">
                <div className='w-24 cursor-pointer hover:scale-125' onClick={() => setWheel(wheel1)}>
                    <img src={ wheel1 } className="wheel1" alt="wheel1" />
                </div>
                <div className='w-24 cursor-pointer hover:scale-125' onClick={() =>setWheel(wheel2)}>
                    <img src={ wheel2 } className="wheel2" alt="wheel2" />
                </div>
                <div className='w-24 cursor-pointer hover:scale-125' onClick={() =>setWheel(wheel3)}>
                    <img src={ wheel3 } className="wheel3" alt="wheel3" />
                </div>
                
                <div className='w-24 cursor-pointer hover:scale-125' onClick={() =>setWheel(wheel4)}>
                    <img src={ wheel4 } className="wheel4" alt="wheel4" />
                </div>
            </div>
        </div>
    );
}

export default Wheels;
