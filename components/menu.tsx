import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {navLinks} from '../config';
import styled from 'styled-components';
import tw from 'twin.macro';

const Outer = styled.div<{isOpen: boolean}>`
  ${tw `
    fixed top-0 bottom-0 right-0 w-full h-screen 
    md:hidden block bg-black opacity-25 z-20
  `}
  ${({isOpen}) => isOpen ? tw `visible`: tw `invisible`}
`;

const Sidebar = styled.aside<{isOpen: boolean}>`
  ${tw `
    fixed flex-col bg-gray-700 h-screen w-64 right-0 ml-auto py-10 shadow-2xl
    transition-all duration-300 ease-out z-30
    md:hidden block
  `}
  ${({isOpen}) => isOpen ? tw `transform translate-x-0 visible`: tw `transform translate-x-full invisible`}
`;

const Nav = styled.nav`
  ${tw `w-full flex-col text-center text-beige`}
`;

const List = styled.ul`
  ${tw `p-0 m-0 w-full`}
`;

const CloseBtn = styled.li`
  ${tw `active:bg-gray-600 border-b border-gray-800 py-4`}
`;

const ListItem = styled.li`
  ${tw `relative active:bg-gray-600 p-8 border-b border-gray-800 text-xl`}
`;


const NavLink = styled.a`
  ${tw `absolute block w-full h-full top-0 left-0 p-4 align-middle`}
`;

type Props = {
  isOpen: boolean,
  toggleMenu: () => void,
}


const Menu: React.FC<Props> = ({isOpen, toggleMenu}) => {

  const handleClick = () => {
    toggleMenu();
  }
  return (
    <div>
      <Outer isOpen={isOpen} onClick={handleClick}/>
      <Sidebar  isOpen={isOpen}>
        <Nav>
          <List>
            <CloseBtn onClick={handleClick}>
              <svg className={`h-10 w-10 mx-auto`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <g id="Rectangle">
                  <rect fill="none" width="48" height="48"/>
                </g>
                <g id="icon_data">
                  <line fill="none" stroke="#2d3748" strokeWidth="4px" x1="12.13" y1="12.63" x2="36.13" y2="36.13"/>
                  <line fill="none" stroke="#2d3748" strokeWidth="4px" x1="12.38" y1="36.38" x2="35.88" y2="12.38"/>
                </g>
              </svg>
            </CloseBtn>
            {navLinks && navLinks.map(({url, name}, i) => (
              <ListItem key={i} onClick={handleClick}>
                  <NavLink href={url}>{name}</NavLink>
              </ListItem>
            ))}
          </List> 
        </Nav>
      </Sidebar>
    </div>
  );
}

export default Menu;