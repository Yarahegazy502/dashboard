import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  urlData=new BehaviorSubject<boolean>(false)
  moduleType=new BehaviorSubject<string>('');
  showSideMenu=new BehaviorSubject<boolean>(false);
  constructor() { }
}
