import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {Notes } from './notes.model';

export interface NotesState extends EntityState<Notes> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'notes'
})
export class NotesStore extends EntityStore<NotesState> {

  constructor() {
    super({filter:"all"});
  }

}
