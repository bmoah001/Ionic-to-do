import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { EditPage } from "../edit/edit";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public todos = [];
    todo: string;


    constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public dataService: DataProvider, public modalCtrl : ModalController) {
      //this.storage.clear();

      this.dataService.getData()
        .then((todolistEntries) => {

          if(todolistEntries){
           this.todos = JSON.parse(todolistEntries);
          }

        });
      }
     //

     ionViewDidLoad(){
       this.todo =  this.navParams.get('todo');

     }





   add(todo) {
       this.todos.push(this.todo);
       //this.todo = "";
       this.dataService.save(this.todos);

   }

   delete(todolistEntries) {
       var index = this.todos.indexOf(todolistEntries, 0);
       this.todos.splice(index, 1)


       this.dataService.remove(todolistEntries);
       this.dataService.save(this.todos);
   }


    // edit(t) {
    //   this.navCtrl.push("EditPage", {
    //   t: t
    // });
    // }

    edit(todo){
   let index = this.todos.indexOf(todo);
    let addModal = this.modalCtrl.create(EditPage, {
      todo:todo
    });

    addModal.onDidDismiss((todo) => {
     if(index > -1){
         this.todos[index] = todo;
          this.dataService.save(this.todos);
      }
    });
 addModal.present();
  }

   //this.allData.push({'new values'});

//this.localstore.set('key name',this.allData);
}
