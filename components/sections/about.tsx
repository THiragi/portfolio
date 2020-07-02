import React,{ useEffect, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Section = styled.section`
  ${tw `py-20 w-full`}
`;

const Main = styled.main`
  ${tw `max-w-4xl py-0 mx-auto z-0`}
`;

const H3 = styled.h3`
  ${tw `pb-4 text-6xl text-magenta`}
`;

const Inner = styled.div`
  ${tw `flex justify-between`}
`;

const ProfImage = styled.img`
  ${tw `rounded-full max-w-xs`}
`;

const ProfText = styled.div`
  ${tw `max-w-md`}
`;

type Props = {
  data: AboutData
};

type AboutData = {
  id: string,
  title: string,
  avatar: string,
  contentHtml: string,
};

const About: React.FC<Props> = ({data}) =>{

  return (
    <Section id="about">
      <Main>
        <H3 >{data.title}</H3>
        <Inner>
          <ProfText dangerouslySetInnerHTML={{ __html: data.contentHtml }}/>
          <div>
            <ProfImage src={data.avatar}/>
          </div>
        </Inner>
      </Main>
    </Section>
  );
};

export default About;