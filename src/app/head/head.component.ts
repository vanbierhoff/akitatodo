import { ID } from '@datorama/akita';
import { Notes } from './store-notes/notes.model';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import {NotesService } from './store-notes/notes.service';
import { NotesQuery } from './store-notes/notes.query';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(
    private  NotesQuery: NotesQuery, private NotesService: NotesService
  ) {
  }
  notes: [];
  combine$: Subscription;
  ngOnInit(): void {
    this.combine$ = this.NotesQuery.combine$.subscribe(notes => { 
      this.notes = notes
    });
  }

  addNotes(name: string ): void{
    this.NotesService.addNotes(name);
  }
  setFilter(filter: string): void {
   this.NotesService.setFilter(filter);
  }

  update( notes: object): void {
    let  id = notes['id'];
    this.NotesService.update(id, notes['done'])
  }

  remove(id:string): void {
    this.NotesService.removeEl(id);
  }
  editName(options: object): void {
    this.NotesService.updateName(options['id'],
    options['value']);
  }

}
