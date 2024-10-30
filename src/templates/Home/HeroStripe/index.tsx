import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function HeroStripe(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <div className="max-w-[700px] relative left-[-11%]">
                <ImageLoader
                    src={StaticPath(props?.runner_img)}
                    alt={props?.runner_img_alt}
                    width={700}
                    height={259}
                />
                <div className="block w-[65px] h-[60px] animate-width-expand absolute left-[50%] top-[50%] transform translate-x-[165%] translate-y-[-175%] sm:translate-x-[300%] sm:translate-y-[-180%]">
                    <ImageLoader
                        src={StaticPath(props?.hi_icon)}
                        className="max-w-[40px] sm:max-w-[65px]"
                        alt={`Hi Karthik`}
                        width={65}
                        height={55}
                    />
                </div>
            </div>
        </section>
    );
}