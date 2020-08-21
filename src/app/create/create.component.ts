import { Component, OnInit, EventEmitter,
 Output,Input,ElementRef,ViewChild} from '@angular/core';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  constructor() { }
  name:string
  @Output() create = new EventEmitter ()
  @ViewChild('inputName')  inputN: ElementRef
  ngOnInit(): void {
    
  }
  
  CreateEmit(name:string):void {
    this.create.emit(name)
    this.inputN.nativeElement.blur()
    this.name = ""

  }
  
}
