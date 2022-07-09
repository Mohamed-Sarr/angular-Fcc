import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
@Input() childMessage: string;

// @Output() samaEvent = new EventEmitter<string>();
   message ="Hello guys !";
  constructor() { }

  ngOnInit(): void {
  }
  
  // sendMessage(){
  //   this.samaEvent.emit('Hello from child');
  // }
}
