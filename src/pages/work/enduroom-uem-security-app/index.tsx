import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WorkDetailIntro from "@/templates/WorkDetail/common/WorkDetailIntro";
import KeyImprovements from '@/templates/WorkDetail/common/KeyImprovements';
import DesignConsideration from '@/templates/WorkDetail/enduroom-uem/DesignConsideration';
import ShortDetail from '@/templates/WorkDetail/enduroom-uem/ShortDetail';
import RefreshedDesign from "@/templates/WorkDetail/common/RefreshedDesign";
import NextCaseStudy from "@/templates/WorkDetail/common/NextCaseStudy";
import NonDisclosureAgree from '@/templates/Home/NonDisclosureAgree';
import ContactMe from '@/templates/Home/ContactMe';
import ScrollVolumeTracker from '@/components/ScrollVolumeTracker';

export default function EnduroomUEM({ data }: any) {

  return (
    <main>
      <Header
        data={data?.header}
        darkHeader={false}
      />
      <ScrollVolumeTracker />
      {
        data?.pageData.map((section: any, index: any) => {
          return (
            <React.Fragment key={index}>
              <AnimatedWrapper>
                {section.layout === 'project_intro' && (
                  <WorkDetailIntro
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto pt-[150px] pb-[75px]`}
                    data={section?.project_intro}
                  />
                )}

                {section.layout === 'key_improve' && (
                  <KeyImprovements
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    title={section?.title}
                    key_improve={section?.key_improve}
                    borderTransparent={true}
                  />
                )}

                {section.layout === 'design_consider' && (
                  <DesignConsideration
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    data={section?.content}
                  />
                )}

                {section.layout === 'short_details' && (
                  <ShortDetail
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    data={section?.content}
                  />
                )}

                {section.layout === 'refreshed_designs' && (
                  <RefreshedDesign
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto pt-[75px]`}
                    data={section?.refreshed_designs}
                  />
                )}

                {section.layout === 'next_case_study' && (
                  <NextCaseStudy
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    next_case_study={section?.next_case_study}
                    design_system={section?.design_system}
                    result={section?.result}
                  />
                )}

                {section.layout === 'non_disclosure_agreement' && (
                  <NonDisclosureAgree
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto pb-[50px]`}
                    title={section?.title}
                    description={section?.description}
                    svg_icon={section?.svg_icon}
                  />
                )}

                {section.layout === 'contact_me' && (
                  <ContactMe />
                )}
              </AnimatedWrapper>
            </React.Fragment>
          );
        })
      }
      <Footer/>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = process.cwd() + '/src/utils/json/work/enduroom-uem/en.json';
  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);

  return {
    props: {
      data,
    },
  };
};
