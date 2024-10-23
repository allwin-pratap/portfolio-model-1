import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function ImageWithTitle(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[44px] font-[300] text-black text-center pb-[50px]`}>
                {props?.title}
            </p>
            <div className="flex pt-[50px] lg:min-h-[448px]">
                <ImageLoader
                    src={StaticPath(props?.img)}
                    alt={props?.img_alt}
                    width={1280}
                    height={448}
                />
            </div>
        </section>
    );
}