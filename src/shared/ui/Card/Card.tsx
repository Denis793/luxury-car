'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { IconType } from 'react-icons';
import TextPlugin from 'gsap/TextPlugin';
import styles from './Card.module.scss';

interface Iprops {
  text: string;
  title: string;
  Icon: IconType;
  newClass: string;
}

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export const Card = ({ title, text, Icon, newClass }: Iprops) => {
  useGSAP(() => {
    const cardActual = document.querySelector(`.${newClass}`)!;
    const titleActual = cardActual.querySelector(`.${styles.cardTitleText}`) as HTMLElement;
    const descriptionActual = cardActual.querySelector(`.${styles.cardDescription}`) as HTMLElement;

    // Set initial text as fallback
    if (titleActual) titleActual.textContent = title;
    if (descriptionActual) descriptionActual.textContent = text;

    const cardInter = new IntersectionObserver(
      (entries) => {
        entries.forEach((element) => {
          if (element.isIntersecting) {
            gsap.to(titleActual, {
              text: {
                value: title,
              },
              duration: 0.5,
            });

            gsap.to(descriptionActual, {
              text: {
                value: text,
                speed: 2,
              },
            });

            cardInter.unobserve(element.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardActual) {
      cardInter.observe(cardActual);
    }
  });

  return (
    <div className={`${styles.card} ${newClass}`}>
      <div className={styles.cardTitle}>
        <Icon size={42} />
        <span className={styles.cardTitleText}>{title}</span>
      </div>

      <p className={styles.cardDescription}>{text}</p>
    </div>
  );
};
