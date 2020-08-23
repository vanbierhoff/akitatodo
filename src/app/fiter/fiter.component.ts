import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
interface Note {
  label: string;
  value: string;
}
@Component({
  selector: 'app-fiter',
  templateUrl: './fiter.component.html',
  styleUrls: ['./fiter.component.css']
})
export class FiterComponent implements OnInit {
  constructor() { }

  typeNote: Note[];
  selected: FormControl;
  selectCntrol: any;
  @Output() getNotes: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    this.selected = new FormControl('all');
    this.selected.valueChanges.subscribe(status => {
      this.getNotes.emit(status);
    });
    this.typeNote = [
      { label: 'Показывать все', value: 'all' },
      { label: 'Активные', value: 'notDone' },
      { label: 'Завершенные', value: 'done' },
    ];

    console.log(this.selected);

  }


}
