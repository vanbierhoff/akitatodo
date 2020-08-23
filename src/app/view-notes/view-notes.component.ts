import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {

  constructor() { }
    @Input() notes;
    ngOnInit(): void {
    }

}
