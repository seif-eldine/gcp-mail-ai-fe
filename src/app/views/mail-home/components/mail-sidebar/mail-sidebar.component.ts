import { Component, OnInit, WritableSignal, output, signal } from '@angular/core';
import { Category } from '../../../../shared/models/todo';
import { AiModelService } from '../../../../shared/services/ai-model';

@Component({
  selector: 'app-mail-sidebar',
  standalone: false,
  templateUrl: './mail-sidebar.component.html',
  styleUrl: './mail-sidebar.component.scss'
})
export class MailSidebarComponent {

  activeItem = signal<Category>('important');
  categorySelected = output<Category>();

  todosCategories: WritableSignal<Category[]> = signal([
    'important',
    'futuristic',
    'urgent',
    'average'
  ])

  selectCategory(category: Category) {
    this.activeItem.set(category)
    this.categorySelected.emit(category);
  }
}
