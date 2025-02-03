import { Component } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { TaskviewComponent } from '../components/taskview/taskview.component';
import { TodoService } from '../services/todo.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  todoList: any;

  constructor(private modalCtrl: ModalController, 
     private todoService: TodoService,
     private loadingCtrl : LoadingController,
     private datePipe : DatePipe) {
      this.loadData();
     }
  convertDateTimeToTime(dateTimeValue : any):string{
    if(dateTimeValue !== null){
      return this.datePipe.transform(dateTimeValue,'hh.mm')||'';

    }
    return '';
  } 
  
  async presentinLoading(){
    const loading = await this.loadingCtrl.create({
      message : "please wait ......."
    })
    await loading.present();
  }
  loadData() {
    this.presentinLoading().then(()=>{
      this.todoService.getAllTask().then((val)=>{
        this.todoList =val;
        this.loadingCtrl.dismiss();
      })
    })
  }
  calculateTimeDifference(startDateTime:string,endDateTime:string) : string {
    const startDate = new Date(startDateTime);
    const endDate = new Date(endDateTime);

    if(isNaN(startDate.getTime())|| isNaN(endDate.getTime())){
      return "Invalid date format";
    }
    const timeDifferenceMs = endDate.getTime()-startDate.getTime()

    const hours = Math.floor(timeDifferenceMs /(1000*60*60));
    
    const Minutes = Math.floor(timeDifferenceMs % (1000*60*60))/(1000*60);
    if(hours >0){
      return '${hours}hr';

    }
    else if(Minutes > 0){
      return '${minutes}min';
    }
    else{
      return '0 min';
    }
  }

  async presentModal(data:any){
    const modal = await this.modalCtrl.create({
      component:TaskviewComponent,
      showBackdrop:true,
      backdropDismiss: true,
      animated:true,
      initialBreakpoint:0.45,
      mode :'ios',
      keyboardClose:true,
      componentProps:{data 

      },
      cssClass:"taskViewModal"
    })
    return await modal.present();
  }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: CreateTaskComponent,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      this.todoList.push({ value: data });
    }
  }
}
