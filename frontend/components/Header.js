import Link from 'next/link';
import styled from 'styled-components';

import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem;
    background: ${props => props.theme.red};
    color: white;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const Header = () => (
  <div>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a title="Allicin Home">Allicin</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
