import { IconType } from 'react-icons';
import clsx from 'clsx';
import styles from './ButtonBuy.module.scss';

interface Iprops {
  Icon: IconType;
  absPos?: boolean;
}

export const ButtonBuy = ({ Icon, absPos = false, ...props }: Iprops) => {
  return (
    <button
      className={clsx(styles.btnBuyNow, {
        [styles.abs]: absPos,
      })}
      {...props}
    >
      <span>Buy now</span>
      <Icon size={24} />
    </button>
  );
};
