import React, { useEffect, useState, useRef } from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import tw from 'twin.macro';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';

type Props = {
  allPostsData: {
    date: string,
    title: string,
    id: string
  }[]
}

const Section = styled.section`
  ${tw `pt-48 w-full`}
`;

const H3 = styled.h3`
  ${tw `text-6xl`}
`;
const Home: React.FC<Props> = ({allPostsData}) => {
  return (
    <Layout>
      <Head>
        <title>T.hiragi</title>
      </Head>
      <div>
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({id, date, title}) => (
              <li key={id}>
                <a>
                  {title}
                </a>
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home;