import React from 'react';
import styles from './Marquee.module.scss';

const Marquee = (props: any) => {
    return (
        <div className={styles['marquee']}>
            <p className='text-[32px] sm:text-[40px] font-[500] text-black pb-[5px] text-center'>
                {/* {props?.title} */}
                <span className='inline-block px-[20px]'>MOTIVATION</span>
                <span className='inline-block w-[10px] h-[10px] bg-black transform rotate-45 translate-x-0 translate-y-[-9px]'></span>
                <span className='inline-block px-[20px]'>CUSTOMIZATION</span>
                <span className='inline-block w-[10px] h-[10px] bg-black transform rotate-45 translate-x-0 translate-y-[-9px]'></span>
                <span className='inline-block px-[20px]'>NETWORKING</span>
            </p>
        </div>
    );
};

export default Marquee;