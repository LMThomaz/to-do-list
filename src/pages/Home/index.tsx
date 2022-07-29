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
        </form>
      </main>
    </div>
  );
}
