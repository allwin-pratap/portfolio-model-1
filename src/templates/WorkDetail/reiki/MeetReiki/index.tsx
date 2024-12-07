import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function MeetReiki(props: any) {
    const { data } = props;
    return (
        <section className={`${props?.layoutStyle}`}>
            <p className={`text-[40px] font-[400] leading-[1.25] text-[#000] pb-[5px] border-b border-[#E7EDF5]`}>{data?.title}</p>
            <div className="flex flex-col md:flex-row justify-center items-center bg-[#FDFCFF] border border-solid border-[#E7EDF5] rounded-[25px] gap-[50px] p-[30px] mt-[80px]">
                <div className="max-w-[165px] w-full relative">
                    <ImageLoader
                        className="rounded-[25px]"
                        src={StaticPath(data?.img)}
                        alt={data?.img_alt}
                        width={data?.width ?? 165}
                        height={data?.height ?? 235}
                    />
                </div>
                <p className={`text-[20px] leading-[30px] font-[300] text-black`}>
                    {data?.description}
                </p>
            </div>
            <div className='border border-solid border-[#E7EDF5] p-[30px] rounded-[25px] mt-[80px]'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-[10px] pb-[20px]'>
                    <div
                        dangerouslySetInnerHTML={{ __html: data?.details?.icon }}
                    />
                    <p className={`text-[24px] font-[400] text-[#000]`}>{data?.details?.title}</p>
                </div>
                <p className={`text-[20px] font-[300] leading-[30px] text-[#595959]`}>{data?.details?.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[50px]">
                    {data?.details?.modes.map((mode: any, index: any) => {
                        return (
                            <React.Fragment key={index}>
                                <AnimatedWrapper customStyle={`flex items-center justify-center border border-solid border-[#E7EDF5] p-[30px] rounded-[25px]`}>
                                    <div className={`flex flex-col justify-center items-center gap-[20px]`}>
                                        <div className='max-w-[315px] w-full relative'>
                                            <ImageLoader
                                                className="rounded-[25px]"
                                                src={StaticPath(mode?.img)}
                                                alt={mode?.img_alt}
                                                width={mode?.width ?? 315}
                                                height={mode?.height ?? 400}
                                            />
                                        </div>
                                        <p className={`text-[24px] font-[400] text-[#000]`}>{mode?.title}</p>
                                    </div>
                                </AnimatedWrapper>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}