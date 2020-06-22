import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import tw from 'twin.macro';
import Head from 'next/head';
import Link from 'next/link';

type Props = {
  primary?: boolean
}

const Wrapper = styled.div`
  ${tw `pt-48`}
`;

const Box = styled.div`
  ${tw `md:bg-teal-500`}
`;


const Btn = styled.button<Props>`
  ${props => props.primary ? tw `text-white bg-red-500`: tw `text-pink-500 bg-white`}
  ${tw `text-base m-4 rounded-md border-2 border-solid border-red-500 py-1 px-4`}
`;

type BtnProps = {
  str: string
}

const CustomBtn: React.FC<BtnProps> = ({str}) => {
  const [flg, setFlg] = useState(true);
  function handleClick() {
    setFlg(!flg);
  }
  return (
    <Btn primary={flg} onClick={handleClick}>{str}</Btn>
  );
}

function Counter() {
  const [num, setNum] = useState(0);
  function handleClick() {
    setNum(num+1)
  }
  return (
    <button onClick={handleClick}>{num}</button>
  );
}

const Section = styled.section`
  ${tw `w-full`}
`;

const H3 = styled.h3`
  ${tw `text-6xl`}
`;


const AboutDemo: React.FC = () => {
  const el = useRef(null);

  const handleScroll = () => {
    el.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  useEffect(() => {
    console.log(el.current.textContent);
  },[]);
  return (
    <Section>
      <button onClick={handleScroll}>About</button>
      <div>
        content/content/content/content/content/content/content/content/content/content/content/
      </div>
      <ul>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
      </ul>
      <H3 ref={el}>AboutDemo</H3>
      <ul>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
        <li>Content</li>
      </ul>

    </Section>
  );
}


const Sample: React.FC = () => {

  return (
    <Layout>
      <Head>
        <title>T.hiragi</title>
      </Head>
      <Wrapper>
        <AboutDemo />
        <Counter />
        <CustomBtn str={"Normal"}/>
        <Box>
          <Link href="/"><a>Top Page!</a></Link>
        </Box>
      </Wrapper>
    </Layout>
  )
}


export default Sample;