'use client';
import gsap from 'gsap';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { FiCrosshair, FiTarget, FiTool, FiWind, FiZap } from 'react-icons/fi';
import { Card } from '@/shared/ui/Card';
import { ButtonBuy } from '@/shared/ui/ButtonBuy/';
import styles from './ProductSection.module.scss';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export const ProductSection = () => {
  useGSAP(() => {
    window.addEventListener('load', () => ScrollTrigger.refresh());
    ScrollTrigger.normalizeScroll({ allowNestedScroll: true, momentum: 1 });

    // Check if it's mobile device
    const isMobile = window.innerWidth <= 768;
    const scrollEnd = isMobile ? '+=500%' : '+=1000%';

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.screensContent}`,
        start: `top top`,
        end: scrollEnd,
        scrub: 1,
        snap: 1 / 6,
        pin: true,
      },
    });

    tl.to(
      `.${styles.mainIntroduction}`,
      {
        text: 'Watchmaker precision, track arrogance — signed in red.',
        ease: 'none',
        duration: 1,
      },
      0
    ).to(
      `.${styles.subIntroduction}`,
      {
        text: { value: '— Icon of the millennium turn' },
        duration: 1,
        ease: 'none',
      },
      1
    );

    tl.fromTo(`.${styles.firstScreen}`, { translateX: '-101%' }, { translateX: 0, autoAlpha: 1 }, 2);
    tl.fromTo(`.${styles.secondScreen}`, { translateX: '101%' }, { translateX: 0, autoAlpha: 1 }, 3);
    tl.fromTo(`.${styles.thirdScreen}`, { translateY: '-101%' }, { translateY: 0, autoAlpha: 1 }, 4);
    tl.fromTo(`.${styles.fourthScreen}`, { translateY: '101%' }, { translateY: 0, autoAlpha: 1 }, 5);
    gsap.set(`.${styles.cardContent}`, { autoAlpha: 1 });
  });

  return (
    <>
      <section id="product" className={styles.product}>
        <div className={styles.introductionCallContent}>
          <Image
            className={styles.introductionBackground}
            priority
            fill
            src="/car-background.jpg"
            alt="car-background.jpg"
          />
          <ButtonBuy Icon={HiOutlineArrowRight} absPos />
        </div>

        <div className={styles.screensContent}>
          <div className={styles.introduction}>
            <p className={styles.mainIntroduction}></p>
            <p className={styles.subIntroduction}></p>
          </div>
          <div className={styles.firstScreen}>
            <div className={styles.cardContent}>
              <Card
                Icon={HiOutlineCurrencyDollar}
                title="Stable collection value"
                newClass="card1"
                text="Icon of the millennium turn,
            transition point of language and engineering.
            Consistent demand, limited supply, aura of
            modern classic."
              />

              <Card
                Icon={FiWind}
                title="Aero and design"
                newClass="card2"
                text="Clean curves, right proportion, functional
            air intakes. It's form born from function, not
            special effects."
              />
            </div>
          </div>
          <div className={styles.secondScreen}>
            <div className={styles.cardContent}>
              <Card
                Icon={FiCrosshair}
                title="Mid-rear engine architecture"
                newClass="card3"
                text="Low polar moment of inertia and mass
            distribution between axles: agile corner entry, stable
            transitions and predictable exit."
              />

              <Card
                Icon={FiWind}
                title="Efficient and scalable brake system"
                newClass="card4"
                text="Assembly with good fading resistance and clear
            upgrade path (compounds, discs, ducts) for intensive
            use."
              />
            </div>
          </div>
          <div className={styles.thirdScreen}>
            <div className={styles.cardContent}>
              <Card
                Icon={FiTool}
                title="V8 assembly maintainability"
                newClass="card5"
                text="Reliable powertrain with comprehensive
            documentation/procedures, reducing downtime
            and relative operational cost."
              />

              <Card
                Icon={FiWind}
                title="Challenge Stradale variant (track focus)"
                newClass="card6"
                text="Mass reduction, more aggressive dynamic
            calibration and higher thermal capacity braking,
            street homologated."
              />
            </div>
          </div>
          <div className={styles.fourthScreen}>
            <div className={styles.cardContent}>
              <Card
                Icon={FiTarget}
                title="Consistent driving experience"
                newClass="card7"
                text="Integrated chassis/brakes/powertrain
            calibration resulting in predictable and repeatable
            behavior on road and track day."
              />

              <Card
                Icon={FiZap}
                title="Naturally aspirated V8 3.6 engine"
                newClass="card8"
                text="Linear delivery and immediate throttle
            response across wide rpm range, without
            supercharging dependency."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
