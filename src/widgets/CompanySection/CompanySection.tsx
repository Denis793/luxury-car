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
        <h1 className={styles.titlePartCompany}>Who we are</h1>
        <p>
          We are an independent studio of visual engineering and automotive curation. We deliver high-performance
          digital experiences (UI/3D) and technical vehicle selection, focusing on transparency, accessibility and
          objective metrics.
        </p>
      </div>
      <div className={styles.trust}>
        <h1 className={styles.titlePartCompany}>Why trust us</h1>
        <ul className={styles.trustList}>
          <li className={styles.trustListItem}>
            <span>{'>>>'}</span>
            <span>Documented and auditable process</span>
          </li>
          <li className={styles.trustListItem}>
            <span>{'>>>'}</span>
            <span>Public metrics per project</span>
          </li>

          <li className={styles.trustListItem}>
            <div>
              <div className={styles.trustSubListTitleContent}>
                <span>{'>>>'}</span>
                <span className={styles.trustSubListTitle}>Technical network for:</span>
              </div>
              <ul className={styles.trustListSubList}>
                <li className={styles.trustListSubListItem}>
                  <span>{'>>'}</span>
                  <span> Inspection</span>
                </li>
                <li className={styles.trustListSubListItem}>
                  <span>{'>>'}</span>
                  <span>Upgrade</span>
                </li>
                <li className={styles.trustListSubListItem}>
                  <span>{'>>'}</span>
                  <span>Delivery</span>
                </li>
              </ul>
            </div>
          </li>

          <li className={styles.trustListItem}>
            <span>{'>>>'}</span>
            <span>Clear guarantees.</span>
          </li>

          <li className={styles.trustListItem}>
            <span>{'>>>'}</span>
            <span>Measurable quality</span>
          </li>
        </ul>
      </div>

      <div className={styles.whatWeDo}>
        <h1 className={styles.titlePartCompany}>What we do</h1>
        <ul className={styles.whatWeDoList}>
          <li className={styles.whatWeDoListItem}>
            <HiOutlineWrenchScrewdriver size={32} />
            <span>Curation</span>
          </li>

          <li className={styles.whatWeDoListItem}>
            <HiOutlineClipboardDocument size={32} />
            <span>Periodic Reports</span>
          </li>

          <li className={styles.whatWeDoListItem}>
            <LuPackageCheck size={32} />
            <span>Assisted delivery</span>
          </li>
        </ul>
      </div>

      <div className={styles.guarantees}>
        <h1 className={styles.titlePartCompany}>Guarantees</h1>
        <ul className={styles.guaranteesList}>
          <li className={styles.guaranteesListItem}>
            <HiOutlineCheck size={24} />
            <span className={styles.guarantessText}>Verified provenance and documentation.</span>
          </li>

          <li className={styles.guaranteesListItem}>
            <HiOutlineCheck size={24} />
            <span className={styles.guarantessText}>Pre-delivery mechanical inspection.</span>
          </li>

          <li className={styles.guaranteesListItem}>
            <HiOutlineCheck size={24} />
            <span className={styles.guarantessText}>Post-sale support for registration and adaptation.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
