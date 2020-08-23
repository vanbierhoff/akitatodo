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
    this.combine$ = this.NotesQuery.combine$.subscribe(x => this.notes = x);
  }

  addNotes(name: string ): void{
    this.NotesService.addNotes(name);
  }
  setFilter(filter: string): void {
   this.NotesService.setFilter(filter);
  }

}
