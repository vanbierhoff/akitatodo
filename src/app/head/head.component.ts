
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from './store-notes/notes.service';
import { NotesQuery } from './store-notes/notes.query';
import { Notes, Filter } from './store-notes/notes.model';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(
    private notesQuery: NotesQuery, private notesService: NotesService
  ) {}
  notes: Notes[];
  combine$: Observable<Notes[]>;
  ngOnInit(): void {
    this.combine$ = this.notesQuery.combine$;
  }

  setFilter(filter: Filter): void {
    this.notesService.setFilter(filter);
  }

  update(notes: object): void {
    let id = notes['id'];
    this.notesService.update(id, notes['done'])
  }

  remove(id: string): void {
    this.notesService.removeEl(id);
  }
  editName(options: object): void {
    this.notesService.updateName(options['id'],
      options['value']);
  }

}
