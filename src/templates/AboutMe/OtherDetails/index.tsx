import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function AppoarchMethod(props: any) {
    return (
        <section className={`${props?.layoutStyle}`}>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-[40px] mb-[50px]">
                <div className="lg:col-span-2 border border-[#E7EDF5] rounded-[25px] px-[20px] py-[30px] sm:p-[40px] bg-[#fff]">
                    <p className={`text-[28px] leading-[30px] font-[400] text-black pb-[30px]`}>{props?.things_do?.title}</p>
                    <div>
                        {props?.things_do?.lists.map((item: any, index: any) => {
                            return (
                                <p key={index} className={`text-[20px] leading-[30px] font-[400] text-[#595959] py-[10px] first:pt-0 last:pb-0`}>{item}</p>
                            )
                        })}
                    </div>
                </div>
                <div className="lg:col-span-4 border border-[#E7EDF5] rounded-[25px] px-[20px] py-[30px] sm:p-[40px] bg-[#fff]">
                    <p className={`text-[28px] leading-[30px] font-[400] text-black pb-[30px]`}>{props?.my_stack?.title}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-[30px]">
                        {props?.my_stack?.lists.map((item: any, index: any) => {
                            return (
                                <React.Fragment key={index}>
                                    <AnimatedWrapper customStyle={`flex`}>
                                        <div className="flex flex-col items-center justify-between border border-[#E7EDF5] rounded-[25px] p-[30px] max-w-[178px] w-full mx-auto">
                                            <ImageLoader
                                                className=""
                                                src={StaticPath(item?.icon)}
                                                alt={item?.icon_alt}
                                                width={item?.width}
                                                height={85}
                                            />
                                            <p className={`text-[20px] leading-[30px] font-[400] text-black pt-[30px] whitespace-nowrap`}>{item?.label}</p>
                                        </div>
                                    </AnimatedWrapper>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="border border-[#E7EDF5] rounded-[25px] px-[20px] py-[30px] sm:p-[40px] bg-[#fff]">
                <p className={`text-[28px] leading-[30px] font-[400] text-black pb-[30px]`}>{props?.personal_doing?.title}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
                    {props?.personal_doing?.lists.map((item: any, index: any) => {
                        return (
                            <React.Fragment key={index}>
                                <AnimatedWrapper>
                                    <div className="flex flex-col items-center justify-center border border-[#E7EDF5] rounded-[25px] p-[30px] max-w-[215px] w-full mx-auto">
                                        <ImageLoader
                                            className=""
                                            src={StaticPath(item?.icon)}
                                            alt={item?.icon_alt}
                                            width={item?.width}
                                            height={85}
                                        />
                                        <p className={`text-[20px] leading-[30px] font-[400] text-black pt-[30px]`}>{item?.label}</p>
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