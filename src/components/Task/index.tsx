import { CheckCircle, Circle, Trash } from 'phosphor-react';
import classNames from 'classnames';
import styles from './styles.module.css';

interface Props {
  id: number;
  text: string;
  done: boolean;
  onToggleDone: (id: number) => void;
}

export function Task({ id, text, done, onToggleDone }: Props) {
  function handleToggleDone() {
    onToggleDone(id);
  }
  return (
    <div
      className={classNames([styles.task], {
        [styles.taskNotDone]: !done,
        [styles.taskDone]: done,
      })}>
      <span>
        {done ? (
          <CheckCircle
            onClick={handleToggleDone}
            size={24}
            weight='fill'
            colorInterpolation='white'
          />
        ) : (
          <Circle onClick={handleToggleDone} size={24} />
        )}
      </span>
      <p>{text}</p>
      <button>
        <Trash size={18} />
      </button>
    </div>
  );
}
