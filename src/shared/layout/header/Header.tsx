'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ThemeToggle } from '../../ui/theme-toggle';

import Logo from '../../../../public/awizLogo.jpg';

import './header.css';

export const Header = () => (
  <header>
    <div className="storybook-header fixed top-0 right-0 left-0 z-50">
      <Link href="/" className="flex">
        <Image src={Logo} alt="Acme Logo" width={32} height={32} />
        <h1>Awiz</h1>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle size="large" variant="minimal" />
      </div>
    </div>
  </header>
);
