import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import AboutIntro from "@/templates/AboutMe/AboutIntro";
import AppoarchMethod from '@/templates/AboutMe/AppoarchMethod';
import ContactMe from '@/templates/Home/ContactMe';

export default function AboutMe({ data }: any) {
  return (
    <main>
			<Header
				data={data?.header}
				darkHeader={false}
			/>
      {
        data?.pageData.map((section: any, index: any) => {
          if (section.layout === 'about_intro') {
            return (
              <AboutIntro
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto pt-[150px] pb-[75px]`}
                title={section?.title}
                description={section?.description}
                run_image={section?.run_image}
                run_image_alt={section?.run_image_alt}
                social_connect={section?.social_connect}
              />
            );
          }
          if (section.layout === 'appoarch_methods') {
            return (
              <AppoarchMethod
                key={index}
                layoutStyle={`max-w-[1280px] w-[88%] mx-auto my-[75px]`}
                title={section?.title}
                appoarch_methods={section?.appoarch_methods}
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
  const filePath = process.cwd() + '/src/utils/json/about-me/en.json';
  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);

  return {
    props: {
      data,
    },
  };
};
