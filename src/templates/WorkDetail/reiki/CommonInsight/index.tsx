import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function CommonInsight(props: any) {
    const { data } = props;
    return (
        <section className={`${props?.layoutStyle}`}>
            <p className={`text-[30px] font-[400] leading-[1.25] text-[#000] pb-[5px] border-b border-[#E7EDF5]`}>{data?.title}</p>
            <div className="grid grid-cols-1 gap-[30px] mt-[80px]">
                {data?.insights.map((detail: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <AnimatedWrapper customStyle={`flex border border-solid border-[#E7EDF5] p-[30px] rounded-[25px]`}>
                                <div className={`flex flex-col md:flex-row max-md:justify-center max-md:items-center gap-[50px]`}>
                                    <div className='w-full bg-[#FAFAFA] rounded-[25px]'>
                                        <ImageLoader
                                            className="rounded-[25px] max-w-[315px] mx-auto"
                                            src={StaticPath(detail?.img)}
                                            alt={detail?.img_alt}
                                            width={detail?.width ?? 315}
                                            height={detail?.height ?? 400}
                                        />
                                    </div>
                                    <div>
                                        {detail?.description?.map((desc: any, index: any) => {
                                            return (
                                                <p key={index} className={`text-[20px] leading-[30px] font-[300] text-[#595959] py-[15px] first:pt-0 last:pb-0`}>{desc}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </AnimatedWrapper>
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    );
}