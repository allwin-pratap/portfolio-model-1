import Link from "next/link";

const data = {
    layout: "contact_me",
    title: "Hope y’all enjoyed the ride",
    description: "Feel free to drop your Feedbacks or Suggestions!",
    svg_icon:
        "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'><path d='M8.9126 16.4355C10.1709 16.7509 11.5985 16.7511 13.0351 16.3662C14.4717 15.9813 15.7079 15.2673 16.64 14.365' stroke='#181818' stroke-width='1.5' stroke-linecap='round'/><ellipse cx='14.5094' cy='10.276' rx='1' ry='1.5' transform='rotate(-15 14.5094 10.276)' fill='#181818'/><ellipse cx='8.71402' cy='11.8307' rx='1' ry='1.5' transform='rotate(-15 8.71402 11.8307)' fill='#181818'/><path d='M3.20356 14.859C2.09246 10.7123 1.53691 8.63893 2.47995 7.00555C3.42298 5.37217 5.49632 4.81662 9.643 3.70552C13.7897 2.59442 15.863 2.03887 17.4964 2.9819C19.1298 3.92493 19.6853 5.99827 20.7964 10.145C21.9075 14.2916 22.4631 16.365 21.5201 17.9984C20.577 19.6317 18.5037 20.1873 14.357 21.2984C10.2103 22.4095 8.13698 22.965 6.50359 22.022C4.87021 21.079 4.31466 19.0056 3.20356 14.859Z' stroke='#181818' stroke-width='1.5'/><path d='M13 16.5024L13.478 17.4762C13.8393 18.2123 14.7249 18.5218 15.4661 18.1709C16.2223 17.8129 16.5394 16.9054 16.1708 16.1544L15.7115 15.2188' stroke='#181818' stroke-width='1.5'/></svg>",
    contact_list: [
        {
            name: "Contact Me",
            url: "mailto:karthikdrose86@gmail.com",
            bg_color: "black",
            icon:
                "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M5 15.002L15 5.00195M15 5.00195H7.5M15 5.00195V12.502' stroke='white' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        },
        {
            name: "Download Resume",
            url: "assets/pdf/resume/Karthik-MR.pdf",
            bg_color: "white",
            icon:
                "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'><path d='M5 9.7375C5 7.47476 5 6.34339 5.70294 5.64044C6.40589 4.9375 7.53726 4.9375 9.8 4.9375H11C13.2627 4.9375 14.3941 4.9375 15.0971 5.64044C15.8 6.34339 15.8 7.47476 15.8 9.7375V12.1375C15.8 14.4002 15.8 15.5316 15.0971 16.2346C14.3941 16.9375 13.2627 16.9375 11 16.9375H9.8C7.53726 16.9375 6.40589 16.9375 5.70294 16.2346C5 15.5316 5 14.4002 5 12.1375V9.7375Z' stroke='#181818'/><path d='M8 10.9375H12.8' stroke='#181818' strokeLinecap='round'/><path d='M8 8.53711H12.8' stroke='#181818' strokeLinecap='round'/><path d='M8 13.3379H11' stroke='#181818' strokeLinecap='round'/></svg>"
        }
    ]
};

export default function ContactMe(props: any) {
    return (
        <section className={`max-w-[1280px] w-[88%] mx-auto bg-[#FAFAFA] rounded-[25px] p-[40px]`}>
            <div className={`flex items-center`}>
                <p className={`text-[26px] font-[400] text-black mr-[5px]`}>{data?.title}</p>
                <div
                    dangerouslySetInnerHTML={{ __html: data?.svg_icon }}
                />
            </div>
            <p className={`text-[18px] font-[300] text-black py-[15px]`}>{data?.description}</p>
            <div className="flex flex-col sm:flex-row gap-[20px] mt-[15px]">
                {data?.contact_list?.map((link: any, index: any) => {
                    return (
                        <Link key={index} target="_blank" className={`group text-[16px] font-[300] flex justify-center items-center py-[10px] px-[20px] rounded-[80px]${link?.bg_color == 'black' ? ' text-white bg-black' : ''}${link?.bg_color == 'white' ? ' text-black bg-white' : ''}`} href={link.url}>
                            <p>{link.name}</p>
                            <div className={`pl-[10px] transition-all duration-300 ease-in-out ${index == 0 ? 'group-hover:translate-x-[3px] group-hover:-translate-y-[3px]': ''} ${index == 1 ? 'group-hover:animate-bounce': ''}`}
                                dangerouslySetInnerHTML={{ __html: link?.icon }}
                            />
                        </Link>
                    )
                })}
            </div>
        </section>
    );
}