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
  ${tw `flex flex-wrap justify-between`}
`;

const Category = styled.div`
  width: 30%;
  ${tw ` mb-12 text-left border-b-2 border-black`}
`;

const Title = styled.h4`
  ${tw `text-2xl font-bold text-center pb-4`}
`;

const Discription = styled.div`
  ${tw `pb-4 h-40`}
`;

const Experience = styled.div`
  ${tw `font-bold text-center pb-4`}
`;

type Props = {
  data: SkillData[]
};

type SkillData = {
  id: string,
  index: number,
  title: string,
  year: number,
  exp: number,
  contentHtml: string,
};

const Skills: React.FC<Props> = ({data}) => {
  const skills = data.sort((a,b) => a.index > b.index ? 1 : -1);
  return (
    <Section id="skills">
      <Main>
        <H3>Skills</H3>
        <Inner>
          {skills.map(skill => (
            <Category key={skill.index}>
              <Title>{skill.title}</Title>
              <Discription dangerouslySetInnerHTML={{ __html: skill.contentHtml }}/>
              <Experience>使用歴：{skill.year}年</Experience>
            </Category>
          ))}
        </Inner>
      </Main>
    </Section>
  );
};

export default Skills;