import { ClipboardText, PlusCircle } from 'phosphor-react';
import { EmptyTask } from '../../components/EmptyTask';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Task } from '../../components/Task';
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
              Tarefas criadas <span>5</span>
            </p>
            <p className={styles.taskFinished}>
              Concluídas <span>2 de 5</span>
            </p>
          </header>
          <ul>
            <li>
              <Task />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
