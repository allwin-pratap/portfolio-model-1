import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function AllWorks(props: any) {
    return (
        <div className={props?.layoutStyle}>
            <p className={`text-[32px] font-[400] text-black`}>
                {props?.title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] mt-[80px]">
                {props?.all_works?.map((works: any, index: any) => {
                    return (
                        <a key={index} className={`flex flex-col rounded-[23px_23px_0px_0px] overflow-hidden`} href={works.url}>
                            <div className={`max-w-[615px]`}>
                                <ImageLoader
                                    src={StaticPath(works.img)}
                                    alt={works.img_alt}
                                    width={1280}
                                    height={250}
                                />
                            </div>
                            <div className={`flex flex-col gap-[30px] border-[1px] border-[#F0F0F0] rounded-[0px_0px_23px_23px] p-[30px]`}>
                                <div>
                                    <div className="flex gap-[10px]">
                                        {works?.tags?.map((tag: any, index: any) => {
                                            return (
                                                <p key={index} className="text-[16px] font-[300] text-black p-[5px_10px] bg-[#f5f5f5] rounded-[80px]">{tag}</p>
                                            )
                                        })}
                                    </div>
                                    <p className="text-[24px] font-[400] text-black pt-[10px] pb-[5px]">{works.title}</p>
                                    <p className={`text-[18px] font-[300] leading-[24px] text-black${index < 2 ? '' : ' min-h-[72px]'}`}>{works.description}</p>
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{ __html: props?.svg_icon }}
                                />
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    );
}