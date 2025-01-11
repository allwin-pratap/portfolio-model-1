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
      404 not found Error
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
