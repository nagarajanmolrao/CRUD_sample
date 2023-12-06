import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  tasks: any[] = [];
  currentPage: number = 0;
  pageSize: number = 20;
  totalElements: number = 0;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTasks(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.tasks = data._embedded?.tasks || [];
      this.totalElements = data.page.totalElements || 0;
    });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber - 1;
    this.loadTasks();
  }

  // Generate an array of page numbers based on the total number of pages
  getPagesArray(): number[] {
    return Array.from({ length: Math.ceil(this.totalElements / this.pageSize) }, (_, index) => index + 1);
  }
}
