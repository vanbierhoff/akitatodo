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
    console.log(notes.id + ' CreateID');
    this.notesStore.add(notes);
  }

  setFilter(filter: string ): void {
    this.notesStore.update({filter});
  }




  deleteProduct(id: ID): void {
    this.notesStore.remove(id);
  }
}
