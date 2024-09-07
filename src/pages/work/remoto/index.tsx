import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WorkDetailIntro from "@/templates/WorkDetail/common/WorkDetailIntro";
import KeyImprovements from '@/templates/WorkDetail/enduroom-uem/KeyImprovements';
import RefreshedDesign from "@/templates/WorkDetail/common/RefreshedDesign";
import NextCaseStudy from "@/templates/WorkDetail/common/NextCaseStudy";
import NonDisclosureAgree from '@/templates/Home/NonDisclosureAgree';
import ContactMe from '@/templates/Home/ContactMe';

export default function Remoto({ data }: any) {

  return (
    <main>
      <Header
        data={data?.header}
        darkHeader={false}
      />
      {
        data?.pageData.map((section: any, index: any) => {
          if (section.layout === 'project_intro') {
            return (
              <WorkDetailIntro
                key={index}
                layoutStyle={`max-w-[990px] w-[88%] mx-auto pt-[150px] pb-[75px]`}
                data={section?.project_intro}
              />
            );
          }
          if (section.layout === 'key_improve') {
            return (
              <KeyImprovements
                key={index}
                layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                title={section?.title}
                key_improve={section?.key_improve}
              />
            );
          }
          if (section.layout === 'refreshed_designs') {
            return (
              <RefreshedDesign
                key={index}
                layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                data={section?.refreshed_designs}
              />
            );
          }
          if (section.layout === 'next_case_study') {
            return (
              <NextCaseStudy
                key={index}
                layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                data={section?.next_case_study}
              />
            );
          }
          if (section.layout === 'non_disclosure_agreement') {
            return (
              <NonDisclosureAgree
                key={index}
                layoutStyle={`max-w-[990px] w-[88%] mx-auto pb-[50px]`}
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
  const filePath = process.cwd() + '/src/utils/json/work/remoto/en.json';
  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);

  return {
    props: {
      data,
    },
  };
};
