import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = props => (
  <NavStyles>
    <Link href="/items">
      <a title="">Items</a>
    </Link>

    <Link href="/sell">
      <a title="">sell</a>
    </Link>

    <Link href="/signup">
      <a title="">signup</a>
    </Link>

    <Link href="/orders">
      <a title="">orders</a>
    </Link>

    <Link href="/me">
      <a title="">Account</a>
    </Link>
  </NavStyles>
);

export default Nav;
