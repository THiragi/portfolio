import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Section = styled.section`
  ${tw `py-20 w-full`}
`;

const Main = styled.main`
  ${tw `max-w-4xl p-4 mx-auto z-0`}
`;

const H3 = styled.h3`
  ${tw `pb-8 text-6xl text-magenta text-center`}
`;

const Inner = styled.div`
  ${tw `md:flex md:justify-between`}
`;

const ProfImage = styled.img`
  ${tw `mx-auto rounded-full max-w-xs`}
`;

const ProfText = styled.div`
  ${tw `w-full md:max-w-md md:mr-12`}
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