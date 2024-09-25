import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";
import styles from "./refreshedDesign.module.scss";
import Link from 'next/link';

export default function RefreshedDesign(props: any) {
    const { data } = props;
    return (
        <section className={`${props?.layoutStyle}`}>
            <p className={`text-[40px] font-[400] leading-[1.25] text-black`}>{data?.title}</p>
            <div className="pt-[80px]">
                {data?.designs?.map((design: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <AnimatedWrapper customStyle={`pb-[80px] last:pb-0`}>
                                <div className="max-w-[600px] mx-auto">
                                    <p className={`text-[14px] leading-[21px] font-[400] text-[#595959] text-center`}>{design?.tag}</p>
                                    <p className={`text-[36px] leading-[42px] font-[400] text-black text-center pt-[20px] pb-[10px]`}>{design?.title}</p>
                                    <p className={`text-[20px] leading-[30px] font-[300] text-[#595959] text-center`}>{design?.description}</p>
                                </div>
                                <div className={`mt-[60px] border border-[#F1F7FF] rounded-[25px] p-[35px] md:p-[55px] lg:p-[70px] ${styles[`${design?.bg_color}`]}`}>
                                    {
                                        (design?.is_behance) ? (
                                            <div className='flex flex-col items-center'>
                                                <p className='text-[20px] leading-[30px] font-[400] text-black text-center pb-[30px]'>{design?.behance_data?.desc}</p>
                                                <Link
                                                    href={design?.behance_data?.btn_url}
                                                    className={`text-[20px] leading-[30px] font-[400] text-white p-[15px] bg-black rounded-[55px]`}
                                                    target={`_blank`}>{design?.behance_data?.btn_label}
                                                </Link>
                                            </div>
                                        ) : (
                                            <div className="max-w-[815px] mx-auto flex justify-center items-center">
                                                <ImageLoader
                                                    className="rounded-[25px]"
                                                    src={StaticPath(design?.img)}
                                                    alt={design?.img_alt}
                                                    width={design?.width ?? 815}
                                                    height={design?.height ?? 580}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            </AnimatedWrapper>
                        </React.Fragment>
                    )
                })}
            </div>
            {
                (data?.final_outcome) && (
                    <AnimatedWrapper>
                        <p className="text-[40px] leading-[1.5] font-[400] text-black pb-[40px]">Outcome</p>
                        <p className="text-[20px] leading-[30px] font-[300] text-[#595959]">{data?.final_outcome}</p>
                    </AnimatedWrapper>
                )
            }
        </section>
    );
}