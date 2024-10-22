import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ImageGrid from "@/templates/Works/ImageGrid";
import AllWorks from "@/templates/Works/AllWorks";
import ImageWithTitle from '@/templates/Home/ImageWithTitle';
import ContactMe from '@/templates/Home/ContactMe';

export default function Works({ data }: any) {

  return (
    <main>
      <Header
        data={data?.header}
        darkHeader={false}
      />
      {
        data?.pageData.map((section: any, index: any) => {
          return (
            <React.Fragment key={index}>
              <AnimatedWrapper>
                {section.layout === 'image_with_title' && (
                  <ImageWithTitle
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[150px] pb-[75px]`}
                    title={section?.title}
                    img={section?.img}
                    img_alt={section?.img_alt}
                  />
                )}

                {section.layout === 'full_works' && (
                  <AllWorks
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[75px] pb-[50px]`}
                    title={section?.title}
                    svg_icon={section?.svg_icon}
                    all_works={section?.all_works}
                  />
                )}

                {section.layout === 'beautiful_design' && (
                  <ImageGrid
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[75px] pb-[50px]`}
                    title={section?.title}
                    images={section?.images}
                  />
                )}

                {section.layout === 'graphics' && (
                  <ImageGrid
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[75px] pb-[50px]`}
                    title={section?.title}
                    images={section?.images}
                  />
                )}

                {section.layout === 'component_library' && (
                  <ImageGrid
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[75px] pb-[50px]`}
                    title={section?.title}
                    images={section?.images}
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
  const filePath = process.cwd() + '/src/utils/json/works/en.json';
  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);

  return {
    props: {
      data,
    },
  };
};
