export default function Intro(props: any) {
    return (
        <section className={`${props?.layoutStyle}`}>
            <div className={`flex items-center`}>
                <h1 className={`text-[20px] font-[300] text-[#7B7B7B] mr-[5px]`}>{props?.title}</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: props?.svg_icon }}
                />
            </div>
            <p className={`text-[44px] font-[300] text-black py-[20px] max-w-[950px]`}><span className="pr-[10px]">{props?.job_role}</span>{props?.description}</p>
            <p className="text-[20px] font-[300] text-black mt-[10px]">{props?.current_working}</p>
        </section>
    );
}