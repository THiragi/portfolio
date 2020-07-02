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

const Tag = styled.div`
  ${tw `flex justify-between mb-4`}
`;

const Title = styled.h4`
  ${tw `text-3xl font-bold leading-none `}
`;

const GitBtn = styled.button`
  ${tw `bg-beige text-magenta border-magenta border-2 px-2  hover:bg-magenta hover:text-beige transition-all duration-300`}
`;
 
const Category = styled.div`
  ${tw ` mb-10 w-full`}
`;

const Info = styled.div`
  ${tw `flex  justify-between`}`;

const Detail = styled.div`
  ${tw `w-3/6`}
`;

const Thumbnail = styled.img`
  ${tw `h-64 hover:opacity-75 opacity-100 transition-all duration-300 cursor-pointer`}
`;

const PhotoFrame = styled.div`
  ${tw `bg-magenta h-64`}
`;

const Discription = styled.div`
  ${tw `mb-4`}
`;

const TechList = styled.ul`
  ${tw ``}
`;

const TechItem = styled.li`
  ${tw `inline-block bg-lamp text-beige mr-1 mb-1 p-1 leading-none`}
`;


type Props = {
  data: SkillData[]
};

type SkillData = {
  id: string,
  title: string,
  url: string,
  date: string,
  github: string,
  img: string,
  tech: string[],
  contentHtml: string,
};

const Projects: React.FC<Props> = ({data}) => {
  const projects = data.sort((a,b) => a.date < b.date ? 1 : -1);
  return (
    <Section id="projects">
      <Main>       
        <H3>Projects</H3>
        <Inner>
          {projects.map((project,i) => (
            <Category key={i}>
              <Info>
                <Detail>
                  <Tag>
                      <Title>
                          {project.title}
                      </Title>
                      {(project.github) && <GitBtn><a href={project.github}>GitHub</a></GitBtn>}

                  </Tag>
                  <Discription dangerouslySetInnerHTML={{ __html: project.contentHtml }}/>
                  <TechList>
                    {project.tech.map(item => <TechItem>{item}</TechItem>)}
                  </TechList>
                </Detail>
                <PhotoFrame>
                  <Thumbnail src={project.img} />
                </PhotoFrame>
              </Info>
            </Category>
          ))}
        </Inner>
      </Main>
    </Section>
  );
};

export default Projects;