import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-taskview',
  templateUrl: 'taskview.component.html',
  styleUrls: ['taskview.component.scss'],
  standalone:false,
})
export class TaskviewComponent  {
  taskData : any;
  constructor(private navParams : NavParams ,private modalCtrl : ModalController){
     this.taskData = this.navParams.data;
  }

  async onMissed(){

  }
  async dismissModal(){

  }
  async onDelete(){
    
  }

}
