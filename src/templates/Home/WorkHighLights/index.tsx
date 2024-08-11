import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function WorkHighLights(props: any) {
    return (
        <div className={props?.layoutStyle}>
            <p className={`text-[32px] font-[400] text-black`}>
                {props?.title}
            </p>
            <div className="flex flex-wrap gap-[50px] mt-[30px]">
                {props?.work_high_lights?.map((works: any, index: any) => {
                    return (
                        <a key={index} className={`flex flex-col rounded-[23px_23px_0px_0px] overflow-hidden ${index < 2 ? 'basis-full' : 'basis-[48%]'}`} href={works.url}>
                            <div className={`${index < 2 ? 'max-w-[1280px]' : ''}`}>
                                <ImageLoader
                                    src={StaticPath(works.img)}
                                    // src={StaticPath('/assets/img/home/uem-security-app.png')}
                                    alt={works.img_alt}
                                    width={1280}
                                    height={250}
                                />
                            </div>
                            <div className={`flex gap-[30px] border-[1px] border-[#F0F0F0] rounded-[0px_0px_23px_23px] p-[30px]${index < 2 ? ' flex-row justify-between items-center' : ' flex-col'}`}>
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