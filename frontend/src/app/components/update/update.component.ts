import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  taskId!: number;
  task: any = {}; // Initialize task as an empty object
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = +params['id'];
      this.getTaskDetails();
    });
  }

  getTaskDetails(): void {
    this.taskService.getTaskById(this.taskId).subscribe((data: any) => {
      this.task = data || {}; // Assign data or empty object if data is null
    });
  }

  updateTask(): void {
    this.taskService.updateTask(this.taskId, this.task).subscribe(
      () => {
        this.successMessage = 'Task updated successfully.';
        this.errorMessage = ''; // Clear error message if success
      },
      () => {
        this.errorMessage = 'Error updating task. Please try again.';
        this.successMessage = ''; // Clear success message if error
      }
    );
  }
}
