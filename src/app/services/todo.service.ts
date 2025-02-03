import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  addTask(key: any, value: any) {
    return this.storage.set(key, value);
  }

  getAllTask() {
    let tasks: any[] = [];
    return new Promise((resolve, reject) => {
      this.storage.forEach((value, key, index) => {
        tasks.push({ key: key, value: value });
      })
      .then(() => {
        resolve(tasks);
      })

    });
  }

  getTaskById(key: string) {
    return this.storage.get(key);
  }

  async deleteTask(key: string) {
    return await this.storage.remove(key);
  }
}
