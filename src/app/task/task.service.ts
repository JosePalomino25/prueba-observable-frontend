import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Task} from "../models/task";


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks:Task[]=[]
  taskSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  subjectTask = this.taskSubject.asObservable();

  constructor() { }

  addTask(title: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    this.taskSubject.next([...this.tasks]);
  }

  removeTask(id:number) {
    id = id - 1
    this.tasks.splice(id, 1);
    this.taskSubject.next([...this.tasks]);
  }

  toggleTask(id: number){
    this.tasks = this.tasks.map(task => task.id === id ?{...task, completed: !task.completed}: task);
    this.taskSubject.next([...this.tasks]);

  }

}
