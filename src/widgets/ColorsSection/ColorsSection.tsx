'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Ferrari } from '@/shared/ui/FerrariModel';
import { ButtonBuy } from '@/shared/ui/ButtonBuy';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import { colorsCar } from '@/types/colorCars';
import { ContactShadows, Environment, Lightformer, OrbitControls } from '@react-three/drei';
import styles from './ColorsSection.module.scss';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const arrayCars: Array<colorsCar> = ['red', 'green', 'yellow', 'purple'];

export const ColorsSection = () => {
  const [radioId, setRadioId] = useState(0);
  const [color, setColor] = useState<colorsCar>('red');

  useGSAP(() => {
    gsap.to(`.${styles.colors}`, {
      backgroundPosition: '0px 300px',
      duration: 8,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });

    gsap.fromTo(
      `.${styles.colorsContent}`,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: `.${styles.colors}`,
          start: 'top 90%',
          end: 'top 60%',
          scrub: 1,
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
      }
    );

    gsap.fromTo(
      `.${styles.colorsContent}`,
      { translateX: '-100%', opacity: 0 },
      {
        scrollTrigger: {
          trigger: `.${styles.colors}`,
          start: 'top 80%',
          end: 'center center',
          scrub: 1,
          toggleActions: 'play none none reverse',
        },
        ease: 'power2.out',
        translateX: 0,
        opacity: 1,
        zIndex: 2,
      }
    );

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger?.classList?.contains(styles.colors.split(' ')[0])) {
          st.kill();
        }
      });

      gsap.fromTo(
        `.${styles.colorsContent}`,
        { scale: 0.9, opacity: 0 },
        {
          scrollTrigger: {
            trigger: `.${styles.colors}`,
            start: 'top 95%',
            end: 'top 75%',
            scrub: 0.5,
          },
          scale: 1,
          opacity: 1,
          ease: 'back.out(1.2)',
        }
      );
    }
  });

  useEffect(() => {
    setColor(arrayCars[radioId]);
  }, [radioId]);

  return (
    <>
      <section id="colors" className={styles.colors}>
        <div className={styles.colorsContent}>
          <div className={styles.initialColorsContent}>
            <p className={styles.titleColors}>Customize your Modern 360v:</p>
            <div className={styles.radiosContent}>
              {arrayCars.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.colorContent}
                ${radioId === index ? styles.selectedColor : ''}`}
                >
                  <input type="radio" name="colors" value={index} onChange={() => setRadioId(index)} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.modelContent}>
            <Canvas shadows gl={{ antialias: true }} camera={{ position: [2, -1, 6], fov: 50 }}>
              <hemisphereLight intensity={0.2} />

              <ambientLight intensity={0.35} />
              <directionalLight
                position={[2, 8, 5]}
                intensity={3}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-radius={6}
              />

              <Suspense fallback={null}>
                <Ferrari colorState={color} position={[0, -1.205, 0]} scale={1.2} />
              </Suspense>
              <mesh rotation-x={-Math.PI / 2} position={[0, -1.2, 0]}>
                <circleGeometry args={[3, 96]} />
                <meshStandardMaterial
                  opacity={0.2}
                  roughness={0.95}
                  color={'#0a0829'}
                  map={null}
                  emissive="#0e0a52"
                  emissiveIntensity={0.1}
                  metalness={0.2}
                />
              </mesh>
              <ContactShadows blur={2.5} position={[0, -1.17, 0]} scale={5} far={2} frames={Infinity} opacity={0.2} />
              <Environment resolution={1024}>
                <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
                <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
                <Lightformer
                  intensity={10}
                  form="ring"
                  color="red"
                  scale={2}
                  position={[10, 5, 10]}
                  onUpdate={(self) => self.lookAt(0, 0, 0)}
                />
              </Environment>
              <OrbitControls maxPolarAngle={1.5} autoRotate rotateSpeed={0.3} enableDamping={true} />
            </Canvas>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={styles.btnBuyContent}
          >
            <ButtonBuy Icon={HiOutlineArrowRight} />
          </form>
        </div>
      </section>
    </>
  );
};
