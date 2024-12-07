import ImageLoader from "@/utils/ImageLoader";
import { StaticPath } from "@/utils/baseUtils";
import Link from "next/link";

export default function NextCaseStudy(props: any) {
    const { next_case_study, design_system } = props;
    return (
        <section className={`${props?.layoutStyle}`}>
            {
                (design_system) && (
                    <div className="flex flex-col md:flex-row items-center border border-[#E7EDF5] bg-[#FAFAFA] rounded-[25px] p-[30px] mb-[50px]">
                        <div className="max-w-[360px] relative">
                            <ImageLoader
                                className=""
                                src={StaticPath(design_system?.img)}
                                alt={design_system?.img_alt}
                                width={1280}
                                height={250}
                            />
                        </div>
                        <div className="pl-[30px] flex flex-col justify-center items-center md:items-start">
                            <p className={`text-[28px] font-[400] leading-[1.25] text-black`}>{design_system?.title}</p>
                            <p className="text-[20px] leading-[30px] font-[300] text-black pt-[10px] pb-[20px] text-center md:text-left">{design_system?.description}</p>
                            <div
                                dangerouslySetInnerHTML={{ __html: design_system?.svg_icon }}
                            />
                        </div>
                    </div>
                )
            }
            <div className="flex justify-between">
                <Link className="flex group" href={next_case_study?.prev_url}>
                    <div
                        className="transition-all duration-300 ease-in-out transform rotate-[180deg] pl-[5px] relative group-hover:left-[-3px] left-0"
                        dangerouslySetInnerHTML={{ __html: next_case_study?.svg_icon }}
                    />
                    <p className="text-[16px] leading-[20px] font-[400] text-black">{next_case_study?.prev_label}</p>
                </Link>
                <Link className="flex justify-center group" href={next_case_study?.next_url}>
                    <p className="text-[16px] leading-[20px] font-[400] text-black">{next_case_study?.next_label}</p>
                    <div
                        className="relative transition-all duration-300 ease-in-out pl-[5px] right-0 group-hover:right-[-3px]"
                        dangerouslySetInnerHTML={{ __html: next_case_study?.svg_icon }}
                    />
                </Link>
            </div>
        </section>
    );
}