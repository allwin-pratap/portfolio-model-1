export default function Footer({ data }: any) {
  console.log(data.copy_rights)
  return (
    <footer className="max-w-[1280px] w-[88%] mx-auto">
      <div className="flex justify-between items-center pt-[30px] pb-[40px]">
        <p className={`text-[16px] font-[300] text-black`}>
          {data?.copy_rights}
        </p>
        <div className="">
          {data?.links?.map((link: any, index: any) => {
            return (
              <a className="text-[16px] font-[300] text-black mx-[25px] last:mr-0" key={index} href={link.url}>{link.name}</a>
            )
          })}
        </div>
      </div>
    </footer>
  );
}
