import AnimatedWrapper from '@/components/AnimatedWrapper';

export default function Intro(props: any) {
    return (
        <section className={`${props?.layoutStyle}`}>
            <AnimatedWrapper>
                <div className={`flex items-center`}>
                    <h1 className={`text-[20px] font-[300] text-[#595959] mr-[5px]`}>{props?.title}</h1>
                    <div
                        dangerouslySetInnerHTML={{ __html: props?.svg_icon }}
                    />
                </div>
            </AnimatedWrapper>
            <AnimatedWrapper>
                <p className={`text-[40px] font-[400] text-black py-[20px] max-w-[1000px]`}><span className="pr-[10px] bg-gradient-to-r from-[#FF984E] to-[#DE592B] bg-clip-text text-transparent">{props?.job_role}</span>{props?.description}</p>
            </AnimatedWrapper>
            <AnimatedWrapper>
                {(props?.current_working)&&(
                    <p className="text-[20px] font-[300] text-black mt-[10px]">{props?.current_working}</p>
                )}
            </AnimatedWrapper>
        </section>
    );
}