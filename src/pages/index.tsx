import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroStripe from "@/templates/Home/HeroStripe"
import Intro from '@/templates/Home/Intro';
import WorkHighLights from "@/templates/Home/WorkHighLights";
import ImageWithTitle from '@/templates/Home/ImageWithTitle';
import ProjectSlider from '@/templates/Home/ProjectSlider';
import NonDisclosureAgree from '@/templates/Home/NonDisclosureAgree';
import ContactMe from '@/templates/Home/ContactMe';

export default function Home({ data }: any) {

  return (
    <main className="bg-white bg-[radial-gradient(#D9D9D9_1px,transparent_0)] bg-[length:30px_30px] bg-[-19px_-19px]">
      <Header
        // headerStyles={`!bg-[#030C22]`}
        data={data?.header}
        // menuCustomStyles={`text-black hover:text-black xl:text-white xl:hover:text-white xl:hover:text-blue`}
        // isActiveStyles={`text-grey`}
        darkHeader={false}
      />
      {
        data?.pageData.map((section: any, index: any) => {
          return (
            <React.Fragment key={index}>
              <AnimatedWrapper>
                {section.layout === 'hero_stripe' && (
                  <HeroStripe
                    layoutStyle={`relative max-w-[1280px] w-[88%] mx-auto pt-[150px]`}
                    runner_img={section?.runner_img}
                    runner_img_alt={section?.runner_img_alt}
                    hi_icon={section?.hi_icon}
                  />
                )}

                {section.layout === 'self_intro' && (
                  <Intro
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto py-[30px] md:py-[60px]`}
                    title={section?.title}
                    job_role={section?.job_role}
                    description={section?.description}
                    current_working={section?.current_working}
                    svg_icon={section?.svg_icon}
                  />
                )}

                {section.layout === 'work_high_lights' && (
                  <WorkHighLights
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto py-[30px] md:pt-[60px] md:pb-[45px]`}
                    title={section?.title}
                    svg_icon={section?.svg_icon}
                    work_high_lights={section?.work_high_lights}
                  />
                )}

                {section.layout === 'image_with_title' && (
                  <ImageWithTitle
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto bg-[#FAFAFA] rounded-[25px] p-[30px] md:p-[60px] mt-[30px] md:mt-[50px]`}
                    title={section?.title}
                    img={section?.img}
                    img_alt={section?.img_alt}
                  />
                )}

                {section.layout === 'image_slider' && (
                  <ProjectSlider
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto py-[30px] md:py-[60px]`}
                    title={section?.title}
                    description={section?.description}
                    images={section?.images}
                  />
                )}

                {section.layout === 'non_disclosure_agreement' && (
                  <NonDisclosureAgree
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto pb-[30px] md:pb-[50px]`}
                    title={section?.title}
                    description={section?.description}
                    svg_icon={section?.svg_icon}
                  />
                )}

                {section.layout === 'contact_me' && (
                  <ContactMe
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto bg-[#FAFAFA] rounded-[25px] p-[40px]`}
                    title={section?.title}
                    description={section?.description}
                    svg_icon={section?.svg_icon}
                    contact_list={section?.contact_list}
                  />
                )}
              </AnimatedWrapper>
            </React.Fragment>
          );
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
