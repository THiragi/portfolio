import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Section from '../../styles/section';
import Caption from '../../styles/caption';
import Main from '../../styles/main';


const H3 = styled(Caption)`
  ${tw `text-magenta`}
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