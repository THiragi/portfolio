import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Main from '../../styles/main';

const Section = styled.section`
  ${tw `py-64 w-full`}
`;

const Block = styled.div`
  ${tw `text-3xl text-center leading-none tracking-widest`}
`;

const Title = styled.div`
  ${tw `text-beige bg-magenta pl-2 font-bold inline-flex my-8`}

`;

const Name = styled.div`
  ${tw `text-magenta px-2 font-bold inline-flex`}
`;

const Discription = styled.div`
  ${tw `text-center leading-loose`}
`;

type Props = {
  data: HeroData
};

type HeroData = {
  id: string,
  name: string,
  title: string,
  contentHtml: string,
};

const Hero: React.FC<Props> = ({data}) => {
  return (
    <Section>
      <Main>
        <Block>
          <Name id={data.id}>
            {data.name}
          </Name>
          <Title>
            {data.title}
          </Title>
        </Block>
        <Discription dangerouslySetInnerHTML={{ __html: data.contentHtml }}/>      
      </Main>
    </Section>
  );
};

export default Hero;