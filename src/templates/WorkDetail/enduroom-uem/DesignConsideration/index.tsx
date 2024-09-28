import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function DesignConsideration(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[40px] font-[400] text-black pb-[5px] border-b border-[#F1F7FF]`}>
                {props?.data?.title}
            </p>
            <div className="mt-[40px] p-[20px] sm:p-[40px] bg-[#FFF] border border-[#FAFAFA] rounded-[25px] bg-[#FAF8F7] relative">
                <div className="relative z-[10]">
                    {props?.data?.design_consider?.map((consider: any, index: any) => {
                        return (
                            <div key={index} className="text-[22px] md:text-[30px] leading-[27px] font-[400] text-black mb-[30px] last:mb-0">
                                <div className="inline-block py-[15px] px-[20px] sm:py-[20px] sm:px-[30px] bg-[#F5F3F2] rounded-[25px]">
                                    <div className="flex items-center justify-center">
                                        <svg className="max-sm:hidden pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M11.6667 21.5L16.9048 27.5L30 12.5" stroke="#181818" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    {consider}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="pt-[40px] max-w-[880px] mx-auto">
                    <ImageLoader
                        src={StaticPath(props?.data?.img)}
                        alt={`waiting`}
                        width={880}
                        height={515}
                    />
                </div>
            </div>
        </section>
    );
}