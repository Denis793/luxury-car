'use client';
import React from 'react';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { CiMenuFries } from 'react-icons/ci';
import { Big_Shoulders_Stencil } from 'next/font/google';
import styles from './NavBar.module.scss';

const kapakana = Big_Shoulders_Stencil({
  weight: ['400', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['serif'],
});

const items = [
  { name: 'Product', id: '#product' },
  { name: 'Colors', id: '#colors' },
  { name: 'Company', id: '#company' },
  { name: 'About', id: '#about' },
];

export const NavBar = () => {
  const [hoveredItem, setHoveredItem] = useState<null | string>(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  // Блокування скролу при відкритому меню
  useEffect(() => {
    if (openDropdown) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup функція
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [openDropdown]);

  const ListItems = useCallback(
    ({ underline = true, showLogo = false }: { underline?: boolean; showLogo?: boolean }) => {
      const props: { onClick?: () => void } = {};

      if (openDropdown) {
        props.onClick = () => setOpenDropdown(false);
      }

      return (
        <>
          {showLogo && (
            <li className={`${styles.logoContent} ${kapakana.className}`}>
              <Link className={styles.logoContent} href="/" replace>
                LuxuryAuto
              </Link>
            </li>
          )}

          {items.map((item) => (
            <li
              key={item.id}
              {...props}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={item.id} replace>
                {item.name}
              </Link>

              {underline && hoveredItem === item.id && <div />}
            </li>
          ))}

          <li {...props}>
            <Link href="#" replace>
              Book a call
            </Link>
          </li>
        </>
      );
    },
    [hoveredItem, openDropdown]
  );

  return (
    <nav className={styles.menuContent}>
      <ul className={styles.menu}>
        <ListItems showLogo={true} />
      </ul>

      <div className={styles.dropdownMenuContent}>
        <Link className={`${styles.logoContent} ${kapakana.className}`} href="/" replace>
          LuxuryAuto
        </Link>

        <button onClick={() => setOpenDropdown(!openDropdown)}>
          {openDropdown ? (
            <HiOutlineX size={32} className={styles.iconMenu} />
          ) : (
            <CiMenuFries size={32} className={styles.iconMenu} />
          )}
        </button>

        {openDropdown && (
          <ul
            className={styles.dropdownMenu}
            onClick={(e: React.MouseEvent<HTMLUListElement>) => {
              // Закриваємо меню тільки якщо клік був по фону, а не по контенту
              if (e.target === e.currentTarget) {
                setOpenDropdown(false);
              }
            }}
          >
            <ListItems underline={false} showLogo={false} />
          </ul>
        )}
      </div>
    </nav>
  );
};
