import styles from './styles.module.css';
import LogoSvg from '../../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoSvg} alt='' />
    </header>
  );
}
