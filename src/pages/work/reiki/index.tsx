import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import React from 'react';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WorkDetailIntro from "@/templates/WorkDetail/common/WorkDetailIntro";
import JapaneseContent from '@/templates/WorkDetail/reiki/JapaneseContent';
import ScopeReiki from '@/templates/WorkDetail/reiki/ScopeReiki';
import ReikiStatistics from '@/templates/WorkDetail/reiki/ReikiStatistics';
import UserResearch from '@/templates/WorkDetail/reiki/UserResearch';
import CommonInsight from '@/templates/WorkDetail/reiki/CommonInsight';
import MeetReiki from '@/templates/WorkDetail/reiki/MeetReiki';
import KeyImprovements from '@/templates/WorkDetail/common/KeyImprovements';
import RefreshedDesign from "@/templates/WorkDetail/common/RefreshedDesign";
// import NextCaseStudy from "@/templates/WorkDetail/common/NextCaseStudy";
// import NonDisclosureAgree from '@/templates/Home/NonDisclosureAgree';
import ContactMe from '@/templates/Home/ContactMe';

export default function Reiki({ data }: any) {

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
                {section.layout === 'project_intro' && (
                  <WorkDetailIntro
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto pt-[150px] pb-[75px]`}
                    data={section?.project_intro}
                  />
                )}

                {section.layout === 'japanese_meaning' && (
                  <JapaneseContent
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    title={section?.title}
                    data={section?.japanese_meaning}
                  />
                )}

                {section.layout === 'scope_of_reiki' && (
                  <ScopeReiki
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    title={section?.title}
                    data={section?.scope_of_reiki}
                  />
                )}

                {section.layout === 'key_improve' && (
                  <KeyImprovements
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    title={section?.title}
                    key_improve={section?.key_improve}
                  />
                )}

                {section.layout === 'reiki_statictics' && (
                  <ReikiStatistics
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    data={section?.reiki_statictics}
                  />
                )}

                {section.layout === 'user_research' && (
                  <UserResearch
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    data={section?.user_research}
                  />
                )}

                {section.layout === 'common_insight' && (
                  <CommonInsight
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    data={section?.common_insight}
                  />
                )}

                {section.layout === 'meet_reiki' && (
                  <MeetReiki
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    data={section?.meet_reiki}
                  />
                )}

                {section.layout === 'refreshed_designs' && (
                  <RefreshedDesign
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    data={section?.refreshed_designs}
                  />
                )}

                {/* {section.layout === 'next_case_study' && (
                  <NextCaseStudy
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto py-[75px]`}
                    next_case_study={section?.next_case_study}
                  />
                )} */}

                {/* {section.layout === 'non_disclosure_agreement' && (
                  <NonDisclosureAgree
                    layoutStyle={`max-w-[990px] w-[88%] mx-auto pb-[50px]`}
                    title={section?.title}
                    description={section?.description}
                    svg_icon={section?.svg_icon}
                  />
                )} */}

                {section.layout === 'contact_me' && (
                  <ContactMe
                    layoutStyle={`max-w-[1280px] w-[88%] mx-auto bg-[#F4F3F4] rounded-[25px] p-[40px] mt-[50px]`}
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
  const filePath = process.cwd() + '/src/utils/json/work/reiki/en.json';
  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);

  return {
    props: {
      data,
    },
  };
};
