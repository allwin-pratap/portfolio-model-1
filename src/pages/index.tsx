import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Intro from '@/templates/Home/Intro';
import WorkHighLights from "@/templates/Home/WorkHighLights";
import ImageWithTitle from '@/templates/Home/ImageWithTitle';
import NonDisclosureAgree from '@/templates/Home/NonDisclosureAgree';
import ContactMe from '@/templates/Home/ContactMe';

export default function Home({ data }: any) {
  // console.log('data from props:', data);

  return (
    <main>
      <Header data={data?.header} />
      {
        data?.pageData.map((section: any, index: any) => {
          if (section.layout === 'self_intro') {
            return (
              <Intro
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[150px] pb-[75px] `}
                title={section?.title}
                job_role={section?.job_role}
                description={section?.description}
                current_working={section?.current_working}
                svg_icon={section?.svg_icon}
              />
            );
          }
          if (section.layout === 'work_high_lights') {
            return (
              <WorkHighLights
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[75px] pb-[50px]`}
                title={section?.title}
                svg_icon={section?.svg_icon}
                work_high_lights={section?.work_high_lights}
              />
            );
          }
          if (section.layout === 'image_with_title') {
            return (
              <ImageWithTitle
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto bg-[#FAFAFA] rounded-[25px] p-[60px] mt-[50px]`}
                title={section?.title}
                img={section?.img}
                img_alt={section?.img_alt}
              />
            );
          }
          if (section.layout === 'non_disclosure_agreement') {
            return (
              <NonDisclosureAgree
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[75px] pb-[50px]`}
                title={section?.title}
                description={section?.description}
                svg_icon={section?.svg_icon}
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
  const filePath = process.cwd() + '/src/utils/json/home/en.json';
  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);

  return {
    props: {
      data,
    },
  };
};
