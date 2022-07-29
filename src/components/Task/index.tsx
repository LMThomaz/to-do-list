import { Circle, Trash } from 'phosphor-react';
import styles from './styles.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <span>
        <Circle size={24} />
      </span>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button>
        <Trash size={24} />
      </button>
    </div>
  );
}
