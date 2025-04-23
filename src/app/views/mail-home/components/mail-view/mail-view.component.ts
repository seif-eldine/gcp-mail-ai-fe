import { Component, computed, effect, input, signal } from '@angular/core';
import { Category, Todo } from '../../../../shared/models/todo';

@Component({
  selector: 'app-mail-view',
  standalone: false,
  templateUrl: './mail-view.component.html',
  styleUrl: './mail-view.component.scss'
})
export class MailViewComponent {

  todos = input.required<Todo[]>();

  constructor(){
    effect(() => {
      console.log("Got todos of :", this.todos())
    })
  }

}
