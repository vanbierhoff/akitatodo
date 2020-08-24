import { Filter, Notes } from './../head/store-notes/notes.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-fiter',
  templateUrl: './fiter.component.html',
  styleUrls: ['./fiter.component.css']
})
export class FiterComponent implements OnInit {
  constructor() { }

  typeNote: SelectItem[];
  selected: FormControl;
  selectCntrol: Filter = 'all';
  @Output() getNotes: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    this.selected = new FormControl('all');
    this.selected.valueChanges.subscribe(status => {
      if (status === null) {
        this.getNotes.emit('all')
      } else
        this.getNotes.emit(status);
    });
    this.typeNote = [
      { label: 'Все заметки', value: 'all' },
      { label: 'Активные', value: 'notDone' },
      { label: 'Завершенные', value: 'done' },
    ];
  };
}
