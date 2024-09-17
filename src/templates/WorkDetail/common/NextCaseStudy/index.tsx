import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function NextCaseStudy(props: any) {
    const { data } = props;
    return (
        <section className={`${props?.layoutStyle}`}>
            <div className="flex flex-col md:flex-row items-center border border-[#F1F7FF] bg-[#FAFAFA] rounded-[25px] p-[30px]">
                <div className="max-w-[360px]">
                    <ImageLoader
                        className=""
                        src={StaticPath(data?.img)}
                        alt={data?.img_alt}
                        width={1280}
                        height={250}
                    />
                </div>
                <div className="pl-[30px] flex flex-col justify-center items-center md:items-start">
                    <p className={`text-[28px] font-[400] leading-[1.25] text-black`}>{data?.title}</p>
                    <p className="text-[20px] leading-[30px] font-[300] text-black pt-[10px] pb-[20px] text-center md:text-left">{data?.description}</p>
                    <div
                        dangerouslySetInnerHTML={{ __html: data?.svg_icon }}
                    />
                </div>
            </div>
            <div className="flex justify-between pt-[50px]">
                <div className="flex">
                    <div
                        className="transform rotate-[180deg]"
                        dangerouslySetInnerHTML={{ __html: data?.svg_icon }}
                    />
                    <p className="text-[16px] leading-[20px] font-[400] text-black">Back</p>
                </div>
                <div className="flex">
                    <p className="text-[16px] leading-[20px] font-[400] text-black">Next Case Study</p>
                    <div
                        dangerouslySetInnerHTML={{ __html: data?.svg_icon }}
                    />
                </div>
            </div>
        </section>
    );
}