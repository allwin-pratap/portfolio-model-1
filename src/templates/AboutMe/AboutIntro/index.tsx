import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function AboutIntro(props: any) {
    return (
        <section className={`${props?.layoutStyle}`}>
            <div className="flex flex-col lg:flex-row justify-between gap-[40px]">
                <div className="flex flex-col justify-between">
                    <div className="relative shrink-0">
                        <ImageLoader
                            className="border border-[#F1F7FF] bg-[#FAFAFA] rounded-[25px] "
                            src={StaticPath(props?.run_image)}
                            alt={props?.run_image_alt}
                            width={575}
                            height={373}
                        />
                        <div className="hidden sm:block w-[65px] h-[60px] animate-width-expand absolute left-[50%] top-[50%] transform translate-x-[300%] translate-y-[-300%]">
                            <ImageLoader
                                src={StaticPath(props?.hi_icon)}
                                alt={`Hi Karthik`}
                                width={65}
                                height={55}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-[40px] py-[40px] mt-[40px] border border-[#F1F7FF] rounded-[25px]">
                        {props?.social_connect?.map((social: any, index: any) => {
                            return (
                                <a key={index} className={`px-[25px] lg:px-[50px]`} href={social.link}>
                                    <div className="h-[32px] w-[32px] md:h-[44px] md:w-[44px]"
                                        dangerouslySetInnerHTML={{ __html: social?.svg_icon }}
                                    />
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="lg:max-w-[615px] border border-[#F1F7FF] rounded-[25px] p-[40px] max-lg:mt-[40px]">
                    <p className={`text-[32px] font-[400] text-black`}>{props?.title}</p>
                    {props?.description?.map((desc: any, index: any) => {
                        return (
                            <p key={index} className={`text-[20px] leading-[30px] font-[300] text-[#595959] py-[15px]`}>{desc}</p>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}