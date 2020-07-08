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
  ${tw ``}
`;

const Tag = styled.div`
  ${tw `flex justify-between mb-8`}
`;

const Title = styled.h4`
  ${tw `text-3xl font-bold leading-none `}
`;

const GitIcon = styled.a`
  width: 32px;
  height: 32px;
  background-image: url(/icon/GitHub-Mark-32px.png);
  ${tw `hover:opacity-50 duration-300`}
`;
 
const Category = styled.div`
  ${tw `mb-8 w-full`}
`;

const Info = styled.div`
  ${tw `md:flex  md:justify-between`}`;

const Detail = styled.div`
  ${tw `md:w-3/6 w-full mb-8`}
`;

const Thumbnail = styled.img`
  ${tw `object-none h-64 w-full opacity-100 hover:opacity-75 duration-300`}
`;

const PhotoFrame = styled.div`
  ${tw `bg-magenta h-64 md:w-5/12 w-full mb-8`}
`;

const PhotoCanvas = styled.a`
  ${tw ``}
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
        <H3>projects</H3>
        <Inner>
          {projects.map((project,i) => (
            <Category key={i}>
              <Info>
                <Detail>
                  <Tag>
                    <Title>
                        {project.title}
                    </Title>
                    {(project.github) && <GitIcon href={project.github} target="_blank" />}
                  </Tag>
                  <Discription dangerouslySetInnerHTML={{ __html: project.contentHtml }}/>
                  <TechList>
                    {project.tech.map((v,i) => <TechItem key={i}>{v}</TechItem>)}
                  </TechList>
                </Detail>
                <PhotoFrame>
                  <PhotoCanvas href={project.url} target="_blank">
                    <Thumbnail src={project.img} />
                  </PhotoCanvas>
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