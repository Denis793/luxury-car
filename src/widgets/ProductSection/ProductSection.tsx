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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.screensContent}`,
        start: `top top`,
        end: `+=1000%`,
        scrub: 1,
        snap: 1 / 6,
        pin: true,
      },
    });

    tl.to(
      `.${styles.mainIntroduction}`,
      {
        text: 'Precisão de relojoeiro, arrogância de pista — assinado em vermelho.',
        ease: 'none',
        duration: 1,
      },
      0
    ).to(
      `.${styles.subIntroduction}`,
      {
        text: { value: '— Ícone da virada de milênio' },
        duration: 1,
        ease: 'none',
      },
      1
    );

    tl.fromTo(`.${styles.firstScreen}`, { translateX: '-101%' }, { translateX: 0, autoAlpha: 1 }, 2);

    tl.fromTo(`.${styles.secondScreen}`, { translateX: '101%' }, { translateX: 0, autoAlpha: 1 }, 3);

    tl.fromTo(`.${styles.thirdScreen}`, { translateY: '-101%' }, { translateY: 0, autoAlpha: 1 }, 4);

    tl.fromTo(`.${styles.fourthScreen}`, { translateY: '101%' }, { translateY: 0, autoAlpha: 1 }, 5);

    // Ensure card text is visible
    gsap.set(`.${styles.cardContent}`, { autoAlpha: 1 });
  });

  return (
    <section id="product" className={styles.product}>
      <div className={styles.introductionCallContent}>
        <Image priority fill src="/car-background.jpg" alt="background" className={styles.introductionBackground} />
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
              title="Valor de coleção estável"
              newClass="card1"
              text="Ícone da virada do milênio,
            ponto de transição de linguagem e engenharia.
            Procura consistente, oferta limitada, aura de
            clássico moderno."
            />

            <Card
              Icon={FiWind}
              title="Aero e design"
              newClass="card2"
              text="Curvas limpas, proporção certa, entradas de ar
            funcionais. É forma que nasce da função, não efeito
            especial."
            />
          </div>
        </div>
        <div className={styles.secondScreen}>
          <div className={styles.cardContent}>
            <Card
              Icon={FiCrosshair}
              title="Arquitetura de motor central-traseiro"
              newClass="card3"
              text="Baixo momento polar de inércia e distribuição
            de massa entre eixos: entrada de curva ágil, transições
            estáveis e saída previsível."
            />

            <Card
              Icon={FiWind}
              title="Sistema de freios eficiente e escalável"
              newClass="card4"
              text="Conjunto com boa resistência a fading e caminho
            claro de upgrades (compostos, discos, dutos) para uso
            intensivo."
            />
          </div>
        </div>
        <div className={styles.thirdScreen}>
          <div className={styles.cardContent}>
            <Card
              Icon={FiTool}
              title="Manutenibilidade do conjunto V8"
              newClass="card5"
              text="Trem de força confiável com
            documentação / procedimentos amplos, reduzindo tempo
            de imobilização e custo operacional relativo."
            />

            <Card
              Icon={FiWind}
              title="Variante Challenge Stradale (foco em pista)"
              newClass="card6"
              text="Redução de massa, calibração dinâmica mais
            agressiva e frenagem de maior capacidade térmica,
            homologada para rua."
            />
          </div>
        </div>
        <div className={styles.fourthScreen}>
          <div className={styles.cardContent}>
            <Card
              Icon={FiTarget}
              title="Experiência de condução consistente"
              newClass="card7"
              text="Calibração integrada de
            chassi / freios / powertrain resultando em comportamento
            previsível e repetível em estrada e track day."
            />

            <Card
              Icon={FiZap}
              title="Motorização V8 3.6 aspirada"
              newClass="card8"
              text="Entrega linear e resposta imediata ao
            acelerador em ampla faixa de rotação, sem
            dependência de sobrealimentação."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
