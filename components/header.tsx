import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';
import {navLinks, navHeight} from '../config';

const MenuBtn = styled.div`
  ${tw `md:hidden`}
`;

const MenuIcon: React.FC = () => {
  return (
    <MenuBtn>
      <button>
        <svg className={`h-6 w-6 fill-current`} viewBox={`0 0 24 24`}>
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
        </svg>
      </button>
    </MenuBtn>
  );
}


const Outer = styled.header<{isUp: boolean}>`
  ${tw `py-4 fixed w-full bg-white transition-all duration-300 ease-out z-10`}
  ${({isUp}) => isUp ? tw `transform translate-y-0`: tw `transform -translate-y-20`}
`;

const Wrapper = styled.div`
  ${tw `flex justify-between max-w-4xl mx-auto`}
`;

const Logo = styled.a`
  ${tw `cursor-pointer text-3xl font-bold tracking-widest`}
`;

const LogoTone = styled.span`
  ${tw `text-teal-500`}
`;

const Navi = styled.nav`
  ${tw `hidden md:block`}
  width: 320px;
`;

const Ul = styled.ul`
  ${tw `flex justify-between`}
`;


const Header: React.FC = () =>{
  const [isUp, setIsUp] = useState<boolean>(true);
  const [scrollTop, setScrollTop] = useState<number>(0);

  const onScroll = (): void => {
    const position = Math.max(window.pageYOffset, document.documentElement.scrollTop);
    let upState: boolean = (position < scrollTop) ? true : false;
    setIsUp(upState);
    setScrollTop(position);
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
      document.addEventListener("scroll", onScroll);
      // Headerが書き換えられる時、スクロールイベントをリセットする。
      return (): void => document.removeEventListener("scroll", onScroll);
    },
  );
  
  return (
    <Outer isUp={isUp}>
      <Wrapper>
        <h1>
          <Link href="/">
            <Logo>
              T
              <LogoTone>
                .hiragi
              </LogoTone>
            </Logo>
          </Link>
        </h1>
        <MenuIcon />
        <Navi>
          <Ul>
            {
              navLinks.map(({name,url}, i) => (
                <li key={i}>
                  <Link href={url}>
                    <a>
                      {name}
                    </a>
                  </Link>
                </li>
              ))
            }
          </Ul>
        </Navi>
      </Wrapper>
    </Outer>
  );
}

export default Header;