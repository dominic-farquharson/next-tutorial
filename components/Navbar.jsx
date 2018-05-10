import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/jokes">
      <a>Jokes</a>
    </Link>
  </nav>
);

export default Navbar;
