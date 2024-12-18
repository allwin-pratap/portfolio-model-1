import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import styles from "./keyImprovement.module.scss";
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function KeyImprovements(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[40px] font-[400] text-black pb-[5px] border-b border-[#E7EDF5]`}>
                {props?.title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[80px]">
                {props?.key_improve?.map((keys: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <AnimatedWrapper customStyle={`flex rounded-[20px] border border-[#E7EDF5] ${props?.borderTransparent ? 'border-transparent' : ''}`}>
                                <div className={`max-md:max-w-[420px] max-md:mx-auto flex flex-col p-[30px] rounded-[23px] overflow-hidden relative ${styles[`${keys.bg_color}`]}`}>
                                    {
                                        (keys.is_image) ? (
                                            <React.Fragment>
                                                <ImageLoader
                                                    className="max-w-[100px]"
                                                    src={StaticPath(keys?.img)}
                                                    alt={keys?.img_alt}
                                                    width={keys?.width}
                                                    height={99}
                                                />
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <div
                                                    dangerouslySetInnerHTML={{ __html: keys?.icon }}
                                                />
                                            </React.Fragment>
                                        )
                                    }
                                    <div>
                                        <p className="text-[24px] font-[400] text-black py-[20px]">{keys.title}</p>
                                        <p className={`text-[18px] font-[300] leading-[24px] text-black`}>{keys.description}</p>
                                    </div>
                                </div>
                            </AnimatedWrapper>
                        </React.Fragment>
                    )
                })}
            </div>
        </section >
    );
}