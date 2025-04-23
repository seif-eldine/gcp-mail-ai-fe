import { Component, OnInit, signal, effect, computed } from '@angular/core';
import { Todo, Category } from '../../../../shared/models/todo';
import { AiModelService } from '../../../../shared/services/ai-model';

@Component({
  selector: 'app-mail-home',
  standalone: false,
  templateUrl: './mail-home.component.html',
  styleUrl: './mail-home.component.scss'
})
export class MailHomeComponent {
  selectedCategory = signal<Category>('important');

  private allTodos = signal<Todo[]>([]);

  constructor(private aiModelService: AiModelService) {
    effect(() => {
      this.aiModelService.getAiConclusion().subscribe({
        next: (res) => {
          // Set the todos in the signal
          this.allTodos.set(res.todos);
          console.log("Got AI todos:", res);
        },
        error: (err) => {
          console.log("Error fetching AI todos:", err);
        }
      });
    });
  }

  filteredTodos = computed(() =>
    // this.allTodos().filter(todo => todo.category === this.selectedCategory())
    this.allTodos()
  );

  setCategory(category: Category) {
    this.selectedCategory.set(category);
  }
}
