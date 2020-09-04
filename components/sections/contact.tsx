import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Caption from '../../styles/caption';
import Main from '../../styles/main';

const Section = styled.section`
  ${tw `py-20 w-full bg-lamp`}
`;

const StyledMain = styled(Main)`
  ${tw `text-beige`}
`;

const Inner = styled.div`
  ${tw `text-center`}
`;

const Address = styled.div`
  ${tw `font-bold py-2`}
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
      <StyledMain>
        <Caption >contact</Caption>
        <Inner>
          <Address >{data.email}</Address>
        </Inner>
      </StyledMain>
    </Section>
  );

};
export default Contact;