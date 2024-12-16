import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath, dynamicBlurUrl } from "@/utils/baseUtils";
import Link from 'next/link';

export default function WorkHighLights(props: any) {

    // const simulateSlowImage = (src: string): Promise<string> => {

    //     return new Promise((resolve) => {
    //         setTimeout(() => resolve(StaticPath(src)), 3000); // Delay by 3 seconds
    //     });
    // };

    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[32px] font-[400] text-black pb-[5px]`}>
                {props?.title}
            </p>
            <div className="grid grid-cols-2 gap-[30px] lg:gap-[50px] mt-[30px]">
                {props?.work_high_lights?.map((works: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <AnimatedWrapper customStyle={`group flex flex-col border-[1px] border-[#F0F0F0] rounded-[23px] overflow-hidden max-md:col-span-2 ${index < 2 ? 'md:col-span-2' : 'md:row-start-3'}`}>
                                <Link className={``} href={works.url}>
                                    <div className={`${index < 2 ? 'max-w-[1280px] max-h-[450px] md:max-h-[580px]' : 'max-h-[450px]'} overflow-hidden relative`}>
                                        <ImageLoader
                                            src={StaticPath(works?.img)}
                                            className={`xl:min-h-[450px] object-cover transition-all duration-[300ms] ease-in-out scale-[1] group-hover:scale-[1.04] ${index < 2 ? 'hidden md:block' : ''}`}
                                            // src={StaticPath('/assets/img/home/uem-security-app.png')}
                                            alt={works.img_alt}
                                            width={1280}
                                            height={index < 2 ? 580 : 450}
                                            quality={index < 2 ? 75 : 70}
                                            placeholder="blur"
                                            blurDataURL={dynamicBlurUrl(works?.img)}
                                        />
                                        {
                                            (index < 2) && (
                                                <ImageLoader
                                                    src={StaticPath(works?.img_mobile)}
                                                    className={`block md:hidden min-h-[265px] object-cover transition-all duration-[300ms] ease-in-out scale-[1] group-hover:scale-[1.04]`}
                                                    alt={works.img_alt}
                                                    width={1280}
                                                    height={index < 2 ? 580 : 450}
                                                    quality={75}
                                                    placeholder="blur"
                                                    blurDataURL={dynamicBlurUrl(works?.img_mobile)}
                                                />
                                            )
                                        }
                                    </div>
                                    <div className={`flex gap-[20px] lg:gap-[30px] bg-[#fff] border-t-[1px] border-[#F0F0F0] p-[30px]${index < 2 ? ' flex-col md:flex-row md:justify-between md:items-center' : ' flex-col'}`}>
                                        <div>
                                            <div className="flex gap-[10px]">
                                                {works?.tags?.map((tag: any, index: any) => {
                                                    return (
                                                        <p key={index} className="text-[16px] font-[300] text-black p-[5px_10px] bg-[#f5f5f5] rounded-[80px]">{tag}</p>
                                                    )
                                                })}
                                            </div>
                                            <p className="text-[24px] font-[400] text-black pt-[10px] pb-[5px]">{works.title}</p>
                                            <p className={`text-[18px] font-[300] leading-[24px] text-black${index < 2 ? '' : ' md:min-h-[72px]'}`}>{works.description}</p>
                                        </div>
                                        <div
                                            className='transition-all duration-300 ease-in-out group-hover:translate-x-[3px]'
                                            dangerouslySetInnerHTML={{ __html: props?.svg_icon }}
                                        />
                                    </div>
                                </Link>
                            </AnimatedWrapper>
                        </React.Fragment>
                    )
                })}
            </div>
            <div className="flex justify-center mt-[50px]">
                <Link
                    href="/works/"
                    className={`inline-block text-[#fff] text-[18px] font-[400] bg-black rounded-[55px] px-[25px] py-[15px]`}>
                    View Works
                </Link>
            </div>
        </section>
    );
}