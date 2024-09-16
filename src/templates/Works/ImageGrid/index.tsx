import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function AllWorks(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[32px] font-[400] text-black`}>
                {props?.title}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-[50px]">
                {props?.images?.map((works: any, index: any) => {
                    return (
                        <div key={index} className={`mx-auto max-w-[405px] max-h-[285px] rounded-[25px] overflow-hidden`}>
                            <ImageLoader
                                src={StaticPath(works.img)}
                                className="transition-all duration-[300ms] ease-in-out scale-[1] hover:scale-[1.05]"
                                alt={works.img_alt}
                                width={405}
                                height={285}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    );
}