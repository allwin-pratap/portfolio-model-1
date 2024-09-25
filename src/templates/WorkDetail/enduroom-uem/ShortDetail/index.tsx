import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";
import styles from "./shortDetail.module.scss";

export default function ShortDetail(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[40px] font-[400] text-black`}>
                {props?.data?.title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-4 gap-[30px] mt-[80px]">
                {props?.data?.short_details?.map((detail: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <AnimatedWrapper customStyle={`flex ${index == 0 ? 'lg:col-span-3 ' : ''}${index == 1 ? 'lg:col-span-2 lg:col-start-4 ' : ''}${index == 2 ? 'md:col-span-2 lg:col-span-5 lg:row-start-2 ' : ''}${index == 3 ? 'lg:col-span-2 lg:row-start-3 ' : ''}${index == 4 ? 'lg:col-span-3 lg:col-start-3 lg:row-start-3 ' : ''}${index == 5 ? 'lg:col-span-3 lg:row-start-4 ' : ''}${index == 6 ? 'lg:col-span-2 lg:col-start-4 lg:row-start-4' : ''}`}>
                                <div className={`flex flex-col w-full p-[40px] rounded-[23px] max-md:max-w-[420px] max-md:mx-auto ${index == 2 ? 'md:!flex-row' : ''} overflow-hidden ${styles[`${detail?.bg_color}`]}`}>
                                    <div>
                                        <p className="text-[22px] md:text-[32px] font-[400] text-black text-center md:text-left">{detail?.title}</p>
                                    </div>
                                    <div className={`pt-[40px] max-w-[880px] mx-auto  ${index == 2 || index == 6 ? '!mr-0' : ''}`}>
                                        <ImageLoader
                                            src={StaticPath(detail?.img)}
                                            alt={detail?.img_alt}
                                            width={detail?.width}
                                            height={detail?.height}
                                        />
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