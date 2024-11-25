import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";
import styles from "./refreshedDesign.module.scss";
import Link from 'next/link';

export default function RefreshedDesign(props: any) {
    const { data } = props;

    const renderDesignContent = (design: any) => {
        switch (design?.type) {
            case "behance":
                return (
                    <div className='relative m-[-35px] md:m-[-55px] lg:m-[-70px]'>
                        <div className='max-w-[980px] mx-auto'>
                            <ImageLoader
                                src={StaticPath(design?.behance_data?.img)}
                                alt={design?.behance_data?.img_alt}
                                width={design?.behance_data?.width ?? 815}
                                height={design?.behance_data?.height ?? 580}
                                quality={75}
                            />
                        </div>
                        <div className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] flex flex-col items-center'>
                            <p className='text-[20px] leading-[30px] font-[400] text-black text-center pb-[30px]'>
                                {design?.behance_data?.desc}
                            </p>
                            <Link
                                href={design?.behance_data?.btn_url}
                                className='text-[20px] leading-[30px] font-[400] text-white p-[15px] bg-black rounded-[55px]'
                                target='_blank'
                            >
                                {design?.behance_data?.btn_label}
                            </Link>
                        </div>
                    </div>
                );
            case "multi_img":
                return (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-4 gap-[30px]'>
                        {
                            design?.improved.map((improve: any, index: any) => {
                                return (
                                    <React.Fragment key={index}>
                                        <AnimatedWrapper customStyle={`flex flex-col border border-[#E7EDF5] rounded-[20px] md:py-[30px] md:px-[20px] ${index == 0 ? 'lg:row-span-2 lg:col-start-1 lg:row-start-2' : ''} ${index == 1 ? 'lg:row-span-2 lg:col-start-2 lg:row-start-1' : ''} ${index == 2 ? 'lg:row-span-2 lg:col-start-2 lg:row-start-3' : ''} ${index == 3 ? 'lg:row-span-2 lg:col-start-3 lg:row-start-2' : ''}`}>
                                            <div>
                                                <ImageLoader
                                                    src={StaticPath(improve?.img)}
                                                    alt={improve?.img_alt}
                                                    width={improve?.width ?? 235}
                                                    height={improve?.height ?? 160}
                                                    quality={75}
                                                />
                                            </div>
                                            <p className='text-[24px] leading-[30px] font-[500] text-black text-center sm:text-left pt-[30px] pb-[20px]'>
                                                {improve?.title}
                                            </p>
                                            <p className='text-[16px] leading-[24px] font-[300] text-[#595959] text-center sm:text-left'>
                                                {improve?.desc}
                                            </p>
                                        </AnimatedWrapper>
                                    </React.Fragment>
                                )
                            })}
                    </div>
                );
            default:
                return (
                    <div className='max-w-[815px] mx-auto flex justify-center items-center'>
                        <ImageLoader
                            className={`rounded-[16px] ${design?.box_shadow == "false" ? '' : 'shadow-[0px_8px_8px_rgba(24,24,24,0.02)]'}`}
                            src={StaticPath(design?.img)}
                            alt={design?.img_alt}
                            width={design?.width ?? 815}
                            height={design?.height ?? 580}
                            quality={75}
                        />
                    </div>
                );
        }
    };

    return (
        <section className={`${props?.layoutStyle}`}>
            <p className={`text-[40px] font-[400] leading-[1.25] text-black pb-[5px] border-b border-[#E7EDF5]`}>{data?.title}</p>
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
                                <div className={`mt-[60px] border border-[#E7EDF5] rounded-[25px] p-[35px] md:p-[55px] lg:p-[70px] ${styles[`${design?.bg_color}`]}`}>
                                    {
                                        renderDesignContent(design)
                                    }
                                </div>
                            </AnimatedWrapper>
                        </React.Fragment>
                    )
                })}
            </div>
            {
                (data?.final_outcome) && (
                    <AnimatedWrapper customStyle={`mt-[80px]`}>
                        <p className="text-[40px] leading-[1.5] font-[400] text-black pb-[40px]">Outcome</p>
                        <p className="text-[20px] leading-[30px] font-[300] text-[#595959]">{data?.final_outcome}</p>
                    </AnimatedWrapper>
                )
            }
        </section>
    );
}