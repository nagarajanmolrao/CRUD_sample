import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/task.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private taskService: TaskService) {}

  createTask(): void {
    this.taskService.createTask(this.newTask).subscribe((response) => {
      this.successMessage = 'Task created successfully.';
      this.errorMessage = ''; // Clear error message if success
      this.newTask = { id: 0, title: '', description: '', completed: false };
    }, (error) => {
      this.errorMessage = 'Error creating task. Please try again.';
      this.successMessage = ''; // Clear success message if error
    });
  }
}
