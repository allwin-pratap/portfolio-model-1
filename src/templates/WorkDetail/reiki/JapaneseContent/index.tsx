export default function JapaneseContent(props: any) {
    return (
        <section className={`${props?.layoutStyle} flex justify-between items-center flex-col md:flex-row bg-[#FAFAFA] rounded-[25px] gap-[40px] lg:gap-[80px] px-[30px] py-[40px]`}>
            <div className="bg-white w-[240px] h-[240px] rounded-[50%] shrink-0 flex items-center justify-center">
                <div className="bg-gradient-to-b from-[#FAACA8] to-[#DDD6F3] w-[183px] h-[183px] rounded-[50%] flex items-center justify-center">
                    <p className={`text-[58px] font-[200] text-[#000]`}>
                        {props?.data?.title}
                    </p>
                </div>
            </div>
            <p className="text-[20px] leading-[1.5] font-[300] text-[#313131] opacity-[0.6] max-w-[585px]">{props?.data?.desc}</p>
        </section>
    );
}