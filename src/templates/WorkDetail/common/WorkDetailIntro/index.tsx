import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function WorkDetailIntro(props: any) {
    const { data } = props;
    console.log(data)
    return (
        <section className={`${props?.layoutStyle}`}>
            <p className={`text-[50px] md:text-[90px] font-[400] leading-[1.25] text-black`}>{data?.title}</p>
            <p className={`text-[20px] font-[300] text-[#595959] pt-[20px]`}>{data?.description}</p>
            <div className="grid  grid-cols-2 md:grid-cols-4 gap-[30px] py-[80px]">
                {data?.history?.map((his: any, index: any) => {
                    return (
                        <div key={index}>
                            <p className={`text-[20px] leading-[30px] font-[300] text-[#595959]`}>{his?.label}</p>
                            <p className={`text-[24px] leading-[30px] font-[400] text-black`}>{his?.value}</p>
                        </div>
                    )
                })}
            </div>
            <div className="">
                <ImageLoader
                    className="border border-[#F1F7FF] bg-[#FAFAFA] rounded-[25px] "
                    src={StaticPath(data?.img)}
                    alt={data?.img_alt}
                    width={1280}
                    height={250}
                />
            </div>
            <div className="pb-[40px]">
                {data?.details?.map((detail: any, index: any) => {
                    return (
                        <div key={index} className="pt-[80px]">
                            <p className={`text-[40px] leading-[60px] font-[400] text-black pb-[40px]`}>{detail?.title}</p>
                            <p className={`text-[20px] leading-[30px] font-[300] text-[#595959]`}>{detail?.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}