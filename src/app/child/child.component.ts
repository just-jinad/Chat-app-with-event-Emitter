import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() sendMessage=""
public reply=""
@Output() message = new EventEmitter

deliverMessage(){
  this.message.emit(this.reply)
}
}
