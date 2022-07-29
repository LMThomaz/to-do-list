import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: Props) {
  return <input className={styles.input} {...rest} />;
}
