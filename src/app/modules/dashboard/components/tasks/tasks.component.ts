import { keys } from './../../../shared/TS Files/localstorage-key';
import { ITasks } from './../../../shared/TS Files/tasks';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
tasksForm !: FormGroup;
tasks:ITasks[]=[];
inProgress:ITasks[]=[];
done:ITasks[]=[];
updateIndex !:any;
isEditEnable:boolean=false;
userData = JSON.parse(window.localStorage.getItem(keys.userData) || '{}');
cards:any;
cardForm !: FormGroup;
openCardForm:boolean=false;
  constructor(private fb:FormBuilder) {
   }

  ngOnInit(): void {
    this.tasksForm=this.fb.group({
      item:['',Validators.required]
    })
    this.cardForm=this.fb.group({
      card:['',Validators.required]
    })
    if(window.localStorage.getItem(keys.tasks)){
      this.tasks =JSON.parse(window.localStorage.getItem(keys.tasks) || '{}');
    }else{
      window.localStorage.setItem(keys.tasks, JSON.stringify(this.tasks));
    }
    if(window.localStorage.getItem(keys.progressTasks)){
      this.inProgress =JSON.parse(window.localStorage.getItem(keys.progressTasks) || '{}');
    }else{
      window.localStorage.setItem(keys.progressTasks, JSON.stringify(this.inProgress));
    }
    if(window.localStorage.getItem(keys.doneTasks)){
      this.done =JSON.parse(window.localStorage.getItem(keys.doneTasks) || '{}');
    }else{
      window.localStorage.setItem(keys.doneTasks, JSON.stringify(this.done));
    }
    this.cards=[
      {name:'To Do',t:this.tasks,},
      {name:'In Progress',t:this.inProgress},
      {name:'Done',t:this.done}
    ];

    // if(window.localStorage.getItem(keys.cards)){
    //   this.cards =JSON.parse(window.localStorage.getItem(keys.cards) || '{}');
    // }else{
    //   window.localStorage.setItem(keys.cards, JSON.stringify(this.cards));
    // }
  }
  drop(event: CdkDragDrop<ITasks[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    window.localStorage.setItem(keys.tasks, JSON.stringify(this.tasks));
    window.localStorage.setItem(keys.progressTasks, JSON.stringify(this.inProgress));
    window.localStorage.setItem(keys.doneTasks, JSON.stringify(this.done));
  }
  // addNewCard(){

  //   this.cards.push('mm');

  // }
  addTask() :void{
    this.tasks.push({
      description:this.tasksForm.value.item,
      done:false,
      time:moment(),
    })
    this.tasksForm.reset();
    window.localStorage.setItem(keys.tasks, JSON.stringify(this.tasks));
  }
  onEdit(item:ITasks,i:number){
    this.tasksForm.controls['item'].setValue(item.description);
    this.updateIndex=i;
    this.isEditEnable=true
  }
  editTask():void{
    this.tasks[this.updateIndex].description=this.tasksForm.value.item;
    this.tasks[this.updateIndex].done=false;
    this.tasksForm.reset();
    this.updateIndex=undefined;
    this.isEditEnable=false;
    window.localStorage.setItem(keys.tasks, JSON.stringify(this.tasks));
  }
  deleteTask(fIndex:number,arr:any,sIndex:any):void{
    for (let index = 0; index < this.cards.length; index++) {
      if(fIndex === index){
        for (let x = 0; x < arr.length; x++){
          if(x === sIndex ){
            console.log(sIndex);
            arr.splice(x,1)
            window.localStorage.setItem(keys.tasks, JSON.stringify(this.tasks));
            window.localStorage.setItem(keys.progressTasks, JSON.stringify(this.inProgress));
            window.localStorage.setItem(keys.doneTasks, JSON.stringify(this.done));
          }
        }
      }

    }
    // switch(name){
    //   case 'To Do':
    //     this.tasks.splice(n,1);
    //     window.localStorage.setItem(keys.tasks, JSON.stringify(this.tasks));
    //     break;
    //   case 'In Progress':
    //     this.inProgress.splice(n,1);
    //     window.localStorage.setItem(keys.progressTasks, JSON.stringify(this.inProgress));
    //     break;
    //   case 'Done':
    //     this.done.splice(n,1);
    //     window.localStorage.setItem(keys.doneTasks, JSON.stringify(this.done));
    //     break;
    //     case this.cardForm.value.card:
    //     this.done.splice(n,1);
    //     window.localStorage.setItem(keys.doneTasks, JSON.stringify(this.done));
    //     break;
    // }
    // this.tasks.splice(n,1);
    // window.localStorage.setItem(keys.tasks, JSON.stringify(this.tasks));
  }

  addCard(list:ITasks[]){
    list=[]
    this.cards.push({
      name:this.cardForm.value.card, t:list
    })
    this.cardForm.reset();
    this.openCardForm=false
    // window.localStorage.setItem(keys.cards, JSON.stringify(this.cards));
    // if(window.localStorage.getItem(this.cardForm.value.card)){
    //       list=JSON.parse(window.localStorage.getItem(this.cardForm.value.card) || '{}');
    //     }else{
    //       window.localStorage.setItem(this.cardForm.value.card, JSON.stringify(list));
    //     }
  }
  deleteCard(e:number){
    this.cards.splice(e,1);
    window.localStorage.setItem(keys.cards, JSON.stringify(this.cards));
  }
}
