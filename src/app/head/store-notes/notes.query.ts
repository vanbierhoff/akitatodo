import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {map, filter} from 'rxjs/operators';
import { Notes, Filter, createNotes } from './notes.model';
import {combineLatest, Observable, Subscription, from} from 'rxjs';
import {NotesStore, NotesState} from './notes.store';


@Injectable({providedIn: 'root'})
export class NotesQuery extends QueryEntity<NotesState> {

    // запрос всех заметок
    allNotes$: Observable<Notes[]> = this.selectAll();
    // фильтр заметок
    filter$: Observable<any> = this.select('filter');
    combine$: Observable<Notes[]> = combineLatest([this.filter$, this.allNotes$]).pipe(
        map(([filterList, notes])=> {
            switch (filterList) {
                case 'all':
                    return notes;
                case 'done':
                  return notes.filter((el: Notes) => el.done === true);

                case 'notDone':
                    return notes.filter((el: Notes) => el.done === false);
            }
        })
    )
    ;

    constructor(
        protected store: NotesStore,
    ) {
        super(store);
    }

}
