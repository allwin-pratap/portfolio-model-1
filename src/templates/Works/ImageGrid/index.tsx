import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function ImageGrid(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[40px] font-[400] text-black pb-[5px] border-b border-[#E7EDF5]`}>
                {props?.title}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-[50px]">
                {props?.images?.map((works: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <AnimatedWrapper>
                                <div className={`mx-auto max-w-[405px] max-h-[285px] rounded-[25px] overflow-hidden`}>
                                    <ImageLoader
                                        src={StaticPath(works.img)}
                                        className="transition-all duration-[300ms] ease-in-out scale-[1] hover:scale-[1.05]"
                                        alt={works.img_alt}
                                        width={405}
                                        height={285}
                                        quality={75}
                                    />
                                </div>
                            </AnimatedWrapper>
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    );
}