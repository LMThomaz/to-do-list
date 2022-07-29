import { PlusCircle } from 'phosphor-react';
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
            Criar{' '}
            <PlusCircle size='1rem' weight='bold' className={styles.icon} />
          </button>
        </form>
      </main>
    </div>
  );
}
