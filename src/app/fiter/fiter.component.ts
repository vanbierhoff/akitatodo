import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable, of } from 'rxjs'
interface Note {
  label: string
  value: string
}
@Component({
  selector: 'app-fiter',
  templateUrl: './fiter.component.html',
  styleUrls: ['./fiter.component.css']
})
export class FiterComponent implements OnInit {
  constructor() { }

  typeNote: Note[]
  selected: FormControl;
  selectCntrol: any
  ngOnInit(): void {
    this.selected = new FormControl('all');
    this.selected.valueChanges.subscribe(x => console.log(x))
    this.typeNote = [
      { label: 'Показывать все', value: "all" },
      { label: 'Активные', value: "active" },
      { label: 'Завершенные', value: "disactive" },
    ];

    console.log(this.selected)

  }
  test(e) {

  //  console.log(e)
  }

}
