import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";

export default function AppoarchMethod(props: any) {
    return (
        <section className={`${props?.layoutStyle}`}>
            <div className="grid md:grid-cols-6 gap-[40px] mb-[50px]">
                <div className="col-span-2 border border-[#F1F7FF] rounded-[25px] p-[30px]">
                    <p className={`text-[28px] leading-[30px] font-[400] text-black pb-[30px]`}>{props?.things_do?.title}</p>
                    <div>
                        {props?.things_do?.lists.map((item: any, index: any) => {
                            return (
                                <p key={index} className={`text-[20px] leading-[30px] font-[400] text-[#595959] py-[10px] first:pt-0 last:pb-0`}>{item}</p>
                            )
                        })}
                    </div>
                </div>
                <div className="col-span-4 border border-[#F1F7FF] rounded-[25px] p-[30px]">
                    <p className={`text-[28px] leading-[30px] font-[400] text-black pb-[30px]`}>{props?.my_stack?.title}</p>
                    <div className="flex gap-[30px]">
                        {props?.my_stack?.lists.map((item: any, index: any) => {
                            return (
                                <div className="flex flex-col items-center justify-center border border-[#F1F7FF] rounded-[25px] p-[30px] max-w-[178px] w-full" key={index}>
                                    <ImageLoader
                                        className=""
                                        src={StaticPath(item?.icon)}
                                        alt={item?.icon_alt}
                                        width={item?.width}
                                        height={85}
                                    />
                                    <p className={`text-[20px] leading-[30px] font-[400] text-black pt-[30px]`}>{item?.label}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="border border-[#F1F7FF] rounded-[25px] p-[30px]">
                <p className={`text-[28px] leading-[30px] font-[400] text-black pb-[30px]`}>{props?.personal_doing?.title}</p>
                <div className="flex gap-[30px]">
                    {props?.personal_doing?.lists.map((item: any, index: any) => {
                        return (
                            <div className="flex flex-col items-center justify-center border border-[#F1F7FF] rounded-[25px] p-[30px] max-w-[215px] w-full" key={index}>
                                <ImageLoader
                                    className=""
                                    src={StaticPath(item?.icon)}
                                    alt={item?.icon_alt}
                                    width={item?.width}
                                    height={85}
                                />
                                <p className={`text-[20px] leading-[30px] font-[400] text-black pt-[30px]`}>{item?.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}