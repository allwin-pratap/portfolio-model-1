import Link from "next/link";

export default function Footer() {

  const data = {
    copy_rights: "Copyright © 2024. All Rights Reserved",
    links: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/karthik-mr-0718ba1b1/",
        target: "_blank"
      },
      {
        name: "Behance",
        url: "https://www.behance.net/karthikmr",
        target: "_blank"
      },
      {
        name: "Dribble",
        url: "https://dribbble.com/karthik_luffy_17",
        target: "_blank"
      }
    ]
  }

  return (
    <footer className="max-w-[1280px] w-[88%] mx-auto flex justify-between items-center flex-col md:flex-row pt-[30px] pb-[40px]">
      <p className={`text-[16px] font-[300] text-black order-2 md:order-1 pt-[30px] md:pt-0`}>
        {data?.copy_rights}
      </p>
      <ul className="flex flex-col md:flex-row order-1 md:order-2">
        {data?.links?.map((link: any, index: any) => {
          return (
            <li
              key={index}
              className={`relative flex flex-col items-center group`}
            >
              <Link
                target={`_blank`}
                href={link.url}
                className={`text-[16px] font-[300] text-black text-center mx-[25px] md:last:mr-0 py-[5px] md:py-0 transition-all duration-300 ease-in-out hover:text-[#000]`}
                aria-label={link?.label}
              >
                {link.name}
              </Link>
              <span className={`w-[35px] h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:scale-x-[1] scale-x-0`}></span>
            </li>
          )
        })}
      </ul>
    </footer>
  );
}
