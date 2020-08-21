import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {NotesService } from './store-notes/notes.service'
import { NotesQuery } from './store-notes/notes.query';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(
    private  NotesQuery: NotesQuery, 
    private NotesService: NotesService
  ) {
  }
  name = "asds"
  list$: Subscription;
  listActive$: Subscription;
  listDone$:   Subscription;
  combine$:Subscription;

  ngOnInit(): void {
    this.NotesService.addNotes(this.name)
   // this.list$ = this.NotesQuery.allNotes$.subscribe(x =>  console.log(x)   )
    //this.listActive$ = this.NotesQuery.activeNotes$.subscribe(x=> console.log(x))
    this.combine$ = this.NotesQuery.combine$.subscribe(x => console.log(x))
  }

  addNotes(name:string){
    this.NotesService.addNotes(name)
  }

}
