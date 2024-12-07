import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath, dynamicBlurUrl } from "@/utils/baseUtils";
import Link from 'next/link';

export default function AllWorks(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[40px] font-[400] text-black pb-[5px] border-b border-[#E7EDF5]`}>
                {props?.title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] mt-[80px]">
                {props?.all_works?.map((works: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <AnimatedWrapper customStyle={`flex`}>
                                <Link className={`group flex flex-col justify-between border-[1px] border-[#F0F0F0] rounded-[23px] overflow-hidden`} href={works.url} target={works?.target ?? '_self'}>
                                    <div>
                                        <div className={`max-w-[615px] max-h-[400px] lg:h-[400px] overflow-hidden relative`}>
                                            <ImageLoader
                                                className={`min-h-[265px] max-h-[400px] lg:h-[400px] object-cover transition-all duration-[300ms] ease-in-out scale-[1] group-hover:scale-[1.04]`}
                                                src={StaticPath(works?.img)}
                                                alt={works.img_alt}
                                                width={1280}
                                                height={400}
                                                quality={75}
                                                placeholder="blur"
                                                blurDataURL={dynamicBlurUrl(works?.img)}
                                            />
                                        </div>
                                        <div className={`flex flex-col gap-[30px] p-[30px] pb-0 border-t-[1px] border-[#F0F0F0]`}>
                                            <div>
                                                <div className="flex gap-[10px]">
                                                    {works?.tags?.map((tag: any, index: any) => {
                                                        return (
                                                            <p key={index} className="text-[16px] font-[300] text-black p-[5px_10px] bg-[#f5f5f5] rounded-[80px]">{tag}</p>
                                                        )
                                                    })}
                                                </div>
                                                <p className="text-[24px] font-[400] text-black pt-[10px] pb-[5px]">{works?.title}</p>
                                                <p className={`text-[18px] font-[300] leading-[24px] text-black${index < 2 ? '' : ' min-h-[72px]'}`}>{works?.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-[30px]">
                                        {(works?.behance_redirect) ? (
                                            <p className="text-[20px] font-[400] leading-[24px] text-black pr-[5px]">
                                                Visit Behance
                                            </p>
                                        ) : (
                                            <p className="text-[20px] font-[400] leading-[24px] text-black pr-[5px]">
                                                View Case Study
                                            </p>
                                        )}
                                        <div
                                            dangerouslySetInnerHTML={{ __html: props?.svg_icon }}
                                        />
                                    </div>
                                </Link>
                            </AnimatedWrapper>
                        </React.Fragment>
                    )
                })}
            </div>
        </section >
    );
}