import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import styles from "./keyImprovement.module.scss";

export default function KeyImprovements(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[32px] font-[400] text-black`}>
                {props?.title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[80px]">
                {props?.key_improve?.map((keys: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <AnimatedWrapper customStyle={`flex`}>
                                <div className={`flex flex-col p-[30px] rounded-[23px] overflow-hidden ${styles[`${keys.bg_color}`]}`}>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: keys?.icon }}
                                    />
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
        </section>
    );
}