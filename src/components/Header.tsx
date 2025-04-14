import React from 'react';
import Link from 'next/link';
import { Moon } from 'lucide-react';
import { CommonBlackLogo } from './CommonBlackLogo';

interface NavigationItem {
  href: string;
  label: string;
}

interface HeaderProps {
  siteName: string;
  navigationItems: NavigationItem[];
}

export default function Header({ siteName, navigationItems }: HeaderProps) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <header className="z-50 mx-auto flex shrink-0 flex-row items-center justify-between bg-background px-4 py-3.5 font-sans w-full">
      <div className="flex w-full flex-row items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2 font-medium text-neutral-950 text-lg transition-colors duration-200">
          <CommonBlackLogo />
          <span>{siteName}</span>
        </Link>
        <div className="hidden flex-row items-center gap-3 lg:flex">
          {navigationItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`flex h-full flex-col items-center justify-center gap-1 p-2 font-medium rounded-md transition-all duration-200 hover:bg-neutral-100 ${
                pathname === item.href ? 'text-neutral-900 font-bold' : 'text-neutral-400'
              }`}
            >
              <p className="text-base">{item.label}</p>
            </Link>
          ))}
        </div>
        <div className="flex w-[120px] flex-row items-center justify-end">
          <button 
            data-state="closed" 
            className="flex items-center justify-center gap-2 rounded-full p-1.5 text-base font-medium text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 md:p-2"
            aria-label="다크 모드로 전환"
          >
            <Moon className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
} 