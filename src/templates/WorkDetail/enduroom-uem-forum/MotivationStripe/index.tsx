import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";
import Marquee from "./Marquee";

export default function MotivationStripe(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <div>
                <Marquee title={props?.data?.title} />
            </div>
            <div className="mt-[10px] md:mt-[40px] px-[20px] md:px-[40px] bg-[#FFF] rounded-[25px] relative">
                <div className="block">
                    <ImageLoader
                        src={StaticPath(props?.data?.img)}
                        alt={props?.data?.img_alt}
                        width={900}
                        height={465}
                    />
                </div>
            </div>
        </section>
    );
}