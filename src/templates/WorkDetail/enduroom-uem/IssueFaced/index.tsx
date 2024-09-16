import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function IssueFaced(props: any) {
    console.log('yes', props);
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[32px] font-[400] text-black`}>
                {props?.data?.title}
            </p>
            <div className="mt-[40px] p-[40px] bg-[#FFF] border border-[#FAFAFA] rounded-[25px] relative">
                <div className="relative z-[10]">
                    {props?.data?.issue_faced?.map((issue: any, index: any) => {
                        return (
                            <div key={index} className="text-[18px] font-[300] text-black mb-[30px] last:mb-0">
                                <p className="inline-block p-[15px] bg-[#F5F5F5] rounded-[25px]">{issue}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="absolute top-[50%] left-[50%] translate-y-[-42%] translate-x-[0%]">
                    <ImageLoader
                        src={StaticPath(props?.data?.waiting_img)}
                        alt={`waiting`}
                        width={464}
                        height={464}
                    />
                </div>
                <div className="absolute top-[50%] left-[50%] translate-y-[-200%] translate-x-[250%]">
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