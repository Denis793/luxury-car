'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiOutlineCodeBracketSquare, HiOutlineBolt, HiOutlineSparkles, HiOutlineSignal } from 'react-icons/hi2';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import styles from './AboutSection.module.scss';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  useGSAP(() => {
    window.addEventListener('load', () => ScrollTrigger.refresh());
    ScrollTrigger.normalizeScroll({ allowNestedScroll: true, momentum: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: `#about`,
        scrub: 1,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {},
        onLeave: () => {},
        onEnterBack: () => {},
        onLeaveBack: () => {},
      },
    });

    tl.fromTo(
      `.aboutParagraph`,
      {
        scrambleText: {
          text: '',
          chars: `*#@_$`,
        },
      },
      {
        scrambleText: {
          text: `This project is solely intended for demonstration
                of technical skills. There is no actual product
                being sold or any form of advertising.`,
          chars: `*#@_$`,
        },
        ease: 'none',
      },
      0
    );

    tl.to(
      `.aboutParagraph`,
      {
        scrambleText: {
          text: '',
          chars: `*#@_$`,
        },
        ease: 'none',
      },
      0.8
    );

    tl.fromTo(
      `.${styles.specsTitle}`,
      {
        y: -20,
        opacity: 0,
      },
      { y: 0, opacity: 1, ease: 'power2.out' },
      0.2
    );

    gsap.utils.toArray(`.${styles.specItem}`).forEach((e, index) => {
      tl.fromTo(
        e!,
        { opacity: 0, translateY: '-50%' },
        {
          opacity: 1,
          translateY: 0,
          ease: 'power2.out',
        },
        0.3 + index * 0.05
      );
    });
  });

  return (
    <>
      <section className={styles.about} id="about">
        <div className={styles.siteSpecs}>
          <p className="aboutParagraph"></p>
        </div>
        <div className={styles.specsContainer}>
          <h1 className={styles.specsTitle}>DEVELOPER.DENYS</h1>

          <ul className={styles.specsList}>
            <li className={styles.specItem}>
              <div className={styles.specLabelContent}>
                <HiOutlineCodeBracketSquare size={24} />
                <span>Stack</span>
              </div>
              <span className={styles.specValue}>React · Next.js · GSAP · Three.js</span>
            </li>

            <li className={styles.specItem}>
              <div className={styles.specLabelContent}>
                <HiOutlineBolt size={24} />
                <span>Approach</span>
              </div>
              <span className={styles.specValue}>Performance-first · Pixel-perfect</span>
            </li>

            <li className={styles.specItem}>
              <div className={styles.specLabelContent}>
                <HiOutlineSparkles size={24} />
                <span>Output</span>
              </div>
              <span className={styles.specValue}>High-fidelity digital experiences</span>
            </li>

            <li className={styles.specItem}>
              <div className={styles.specLabelContent}>
                <HiOutlineSignal size={24} />
                <span>Status</span>
              </div>
              <span className={styles.specValue}>
                <span>Available for ambitious projects</span>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
