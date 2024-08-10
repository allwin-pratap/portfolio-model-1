// import ImageLoader from "@/utils/ImageLoader";

export default function Header({ data }: any) {
    return (
        <header className="max-w-[1280px] w-[88%] mx-auto">
            <div className="flex justify-between items-center py-[50px]">
                <p className={`text-[28px] font-[500] leading-[35px] text-black`}>
                    K .
                </p>
                {/* <ImageLoader
                    src={data?.logo}
                    alt={data?.logo_alt}
                    width={50}
                    height={50}
                /> */}
                <div className="">
                    {data?.links?.map((link: any, index: any) => {
                        return (
                            <a className="text-[16px] font-[300] text-black mx-[25px] last:mr-0" key={index} href={link.url} target={`${link.target ? link.target : '_self'}`}>{link.name}</a>
                        )
                    })}
                </div>
            </div>
        </header>
    );
}
