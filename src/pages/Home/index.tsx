import { ClipboardText, PlusCircle } from 'phosphor-react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <main>
        <form>
          <Input />
          <button>
            Criar <PlusCircle size={16} weight='bold' className={styles.icon} />
          </button>
        </form>
        <div className={styles.content}>
          <header>
            <p>
              Tarefas criadas <span>0</span>
            </p>
            <p className={styles.taskFinished}>
              Concluídas <span>0</span>
            </p>
          </header>
          <div className={styles.emptyTaskWrapper}>
            <ClipboardText size={56} weight='thin' />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
