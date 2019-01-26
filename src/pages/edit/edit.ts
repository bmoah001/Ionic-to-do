import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { HomePage } from "../home/home";

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  public todos = [];
  todo;



  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public dataService: DataProvider, public view: ViewController, public modalCtrl : ModalController) {
  }



  ionViewDidLoad() {
      this.todo =  this.navParams.get('todo');

    }

    ionViewDidEnter() {
      this.todo =  this.navParams.get('todo');
    }

 //    add() {
 //      let newItem = this.todo
 //        this.todos.push(newItem);
 //        //this.todo = "";
 //        this.dataService.save(newItem);
 //
 //        this.view.dismiss(newItem);
 //
 // }

 // onEditSubmit() {
 //    this.storage.ready().then(() => {
 //      this.storage.get("todolistEntries").then((val) => {
 //        let newTodolistEntries = JSON.parse(val);
 //
 //        for (let i = 0; i < newTodolistEntries.length; i++) {
 //          if (newTodolistEntries[i].id == this.todo.id) {
 //            newTodolistEntries[i] = this.todo
 //
 //          }
 //        }
 //
 //        this.storage.set("todolistEntries", JSON.stringify(newTodolistEntries));
 //        this.navCtrl.push(HomePage); //JSON.stringify(newTodolistEntries) )
 //      });
 //    });
 //
 //  }

 onEditSubmit(){
     let todo = this.todo;
     this.view.dismiss(this.todo);
   }

}
