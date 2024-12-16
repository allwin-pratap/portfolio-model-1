import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath, dynamicBlurUrl } from "@/utils/baseUtils";
import styles from "./refreshedDesign.module.scss";
import Link from 'next/link';
import Slider from '@/components/Slider';

export default function RefreshedDesign(props: any) {
    const { data } = props;

    const settings = {
        dots: true, // Enable dots
		arrows: false,
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay speed in ms
    };

    const renderDesignContent = (design: any) => {
        switch (design?.type) {
            case "behance":
                return (
                    <div className='relative m-[-35px] md:m-[-55px] lg:m-[-70px]'>
                        <div className='max-w-[980px] mx-auto relative'>
                            <ImageLoader
                                src={StaticPath(design?.behance_data?.img)}
                                alt={design?.behance_data?.img_alt}
                                width={design?.behance_data?.width ?? 815}
                                height={design?.behance_data?.height ?? 580}
                                quality={95}
                                placeholder="blur"
                                blurDataURL={dynamicBlurUrl(design?.behance_data?.img)}
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
                                        <AnimatedWrapper customStyle={`flex flex-col border border-[#E7EDF5] rounded-[20px] md:py-[30px] md:px-[20px] relative ${index == 0 ? 'lg:row-span-2 lg:col-start-1 lg:row-start-2' : ''} ${index == 1 ? 'lg:row-span-2 lg:col-start-2 lg:row-start-1' : ''} ${index == 2 ? 'lg:row-span-2 lg:col-start-2 lg:row-start-3' : ''} ${index == 3 ? 'lg:row-span-2 lg:col-start-3 lg:row-start-2' : ''}`}>
                                            <div>
                                                <ImageLoader
                                                    src={StaticPath(improve?.img)}
                                                    alt={improve?.img_alt}
                                                    width={improve?.width ?? 235}
                                                    height={improve?.height ?? 160}
                                                    quality={95}
                                                    placeholder="blur"
                                                    blurDataURL={dynamicBlurUrl(improve?.img)}
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
            case "img_slider":
                return (
                    <div className={`w-full max-w-[815px] mx-auto ${styles['refresh-slider'] ?? ''}`}>
                        <Slider {...settings}>
                            {design?.images.map((image: any, index: any) => (
                                <div key={index}>
                                    <ImageLoader
                                        src={image?.img}
                                        alt={image?.img_alt}
                                        width={design?.width ?? 815}
                                        height={design?.height ?? 580}
                                        quality={100}
                                        placeholder="blur"
                                        blurDataURL={dynamicBlurUrl(image?.img)}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                );
            default:
                return (
                    <div className='max-w-[815px] mx-auto flex justify-center items-center relative'>
                        <ImageLoader
                            className={`${design?.box_shadow == "false" ? '' : 'shadow-[0px_8px_8px_rgba(24,24,24,0.02)]'} ${design?.rounded == "false" ? '': 'rounded-[16px]'}`}
                            src={StaticPath(design?.img)}
                            alt={design?.img_alt}
                            width={design?.width ?? 815}
                            height={design?.height ?? 580}
                            quality={95}
                            placeholder="blur"
                            blurDataURL={dynamicBlurUrl(design?.img)}
                        />
                    </div>
                );
        }
    };

    return (
        <section className={`${props?.layoutStyle}`}>
            {
                (data?.final_outcome) && (
                    <AnimatedWrapper customStyle={`mb-[80px]`}>
                        <p className="text-[40px] leading-[1.5] font-[400] text-black  border-b border-[#E7EDF5] pb-[5px] mb-[40px]">Outcome</p>
                        <p className="text-[20px] leading-[30px] font-[300] text-[#595959]">{data?.final_outcome}</p>
                    </AnimatedWrapper>
                )
            }
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
                                {(design?.img || design?.images) && (
                                    <div className={`mt-[60px] border border-[#E7EDF5] rounded-[25px] p-[35px] md:p-[55px] lg:p-[70px] ${styles[`${design?.bg_color}`] ?? ''}`}>
                                        {
                                            renderDesignContent(design)
                                        }
                                    </div>
                                )}
                            </AnimatedWrapper>
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    );
}