import React, { useEffect, useState, useRef } from 'react';
import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';
import Head from 'next/head';
import { getContentsData } from '../lib/contents';
import { GetStaticProps } from 'next';

type Props = {
  data: Data
}

type Data = {
  name: string,
  contents: Content[]
}

type Content = {
  id: string;
  contentHtml: string;
}

const Home: React.FC<Props> = ({data}) => {
  return (
    <Layout>
      <Head>
        <title>T.hiragi: portfolio</title>
      </Head>
      <Hero data={data['hero'][0]} />
      <About data={data['about'][0]} />
      <Skills data={data['skills']} />
      <Projects data={data['projects']} />
      <Contact data={data['contact'][0]} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getContentsData();
  return {
    props: {
      data
    }
  }
}

export default Home;