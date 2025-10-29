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

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const animationDuration = isMobile ? 2 : 3;
    const scrambleSpeed = isMobile ? 0.8 : 0.5;

    const tl = gsap.timeline({
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: `#about`,
        scrub: false,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
        refreshPriority: -1,
      },
    });

    tl.fromTo(
      `.aboutParagraph`,
      {
        scrambleText: {
          text: '',
          chars: `*#@_$`,
          speed: scrambleSpeed,
          delimiter: ' ',
        },
        opacity: 0,
      },
      {
        scrambleText: {
          text: `This project is solely intended for demonstration of technical skills. There is no actual product being sold or any form of advertising.`,
          chars: `*#@_$`,
          speed: scrambleSpeed,
          delimiter: ' ',
        },
        opacity: 1,
        ease: 'power2.out',
        duration: animationDuration,
      },
      0
    );

    tl.fromTo(
      `.${styles.specsTitle}`,
      {
        y: -20,
        opacity: 0,
      },
      { y: 0, opacity: 1, ease: 'power2.out', duration: 1 },
      animationDuration + 0.5
    );

    gsap.utils.toArray(`.${styles.specItem}`).forEach((e, index) => {
      tl.fromTo(
        e!,
        { opacity: 0, translateY: '-50%' },
        {
          opacity: 1,
          translateY: 0,
          ease: 'power2.out',
          duration: 0.8,
        },
        animationDuration + 1 + index * 0.1
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === document.querySelector('#about')) {
          trigger.kill();
        }
      });
      gsap.killTweensOf('.aboutParagraph');
      gsap.killTweensOf(`.${styles.specsTitle}`);
      gsap.killTweensOf(`.${styles.specItem}`);
    };
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
