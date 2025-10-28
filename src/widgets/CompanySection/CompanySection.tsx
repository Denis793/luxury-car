'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { LuPackageCheck } from 'react-icons/lu';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiOutlineCheck, HiOutlineClipboardDocument, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import styles from './CompanySection.module.scss';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const CompanySection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#company',

        start: '20% center',
        end: 'bottom center',
      },
    });

    const arrayTitles = gsap.utils.toArray(`.${styles.titlePartCompany}`);

    tl.fromTo(`.${styles.whoWeAre}`, { xPercent: -200 }, { xPercent: 0 });
    tl.fromTo(arrayTitles[1]!, { xPercent: -200 }, { xPercent: 0 });

    tl.fromTo(
      `.${styles.trustListItem}`,
      {
        xPercent: -200,
      },
      { xPercent: 0, stagger: { each: 0.5 } }
    );

    tl.fromTo(arrayTitles[2]!, { xPercent: -200 }, { xPercent: 0 });
    tl.fromTo(`.${styles.whatWeDoListItem}`, { y: 20, opacity: 0 }, { y: 0, opacity: 1, ease: 'bounce' });

    tl.fromTo(arrayTitles[3]!, { xPercent: -200 }, { xPercent: 0 });
    tl.fromTo(
      `.${styles.guaranteesListItem}`,
      { y: 50, opacity: 0 },
      { y: 0, stagger: { each: 0.6 }, ease: 'elastic', opacity: 1 }
    );

    tl.fromTo(
      `.${styles.guarantessText}`,
      { y: 50, opacity: 0 },
      { y: 0, stagger: { each: 0.6 }, ease: 'ease.out', opacity: 1 }
    );
  });

  return (
    <section className={styles.company} id="company">
      <div className={styles.whoWeAre}>
        <h1 className={styles.titlePartCompany}>Quem somos</h1>
        <p>
          Somos um estúdio independente de engenharia visual e curadoria automotiva. Entregamos experiências digitais de
          alta performance (UI/3D) e seleção técnica de veículos, com foco em transparência, acessibilidade e métricas
          objetivas.
        </p>
      </div>
      <div className={styles.trust}>
        <h1 className={styles.titlePartCompany}>Por que confiar</h1>
        <ul className={styles.trustList}>
          <li className={styles.trustListItem}>
            <span>{'>>>'}</span>
            <span>Processo Documentado e auditável</span>
          </li>
          <li className={styles.trustListItem}>
            <span>{'>>>'}</span>
            <span>Métricas públicas por projeto</span>
          </li>

          <li className={styles.trustListItem}>
            <div>
              <div className={styles.trustSubListTitleContent}>
                <span>{'>>>'}</span>
                <span className={styles.trustSubListTitle}>Rede técnica para:</span>
              </div>
              <ul className={styles.trustListSubList}>
                <li className={styles.trustListSubListItem}>
                  <span>{'>>'}</span>
                  <span> Inspeção</span>
                </li>
                <li className={styles.trustListSubListItem}>
                  <span>{'>>'}</span>
                  <span>Upgrade</span>
                </li>
                <li className={styles.trustListSubListItem}>
                  <span>{'>>'}</span>
                  <span>Entrega</span>
                </li>
              </ul>
            </div>
          </li>

          <li className={styles.trustListItem}>
            <span>{'>>>'}</span>
            <span>Garantias claras.</span>
          </li>

          <li className={styles.trustListItem}>
            <span>{'>>>'}</span>
            <span>Qualidade mensurável</span>
          </li>
        </ul>
      </div>

      <div className={styles.whatWeDo}>
        <h1 className={styles.titlePartCompany}>O que fazemos</h1>
        <ul className={styles.whatWeDoList}>
          <li className={styles.whatWeDoListItem}>
            <HiOutlineWrenchScrewdriver size={32} />
            <span>Curadoria</span>
          </li>

          <li className={styles.whatWeDoListItem}>
            <HiOutlineClipboardDocument size={32} />
            <span>Relatórios Periódicos</span>
          </li>

          <li className={styles.whatWeDoListItem}>
            <LuPackageCheck size={32} />
            <span>Entrega assistida</span>
          </li>
        </ul>
      </div>

      <div className={styles.guarantees}>
        <h1 className={styles.titlePartCompany}>Garantias</h1>
        <ul className={styles.guaranteesList}>
          <li className={styles.guaranteesListItem}>
            <HiOutlineCheck size={24} />
            <span className={styles.guarantessText}>Procedência e documentação verificadas.</span>
          </li>

          <li className={styles.guaranteesListItem}>
            <HiOutlineCheck size={24} />
            <span className={styles.guarantessText}>Inspeção mecânica pré-entrega.</span>
          </li>

          <li className={styles.guaranteesListItem}>
            <HiOutlineCheck size={24} />
            <span className={styles.guarantessText}>Suporte pós-venda para registro e adaptação.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
