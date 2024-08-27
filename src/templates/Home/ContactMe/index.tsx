export default function ContactMe(props: any) {
    return (
        <div className={`${props?.layoutStyle}`}>
            <div className={`flex`}>
                <p className={`text-[26px] font-[400] text-black mr-[5px]`}>{props?.title}</p>
                <div
                    dangerouslySetInnerHTML={{ __html: props?.svg_icon }}
                />
            </div>
            <p className={`text-[18px] font-[300] text-black py-[15px]`}>{props?.description}</p>
            <div className="flex flex-col sm:flex-row gap-[20px] mt-[15px]">
                {props?.contact_list?.map((link: any, index: any) => {
                    return (
                        <a key={index} className={`text-[16px] font-[300] flex justify-center items-center py-[10px] px-[20px] rounded-[80px]${link?.bg_color == 'black' ? ' text-white bg-black' : ''}${link?.bg_color == 'white' ? ' text-black bg-white' : ''}`} href={link.url}>
                            <p>{link.name}</p>
                            <div className="pl-[10px]"
                                dangerouslySetInnerHTML={{ __html: link?.icon }}
                            />
                        </a>
                    )
                })}
            </div>
        </div>
    );
}