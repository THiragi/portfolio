import Head from 'next/head';
import styled from 'styled-components';
import tw from 'twin.macro';
import Header from './header';

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`${tw `container `}`;

const Main = styled.main`
  ${tw `max-w-4xl py-0 px-4 mx-auto z-0`}
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta 
          name="description"
          content="Takashi Hiragi's Portfolio"
        />
        <meta 
          name="viewport" 
          content="width=device-width,initial-scale=1" 
        />
      </Head>
      <Header />
      <Container>
        <Main>{children}</Main>
      </Container>
    </div>
  );
};

export default Layout;