import Head from 'next/head'
import Navbar from "./Navbar";
import styled from "styled-components";

const SiteWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100vw;
  grid-template-rows: auto 1fr;
`

const Wrapper = styled.main`
  background: ${props => props.theme.colors.lightBlue};
`

const MainContainer = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <SiteWrapper>
        <Navbar/>
        <Wrapper>
          <div className="container">
            {children}
          </div>
        </Wrapper>
      </SiteWrapper>
    </>
  );
};

export default MainContainer;
