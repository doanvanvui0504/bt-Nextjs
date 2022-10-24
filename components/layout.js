import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
