import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {map, filter} from 'rxjs/operators';
import { combineLatest, Observable,  Subscription } from 'rxjs';
import {NotesStore, NotesState} from './notes.store';


@Injectable({providedIn: 'root'})
export class NotesQuery extends QueryEntity<NotesState> {

    //запрос всех заметок
  allNotes$: Observable<any> = this.selectAll()
  filter$: Subscription = this.select('filter').subscribe(x=> console.log(x+"FILTER"))
  activeNotes$: Observable<any> = this.selectAll().pipe(
//  filter(state => state.filter(el => el.done === false))
    )
   
    doneNotes$:Observable<any> = this.selectAll().pipe(
 //  filter(state => state.filter(el => el.done === true))
    )
    
   combine$ = combineLatest(this.allNotes$,this.activeNotes$,this.doneNotes$)
     


  constructor(
    protected store: NotesStore,
  ) {
    super(store);
  }

}
