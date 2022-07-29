import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { EmptyTask } from '../../components/EmptyTask';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Task } from '../../components/Task';
import styles from './styles.module.css';

interface Task {
  id: number;
  text: string;
  done?: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [textTask, setTextTask] = useState('');
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      text: textTask,
      id: tasks.length,
      done: false,
    };
    setTasks((oldState) => [...oldState, newTask]);
    setTextTask('');
  }
  const countTasks = tasks.length;
  const countTasksDone = tasks.filter((item) => item.done).length;

  return (
    <div className={styles.home}>
      <Header />
      <main>
        <form>
          <Input
            placeholder='Adicione uma nova tarefa'
            value={textTask}
            onChange={(e) => setTextTask(e.target.value)}
          />
          <button
            type='submit'
            onClick={handleSubmit}
            disabled={textTask.length === 0}>
            Criar <PlusCircle size={16} weight='bold' className={styles.icon} />
          </button>
        </form>
        <div className={styles.content}>
          <header>
            <p>
              Tarefas criadas <span>{countTasks}</span>
            </p>
            <p className={styles.taskFinished}>
              Concluídas{' '}
              <span>
                {countTasks > 0 && `${countTasksDone} de`} {countTasks}
              </span>
            </p>
          </header>
          {tasks.length > 0 ? (
            <ul>
              {tasks.map((task) => (
                <li>
                  <Task {...task} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyTask />
          )}
        </div>
      </main>
    </div>
  );
}
