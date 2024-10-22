import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function IssueFaced(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[40px] font-[400] text-black pb-[5px] border-b border-[#E7EDF5]`}>
                {props?.data?.title}
            </p>
            <div className="mt-[40px] p-[20px] md:p-[40px] bg-[#FFF] border border-[#E7EDF5] rounded-[25px] relative">
                <div className="relative z-[10]">
                    {props?.data?.issue_faced?.map((issue: any, index: any) => {
                        return (
                            <div key={index} className="text-[18px] font-[300] text-black mb-[30px] last:mb-0">
                                <p className="inline-block p-[10px] md:p-[15px] bg-[#F5F5F5] rounded-[25px]">{issue}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="absolute top-[50%] left-[50%] translate-y-[-42%] translate-x-[0%] hidden sm:block">
                    <ImageLoader
                        src={StaticPath(props?.data?.waiting_img)}
                        alt={`waiting`}
                        width={464}
                        height={464}
                    />
                </div>
                <div className="absolute top-[50%] left-[50%] translate-y-[-200%] translate-x-[250%] hidden lg:block">
                    <ImageLoader
                        src={StaticPath(props?.data?.exclamation_bubble_img)}
                        alt={`Exclamation Bubble`}
                        width={116}
                        height={96}
                    />
                </div>
            </div>
        </section>
    );
}