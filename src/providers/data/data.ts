import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor( public storage: Storage) {

  }

  getData() {
    return this.storage.get("todolistEntries");
  }

  save(todolistEntries) {
    let newTodolistEntries = JSON.stringify(todolistEntries);
    this.storage.set("todolistEntries", newTodolistEntries);
  }

  remove(todolistEntries) {
    this.storage.remove(todolistEntries);
  }

}
