import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function IssueFaced(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[40px] font-[400] text-black pb-[5px] border-b border-[#F1F7FF]`}>
                {props?.data?.title}
            </p>
            <div className="mt-[40px]">
                <div className="relative z-[10]">
                    {props?.data?.issue_faced?.map((issue: any, index: any) => {
                        return (
                            <p key={index} className="text-[18px] font-[300] text-[#000] mr-[30px] mb-[30px] even:mr-0 last:mb-0 inline-block p-[15px] bg-[#F5F5F5] rounded-[25px]">
                                {issue}
                            </p>
                        )
                    })}
                </div>
                <div className="pt-[40px]">
                    <ImageLoader
                        src={StaticPath(props?.data?.img)}
                        alt={`waiting`}
                        width={904}
                        height={609}
                    />
                </div>
            </div>
        </section>
    );
}