import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function RefreshedDesign(props: any) {
    const { data } = props;
    return (
        <section className={`${props?.layoutStyle}`}>
            <p className={`text-[40px] font-[400] leading-[1.25] text-black`}>{data?.title}</p>
            <div className="pt-[80px]">
                {data?.designs?.map((design: any, index: any) => {
                    return (
                        <div key={index} className="pb-[80px]">
                            <div className="max-w-[600px] mx-auto">
                            <p className={`text-[14px] leading-[21px] font-[400] text-[#595959] text-center`}>{design?.tag}</p>
                            <p className={`text-[36px] leading-[42px] font-[400] text-black text-center pt-[20px] pb-[10px]`}>{design?.title}</p>
                            <p className={`text-[20px] leading-[30px] font-[300] text-[#595959] text-center`}>{design?.description}</p>
                            </div>
                            <div className="pt-[60px]">
                                <ImageLoader
                                    className="border border-[#F1F7FF] bg-[#FAFAFA] rounded-[25px] "
                                    src={StaticPath(design?.img)}
                                    alt={design?.img_alt}
                                    width={1280}
                                    height={250}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
            <p className="text-[40px] leading-[1.5] font-[400] text-black pb-[40px]">Outcome</p>
            <p className="text-[20px] leading-[30px] font-[300] text-[#595959]">{data?.final_outcome}</p>
        </section>
    );
}