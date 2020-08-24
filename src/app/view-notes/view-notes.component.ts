import {Component, Input, OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {

  constructor() { }
  @Input() notes;
  @Output() updateNotes: EventEmitter<any> = new EventEmitter<any>()
  @Output() deleteNotes: EventEmitter<any> = new EventEmitter<any>()
  @Output() editNotes: EventEmitter<any> = new EventEmitter<any>()
  name: string;
  ngOnInit(): void {
  }
  value: boolean;
  toggleCheck(e: object, obj: object): void {
    debugger
    let notes = {
      id: obj['id'],
      name: obj['name'],
      done: e['checked'],
    }
    this.updateNotes.emit(notes)
  }
  remove(id: string): void {
    this.deleteNotes.emit(id);
  }
  editName(id:string, value: string):void {
    const options = {
      id: id,
      value: value
    }
    this.editNotes.emit(options);
  }



}
