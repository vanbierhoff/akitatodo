import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {map, filter} from 'rxjs/operators';
import {combineLatest, Observable, Subscription, from} from 'rxjs';
import {NotesStore, NotesState} from './notes.store';


@Injectable({providedIn: 'root'})
export class NotesQuery extends QueryEntity<NotesState> {

    // запрос всех заметок
    allNotes$: Observable<any> = this.selectAll();
    // фильтр заметок
    filter$: Observable<any> = this.select('filter');
    combine$: Observable<any> = combineLatest([this.filter$, this.allNotes$]).pipe(
        map(data => {
            const flt: string = data[0];
            const notes: [] = data[1];
            let result: any;
            switch (flt) {
                case 'all':
                    return notes;
                case 'done':
                    result = notes.filter(el => el['done'] === true);
                    return result;
                case 'notDone':
                    result = notes.filter(el => el['done'] === false);
                    return result;
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
