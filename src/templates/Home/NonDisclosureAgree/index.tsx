export default function NonDisclosureAgree(props: any) {
    return (
        <section className={`${props?.layoutStyle} flex flex-col justify-center items-center`}>
            <p className={`text-[16px] font-[300] text-black text-center bg-[#f5f5f5] p-[5px_10px] rounded-[80px]`}>
                {props?.title}
            </p>
            <div
                className="mt-[20px] mb-[5px]"
                dangerouslySetInnerHTML={{ __html: props?.svg_icon }}
            />
            <p className={`text-[18px] font-[300] leading-[24px] text-[#7B7B7B] text-center`}><span className="pr-[10px]">{props?.job_role}</span>{props?.description}</p>
        </section>
    );
}