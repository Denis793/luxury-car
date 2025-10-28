import { IconType } from 'react-icons';
import styles from './ButtonBuy.module.scss';
// import { HTMLAttributes } from 'react';

interface Iprops {
  Icon: IconType;
  absPos?: boolean;
}

export const ButtonBuy = ({ Icon, absPos = false, ...props }: Iprops) => {
  return (
    <button
      className={`${styles.btnBuyNow}
        ${absPos ? styles.abs : ''}`}
      {...props}
    >
      <span>Buy now</span>
      <Icon size={24} />
    </button>
  );
};
