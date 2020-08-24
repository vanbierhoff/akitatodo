import { NotesService } from './../head/store-notes/notes.service';
import { FormControl } from '@angular/forms';
import {  Component, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private notesService: NotesService
  ) { }
  name: FormControl = new FormControl();
  @Output() create = new EventEmitter();
  ngOnInit(): void {

  }


  addNotes(): void {
    const name: string = this.name.value
    this.notesService.addNotes(name);
    this.name.patchValue('')
  }

}
