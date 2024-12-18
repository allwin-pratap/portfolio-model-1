import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";
import styles from './aboutIntro.module.scss'

export default function AboutIntro(props: any) {
    return (
        <section className={`${props?.layoutStyle}`}>
            <div className="flex flex-col lg:flex-row justify-between sm:gap-[40px]">
                <div className="flex flex-col justify-between">
                    <div className="relative shrink-0 border border-[#E7EDF5] rounded-[25px] bg-[#FAFAFA]">
                        <ImageLoader
                            className=""
                            src={StaticPath(props?.run_image)}
                            alt={props?.run_image_alt}
                            width={575}
                            height={373}
                        />
                        <div className="block w-[65px] h-[60px] animate-width-expand absolute left-[50%] top-[50%] transform translate-x-[165%] translate-y-[-175%] sm:translate-x-[300%] sm:translate-y-[-300%]">
                            <ImageLoader
                                src={StaticPath(props?.hi_icon)}
                                className="max-w-[40px] sm:max-w-[65px]"
                                alt={`Hi Karthik`}
                                width={65}
                                height={55}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 sm:gap-[40px] py-[20px] sm:py-[40px] mt-[40px] border border-[#E7EDF5] rounded-[25px] bg-[#fff]">
                        {props?.social_connect?.map((social: any, index: any) => {
                            return (
                                <a key={index} className={`flex justify-center px-[20px] sm:px-[50px]`} href={social.link} target={social?.target ?? '_self'}>
                                    <div className={`h-[44px] w-[44px] flex justify-center items-center ${styles['svg_wrapper']} ${styles[`${social?.class_name}`]}`}
                                        dangerouslySetInnerHTML={{ __html: social?.svg_icon }}
                                    />
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="lg:max-w-[615px] border border-[#E7EDF5] rounded-[25px] py-[20px] px-[30px] sm:p-[40px] max-lg:mt-[40px] bg-[#fff]">
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