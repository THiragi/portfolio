import React,{ useEffect, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Section = styled.section`
  ${tw `bg-lamp py-20 w-full`}
`;
  
const Main = styled.main`
  ${tw `max-w-4xl py-0 mx-auto z-0 text-beige text-center`}
`;

const H3 = styled.h3`
  ${tw `pb-4 text-6xl`}
`;

const Inner = styled.div`
  ${tw `flex`}
`;

const Address = styled.div`
  ${tw `font-bold py-2`}
`;

const ProfText = styled.div`
  ${tw ``}
`;

type Props = {
  data: ContactData
};

type ContactData = {
  id: string,
  title: string,
  email: string,
  contentHtml: string,
};

const Contact: React.FC<Props> = ({data}) =>{
  return (
    <Section id="contact">
      <Main>
        <H3 >contact</H3>
        <Inner>
        </Inner>
        <Address >{data.email}</Address>
      </Main>
    </Section>
  );

};
export default Contact;