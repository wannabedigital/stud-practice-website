'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '@styles/pageTransition.module.css';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setFade(false);
    }, 150);

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div className={fade ? styles.pageFadeOut : styles.pageFadeIn}>
      {displayChildren}
    </div>
  );
}
