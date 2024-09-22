export default function HowItWorks(props: any) {
    return (
        <section className={props?.layoutStyle}>
            <p className={`text-[40px] font-[400] text-black`}>
                {props?.data?.title}
            </p>
            <div className="mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                {props?.data?.how_works?.map((works: any, index: any) => {
                    return (
                        <div key={index} className="px-[30px] py-[60px] border border-[#F1F7FF] rounded-[25px] flex flex-col justify-center items-center">
                            <p className="text-[32px] font-[400] text-black pb-[20px]">{works.title}</p>
                            <div
                                dangerouslySetInnerHTML={{ __html: works?.icon }}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    );
}