import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";
import styles from "./refreshedDesign.module.scss";

export default function RefreshedDesign(props: any) {
    const { data } = props;
    return (
        <section className={`${props?.layoutStyle}`}>
            <p className={`text-[40px] font-[400] leading-[1.25] text-black`}>{data?.title}</p>
            <div className="pt-[80px]">
                {data?.designs?.map((design: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <AnimatedWrapper>
                                <div key={index} className="pb-[80px]">
                                    <div className="max-w-[600px] mx-auto">
                                        <p className={`text-[14px] leading-[21px] font-[400] text-[#595959] text-center`}>{design?.tag}</p>
                                        <p className={`text-[36px] leading-[42px] font-[400] text-black text-center pt-[20px] pb-[10px]`}>{design?.title}</p>
                                        <p className={`text-[20px] leading-[30px] font-[300] text-[#595959] text-center`}>{design?.description}</p>
                                    </div>
                                    <div className={`mt-[60px] border border-[#F1F7FF] rounded-[25px] ${styles[`${design.bg_color}`]}`}>
                                        <div className="max-w-[815px] mx-auto">
                                            <ImageLoader
                                                className="rounded-[25px]"
                                                src={StaticPath(design?.img)}
                                                alt={design?.img_alt}
                                                width={design?.width ?? 815}
                                                height={design?.height ?? 580}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedWrapper>
                        </React.Fragment>
                    )
                })}
            </div>
            <AnimatedWrapper>
                <p className="text-[40px] leading-[1.5] font-[400] text-black pb-[40px]">Outcome</p>
                <p className="text-[20px] leading-[30px] font-[300] text-[#595959]">{data?.final_outcome}</p>
            </AnimatedWrapper>
        </section>
    );
}