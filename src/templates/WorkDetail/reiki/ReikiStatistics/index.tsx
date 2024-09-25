import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';

export default function ReikiStatistics(props: any) {
    return (
        <section className={`${props?.layoutStyle} px-[30px] py-[40px]`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {props?.data?.map((detail: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <AnimatedWrapper customStyle={`flex border border-solid border-[#F1F7FF] p-[30px] rounded-[25px] ${index == 2 ? 'bg-[#F8F2FF]' : ''}`}>
                                <div className={`flex flex-col gap-[30px]`}>
                                    <p className="text-[32px] md:text-[48px] font-[400] text-[#000] text-center md:text-left">{detail?.title}</p>
                                    <p className="text-[16px] md:text-[20px] font-[300] text-[#595959] text-center md:text-left">{detail?.description}</p>
                                </div>
                            </AnimatedWrapper>
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    );
}