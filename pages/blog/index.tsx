import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/layout';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';

const Section = styled.section`
  ${tw `py-64 w-full`}
`;
const Home = ({blogs}) => {
  return (
    <Layout>
      <Section>
        <div>
          {blogs.map(blog => (
            <React.Fragment key={blog.id}>
              <Link href="/blog/[id]" as={`blog/${blog.id}`}>
                <a>
                  <h2>{blog.title}</h2>
                </a>
              </Link>
              {blog.tags.map(tag => (
                <React.Fragment key={tag.id}>
                  <span>{tag.name}</span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const res = await fetch(
    process.env.ENDPOINT + `/blogs`,
    key,
  );
  const data = await res.json();

  return {
    props: {
      blogs: data.contents,
    }
  }
};

export default Home;