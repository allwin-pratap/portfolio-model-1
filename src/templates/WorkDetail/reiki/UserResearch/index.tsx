import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function UserResearch(props: any) {
    return (
        <section className={`${props?.layoutStyle} px-[30px] py-[40px]`}>
            <p className={`text-[40px] leading-[57px] font-[400] text-black`}>
                {props?.data?.title}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px] mt-[80px]">
                {props?.data?.research.map((detail: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <AnimatedWrapper customStyle={`flex border border-solid border-[#F1F7FF] p-[30px] rounded-[25px]`}>
                                <div className={`flex flex-col gap-[30px]`}>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: detail?.icon }}
                                    />
                                    <p className="text-[16px] md:text-[20px] font-[300] text-[#595959] text-center sm:text-left">{detail?.description}</p>
                                </div>
                            </AnimatedWrapper>
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    );
}