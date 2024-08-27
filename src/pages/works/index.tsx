import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ImageGrid from "@/templates/Works/ImageGrid";
import AllWorks from "@/templates/Works/AllWorks";
import ImageWithTitle from '@/templates/Home/ImageWithTitle';
import ContactMe from '@/templates/Home/ContactMe';

export default function Home({ data }: any) {
  // console.log('data from props:', data);

  return (
    <main>
			<Header
				data={data?.header}
				// isActiveStyles={`text-grey`}
				darkHeader={false}
			/>
      {
        data?.pageData.map((section: any, index: any) => {
          if (section.layout === 'image_with_title') {
            return (
              <ImageWithTitle
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[150px] pb-[75px]`}
                title={section?.title}
                img={section?.img}
                img_alt={section?.img_alt}
              />
            );
          }
          if (section.layout === 'beautiful_design') {
            return (
              <ImageGrid
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[75px] pb-[50px]`}
                title={section?.title}
                images={section?.images}
              />
            );
          }
          if (section.layout === 'graphics') {
            return (
              <ImageGrid
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[75px] pb-[50px]`}
                title={section?.title}
                images={section?.images}
              />
            );
          }
          
          if (section.layout === 'component_library') {
            return (
              <ImageGrid
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[75px] pb-[50px]`}
                title={section?.title}
                images={section?.images}
              />
            );
          }
          if (section.layout === 'full_works') {
            return (
              <AllWorks
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[75px] pb-[50px]`}
                title={section?.title}
                svg_icon={section?.svg_icon}
                all_works={section?.all_works}
              />
            );
          }
          if (section.layout === 'contact_me') {
            return (
              <ContactMe
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto bg-[#F4F3F4] rounded-[25px] p-[40px] mt-[50px]`}
                title={section?.title}
                description={section?.description}
                svg_icon={section?.svg_icon}
                contact_list={section?.contact_list}
              />
            );
          }
        })
      }
      <Footer data={data?.footer} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = process.cwd() + '/src/utils/json/works/en.json';
  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);

  return {
    props: {
      data,
    },
  };
};
