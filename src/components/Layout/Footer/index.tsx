export default function Footer({ data }: any) {
  return (
    <footer className="bg-[#fff]">
      <div className="max-w-[1280px] w-[88%] mx-auto flex justify-between items-center flex-col md:flex-row pt-[30px] pb-[40px]">
        <p className={`text-[16px] font-[300] text-black order-2 md:order-1 pt-[30px] md:pt-0`}>
          {data?.copy_rights}
        </p>
        <div className="flex flex-col md:flex-row order-1 md:order-2">
          {data?.links?.map((link: any, index: any) => {
            return (
              <a className="text-[16px] font-[300] text-black text-center mx-[25px] md:last:mr-0 py-[5px] md:py-0" key={index} href={link.url}>{link.name}</a>
            )
          })}
        </div>
      </div>
    </footer>
  );
}
