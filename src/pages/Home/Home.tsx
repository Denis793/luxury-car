import dynamic from 'next/dynamic';
import styles from './Home.module.scss';

const ProductSection = dynamic(() =>
  import('@/widgets/ProductSection').then((mod) => ({ default: mod.ProductSection }))
);
const CompanySection = dynamic(() =>
  import('@/widgets/CompanySection').then((mod) => ({ default: mod.CompanySection }))
);
const ColorsSection = dynamic(() => import('@/widgets/ColorsSection').then((mod) => ({ default: mod.ColorsSection })));
const AboutSection = dynamic(() => import('@/widgets/AboutSection').then((mod) => ({ default: mod.AboutSection })));

export default function Home() {
  return (
    <div className={`content ${styles.page}`}>
      <ProductSection />
      <ColorsSection />
      <CompanySection />
      <AboutSection />
    </div>
  );
}
