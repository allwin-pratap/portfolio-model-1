import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function HeroStripe(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <div className="relative">
                <div className="max-w-[700px] relative">
                    <ImageLoader
                        src={StaticPath(props?.runner_img)}
                        alt={props?.runner_img_alt}
                        width={700}
                        height={259}
                    />
                    <div className="w-[65px] h-[60px] animate-width-expand absolute left-[50%] top-[50%] transform translate-x-[300%] translate-y-[-180%]">
                        <ImageLoader
                            src={StaticPath(props?.hi_icon)}
                            alt={`Hi Karthik`}
                            width={65}
                            height={55}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}