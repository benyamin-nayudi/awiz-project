'use client';

import { Button } from '../../ui/button';
import { ThemeToggle } from '../../ui/theme-toggle';
import './header.css';

import Logo from '../../../../public/awizLogo.jpg';
import Image from 'next/image';
import Link from 'next/link';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <Link href="/" className="flex">
        <Image src={Logo} alt="Acme Logo" width={32} height={32} />
        <h1>Awiz</h1>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle size="small" variant="minimal" />
        <div>
          {user ? (
            <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
            </>
          )}
        </div>
      </div>
    </div>
  </header>
);
