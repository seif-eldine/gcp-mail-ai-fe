import { Component, OnInit, WritableSignal, output, signal } from '@angular/core';
import { Category, CategoryItem } from '../../../../shared/models/todo';
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

  todosCategories: WritableSignal<CategoryItem[]> = signal([
    { name: 'important', icon: 'fa-solid fa-star' },
    { name: 'futuristic', icon: 'fa-solid fa-robot' },
    { name: 'urgent', icon: 'fa-solid fa-triangle-exclamation' },
    { name: 'average', icon: 'fa-solid fa-inbox' },
  ])

  selectCategory(category: Category) {
    this.activeItem.set(category)
    this.categorySelected.emit(category);
  }
}
