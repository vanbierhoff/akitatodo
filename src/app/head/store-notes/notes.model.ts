import { guid } from '@datorama/akita';

// интерфейс для добавления заметки
export interface Notes {
  filter(arg0: (el: Notes) => boolean): any;
  id: string;
  name: string;
  done: boolean
};
export type Filter = 'all' | 'done' | 'notDone';

// фабричная функция для добавления заметки, разобраться зачем?)
export function createNotes(name: string) {
  return {
    id : guid(),
    name,
    done: false
  } as Notes;
}
