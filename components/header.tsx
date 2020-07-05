import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Menu from './menu';
import styled from 'styled-components';
import tw from 'twin.macro';
import {navLinks} from '../config';

const MenuBtn = styled.div`
  ${tw `flex md:hidden`}
`;

const Outer = styled.header<{isUp: boolean}>`
  ${tw `bg-beige fixed w-full transition-all duration-300 ease-out z-10 shadow-xs`}
  ${({isUp}) => isUp ? tw `transform translate-y-0`: tw `transform -translate-y-20`}
`;

const Wrapper = styled.div`
  ${tw `p-4 flex justify-between max-w-4xl mx-auto items-center`}
`;

const Logo = styled.a`
  ${tw `cursor-pointer text-3xl font-bold tracking-widest`}
`;

const LogoTone = styled.span`
  ${tw `text-magenta`}
`;

const Navi = styled.nav`
  ${tw `hidden md:flex items-center`}
`;

const Ul = styled.ul`
  ${tw `flex justify-between`}
`;

const Li = styled.li`
  ${tw `ml-10 text-xl hover:text-magenta transition-all duration-300`}
`;

const Header: React.FC = () =>{
  const [isUp, setIsUp] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);
  
  const toggleMenu = (): void => setIsOpen(!isOpen);

  const handleScroll = (): void => {
    if (isOpen) {
      return;
    }
    const position = Math.max(window.pageYOffset, document.documentElement.scrollTop);
    let upState: boolean = (position < scrollTop) ? true : false;
    setIsUp(upState);
    setScrollTop(position);
  };

  const handleResize = (): void => {
    if (window.innerWidth > 767 && isOpen) {
      toggleMenu();
    }
  };
  

  /**
   * クリーンアップ
   * 
   * classコンポーネントのライフサイクルメソッド
   * componentDidMount()とcomponentWillUnmount()にあたる処理
   */
  useEffect(
    () => {
      // HeaderがDOMとして書き出された時にスクロールイベントに追加される。
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      // Headerが書き換えられる時、スクロールイベントをリセットする。
      return (): void => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      }
    },
  );
  
  return (
    <div>
      <Outer isUp={isUp}>
        <Wrapper>
          <h1>
            <Link href="/">
              <Logo>
                <LogoTone>
                T  
                </LogoTone>
                .h
              </Logo>
            </Link>
          </h1>
          <MenuBtn onClick={toggleMenu} >
            <button>
              <svg className={`h-6 w-6 fill-current`} viewBox={`0 0 24 24`}>
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
              </svg>
            </button>
          </MenuBtn>
          <Navi>
            <Ul>
              {navLinks.map(({name,url}, i) => (
                <Li key={i}>
                  <a href={url}>{name}</a>
                </Li>
              ))}
            </Ul>
          </Navi>
        </Wrapper>
      </Outer>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu}/>
    </div>
  );
}

export default Header;