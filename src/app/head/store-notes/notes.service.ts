import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';

import {NotesStore} from './notes.store';
import {Notes, createNotes} from './notes.model';

// Интеграция стора с angular, уточнить как работает?
@Injectable({providedIn: 'root'})
export class NotesService {

  constructor(
    private notesStore: NotesStore
  ) {
  }
        // добавляем заметку в стор
  addNotes(data: string): void {
    const notes = createNotes(data);
    this.notesStore.add(notes);
  }

  setFilter(filter: string ): void {
    this.notesStore.update({filter});
  }

  update(id:string, done: boolean): void {
    this.notesStore.update(id, {done})
  }



  removeEl(id: string): void {
    this.notesStore.remove(id);
  }

  updateName(id:string,name:string){
    this.notesStore.update(id, {name})
  }
}
