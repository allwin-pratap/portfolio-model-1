

export default function AppoarchMethod(props: any) {
    return (
        <section className={`${props?.layoutStyle} border border-[#F1F7FF] rounded-[25px] px-[20px] py-[30px] sm:p-[40px]`}>
            <p className={`text-[32px] font-[400] text-black`}>{props?.title}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] mt-[30px]">
            {props?.appoarch_methods?.map((method: any, index: any) => {
                return (
                    <div key={index} >
                        <p className={`text-[20px] leading-[30px] font-[400] text-[#595959]`}>{String(index + 1).padStart(2, '0')}</p>
                        <p className={`text-[28px] leading-[30px] font-[400] text-black py-[20px]`}>{method.title}</p>
                        <p className={`text-[20px] leading-[30px] font-[300] text-[#595959]`}>{method.desc}</p>
                    </div>
                )
            })}
            </div>
        </section>
    );
}