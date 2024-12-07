import ImageLoader from "@/utils/ImageLoader";
import { StaticPath, dynamicBlurUrl } from "@/utils/baseUtils";

export default function ImageWithTitle(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[44px] font-[300] text-black text-center pb-[50px]`}>
                {props?.title}
            </p>
            <div className="flex pt-[50px] lg:min-h-[448px] relative max-w-[1160px] mx-auto">
                <ImageLoader
                    src={StaticPath(props?.img)}
                    alt={props?.img_alt}
                    width={1280}
                    height={448}
                    quality={75}
                    placeholder="blur"
                    blurDataURL={dynamicBlurUrl(props?.img)}
                />
            </div>
        </section>
    );
}