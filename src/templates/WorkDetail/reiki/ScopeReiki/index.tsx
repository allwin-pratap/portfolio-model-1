import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function ScopeReiki(props: any) {
    const { data } = props;
    return (
        <section className={`${props?.layoutStyle}`}>
            <p className={`text-[40px] font-[400] leading-[1.25] text-black pb-[5px] border-b border-[#E7EDF5]`}>{data?.title}</p>
            <div className="pt-[80px]">
                <div className="max-w-[815px] mx-auto flex justify-center items-center">
                    <ImageLoader
                        className="rounded-[25px]"
                        src={StaticPath(data?.img)}
                        alt={data?.img_alt}
                        width={data?.width ?? 815}
                        height={data?.height ?? 580}
                    />
                </div>
            </div>
        </section>
    );
}