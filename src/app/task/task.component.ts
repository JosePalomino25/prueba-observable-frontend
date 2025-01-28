import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TaskService} from "./task.service";
import {Task} from "../models/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {
    task!: Task[];
    subscription!: Subscription;
    columns: string[] = ['id', 'title', 'completed', 'actions'];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.subscription = this.taskService.subjectTask.subscribe(task => (this.task = task)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addTask(title: string) {
    if (title.trim()) {
      this.taskService.addTask(title);
    }
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);

  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }

}
