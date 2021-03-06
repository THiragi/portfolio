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
  ${tw `flex flex-wrap justify-between`}
`;

const Category = styled.div`
  ${tw `md:w-3/10  w-full mb-12 text-left border-b-2 border-black`}
`;

const Title = styled.h4`
  ${tw `text-2xl font-bold text-center pb-4`}
`;

const Discription = styled.div`
  ${tw `pb-4`}
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
        <H3>skills</H3>
        <Inner>
          {skills.map(skill => (
            <Category key={skill.index}>
              <Title>{skill.title}</Title>
              <Experience>使用歴：{skill.year}年</Experience>
              <Discription dangerouslySetInnerHTML={{ __html: skill.contentHtml }}/>
            </Category>
          ))}
        </Inner>
      </Main>
    </Section>
  );
};

export default Skills;