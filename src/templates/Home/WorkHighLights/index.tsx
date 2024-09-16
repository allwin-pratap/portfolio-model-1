import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";
import Link from 'next/link';

export default function WorkHighLights(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[32px] font-[400] text-black`}>
                {props?.title}
            </p>
            <div className="grid grid-cols-2 gap-[30px] lg:gap-[50px] mt-[30px]">
                {props?.work_high_lights?.map((works: any, index: any) => {
                    return (
                        <a key={index} className={`group flex flex-col border-[1px] border-[#F0F0F0] rounded-[23px] overflow-hidden max-md:col-span-2 ${index < 2 ? 'md:col-span-2' : 'md:row-start-3'}`} href={works.url}>
                            <div className={`${index < 2 ? 'max-w-[1280px]' : ''}`}>
                                <ImageLoader
                                    src={StaticPath(works.img)}
                                    className={`min-h-[265px] object-cover transition-all duration-[300ms] ease-in-out scale-[1] group-hover:scale-[1.04]`}
                                    // src={StaticPath('/assets/img/home/uem-security-app.png')}
                                    alt={works.img_alt}
                                    width={1280}
                                    height={264}
                                />
                            </div>
                            <div className={`flex gap-[20px] lg:gap-[30px] border-t-[1px] border-[#F0F0F0] p-[30px]${index < 2 ? ' flex-col md:flex-row md:justify-between md:items-center' : ' flex-col'}`}>
                                <div>
                                    <div className="flex gap-[10px]">
                                        {works?.tags?.map((tag: any, index: any) => {
                                            return (
                                                <p key={index} className="text-[16px] font-[300] text-black p-[5px_10px] bg-[#f5f5f5] rounded-[80px]">{tag}</p>
                                            )
                                        })}
                                    </div>
                                    <p className="text-[24px] font-[400] text-black pt-[10px] pb-[5px]">{works.title}</p>
                                    <p className={`text-[18px] font-[300] leading-[24px] text-black${index < 2 ? '' : ' md:min-h-[72px]'}`}>{works.description}</p>
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{ __html: props?.svg_icon }}
                                />
                            </div>
                        </a>
                    )
                })}
            </div>
            <div className="flex justify-center mt-[50px]">
                <Link
                    href="/works/"
                    className={`inline-block text-[#fff] text-[24px] font-[400] bg-black rounded-[55px] px-[20px] py-[15px]`}
                    target={`_blank`}>
                    View Works
                </Link>
            </div>
        </section>
    );
}