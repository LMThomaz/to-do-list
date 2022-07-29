import { ClipboardText } from 'phosphor-react';
import styles from './styles.module.css';

export function EmptyTask() {
  return (
    <div className={styles.emptyTaskWrapper}>
      <ClipboardText size={56} weight='thin' />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
