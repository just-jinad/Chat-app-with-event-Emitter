import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public messageOne= ""
  public userMessage=""


  commentReciever(message:string){
    this.userMessage = message
  }

}
