import React,{ useEffect, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Section = styled.section`
  ${tw `pt-48 w-full`}
`;

const H3 = styled.h3`
  ${tw `text-6xl`}
`;

const Hero: React.FC = () =>{

  return (
    <Section>
      <H3>About</H3>
      <div>
        contentscontentscontentscontentscontentscontents
      </div>
    </Section>
  );
};

export default Hero;