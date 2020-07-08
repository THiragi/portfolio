import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {name} from '../config';


const Outer = styled.div`
  ${tw `bg-lamp text-beige py-10 w-full z-0`}
`;

const Wrapper = styled.div`
  ${tw `max-w-4xl mx-auto items-center text-center`}
`;


const Footer: React.FC = () =>{
  return (
    <Outer>
      <Wrapper>
        <div>designed and built by {name}</div>
      </Wrapper>
    </Outer>
  );
}

export default Footer;