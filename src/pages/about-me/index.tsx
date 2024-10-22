import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import AboutIntro from "@/templates/AboutMe/AboutIntro";
import AppoarchMethod from '@/templates/AboutMe/AppoarchMethod';
import OtherDetails from '@/templates/AboutMe/OtherDetails'
import ContactMe from '@/templates/Home/ContactMe';

export default function AboutMe({ data }: any) {
  return (
    <main className="bg-[url('./../../public/assets/img/dots.svg')] bg-center bg-repeat bg-auto bg-center h-full w-full">
      <Header
        data={data?.header}
        darkHeader={false}
      />
      {
        data?.pageData.map((section: any, index: any) => {
          return (
            <React.Fragment key={index}>
              <AnimatedWrapper>
                {section.layout === 'about_intro' && (
                  <AboutIntro
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[150px] mb-[50px]`}
                    title={section?.title}
                    description={section?.description}
                    run_image={section?.run_image}
                    run_image_alt={section?.run_image_alt}
                    hi_icon={section?.hi_icon}
                    social_connect={section?.social_connect}
                  />
                )}

                {section.layout === 'appoarch_methods' && (
                  <AppoarchMethod
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto my-[50px]`}
                    title={section?.title}
                    appoarch_methods={section?.appoarch_methods}
                  />
                )}

                {section.layout === 'other_details' && (
                  <OtherDetails
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto my-[50px]`}
                    things_do={section?.things_do}
                    my_stack={section?.my_stack}
                    personal_doing={section?.personal_doing}
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
  const filePath = process.cwd() + '/src/utils/json/about-me/en.json';
  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);

  return {
    props: {
      data,
    },
  };
};
