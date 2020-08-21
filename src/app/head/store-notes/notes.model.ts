import { guid } from '@datorama/akita';

// интерфейс для добавления заметки
export interface Notes {
  id: string;
  name: string;
  done: boolean;
}

// фабричная функция для добавления заметки, разобраться зачем?)
export function createNotes(name: string) {
  return {
    id : guid(),
    name,
    done: false
  } as Notes;
}
