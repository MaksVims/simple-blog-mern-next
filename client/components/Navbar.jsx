import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.white};
`

const Nav = styled.nav`
  padding: 17px 0;
  position: relative;
`

const Logo = styled.a`
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
`

const AddPostBtn = styled.a`
  padding: 5px 12px;
  min-width: 100px;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  position: absolute;
  z-index: 20;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  transition: box-shadow .3s;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.blue};
  border-radius: ${props => props.theme.radius.small};

  &:hover, &:focus {
    box-shadow: ${props => props.theme.hover.shadow};
    transition: box-shadow .3s;
  }
`

const Navbar = () => {
  return (
    <Header>
      <div className="container">
        <Nav>
          <Link href={'/'}>
            <Logo>NEXT | BLOG</Logo>
          </Link>
          <Link href={'/add-post'}>
            <AddPostBtn>Добавить статью</AddPostBtn>
          </Link>
        </Nav>
      </div>
    </Header>
  );
};

export default Navbar;
