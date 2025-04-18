import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";
import Link from "next/link";

export default function NextCaseStudy(props: any) {
    const { next_case_study, design_system, result } = props;

    return (
        <section className={`${props?.layoutStyle}`}>
            {
                (design_system && design_system?.show == 'true') && (
                    <Link className="flex flex-col md:flex-row items-center border border-[#E7EDF5] bg-[#FAFAFA] rounded-[25px] p-[30px] mb-[60px]" target="_blank" href={design_system?.url}>
                        <div className="max-w-[360px] relative">
                            <ImageLoader
                                className=""
                                src={StaticPath(design_system?.img)}
                                alt={design_system?.img_alt}
                                width={1280}
                                height={250}
                            />
                        </div>
                        <div className="pl-[30px] flex flex-col justify-center items-center md:items-start">
                            <p className={`text-[28px] font-[400] leading-[1.25] text-black`}>{design_system?.title}</p>
                            <p className="text-[20px] leading-[30px] font-[300] text-black pt-[10px] pb-[20px] text-center md:text-left">{design_system?.description}</p>
                            <div
                                dangerouslySetInnerHTML={{ __html: design_system?.svg_icon }}
                            />
                        </div>
                    </Link>
                )
            }
            {
                (result) && (
                    <div className="flex flex-col justify-center items-center md:items-start w-full mb-[60px]">
                        <p className={`text-[40px] font-normal leading-[1.25] text-black pb-[5px] border-b border-[#E7EDF5] w-full`}>{result?.title}</p>
                        <p className="text-[20px] leading-[30px] font-normal text-[#595959] py-[30px] text-center md:text-left">{result?.description}</p>
                        {/* <div className=""> */}
                            {result?.lists?.map((list: any, index: any) => {
                                return (
                                    <React.Fragment key={index}>
                                        <AnimatedWrapper customStyle={`flex items-center border border-[#E7EDF5] rounded-[8px] mb-[20px] p-[8px] w-full`}>
                                            <div
                                                dangerouslySetInnerHTML={{ __html: result?.svg_icon }}
                                            />
                                            <p className="text-[20px] leading-[30px] font-[300] text-[#595959] text-center md:text-left pl-[5px]">{list}</p>
                                        </AnimatedWrapper>
                                    </React.Fragment>
                                )
                            })}
                        {/* </div> */}
                    </div>
                )
            }
            <div className="flex justify-between">
                <Link className="flex group" href={next_case_study?.prev_url}>
                    <div
                        className="transition-all duration-300 ease-in-out transform rotate-[180deg] pl-[5px] relative group-hover:left-[-3px] left-0"
                        dangerouslySetInnerHTML={{ __html: next_case_study?.svg_icon }}
                    />
                    <p className="text-[16px] leading-[20px] font-[400] text-black">{next_case_study?.prev_label}</p>
                </Link>
                <Link className="flex justify-center group" href={next_case_study?.next_url}>
                    <p className="text-[16px] leading-[20px] font-[400] text-black">{next_case_study?.next_label}</p>
                    <div
                        className="relative transition-all duration-300 ease-in-out pl-[5px] right-0 group-hover:right-[-3px]"
                        dangerouslySetInnerHTML={{ __html: next_case_study?.svg_icon }}
                    />
                </Link>
            </div>
        </section>
    );
}