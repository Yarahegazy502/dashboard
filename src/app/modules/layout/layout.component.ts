import { Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { findIndex } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('toggleBox', [
      // ...
      state('open', style({
        height: '200px',
        backgroundColor: '#061ff0'
      })),
      state('closed', style({
        height: '70px',
        backgroundColor: '#E91E63',
      })),
      transition('open => closed', [
        animate('.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ])
  ]
})
export class LayoutComponent implements OnInit {
  isOpen:any;
  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }

  isSideNavCollapsed = false;
  screenWidth = 0;
  // @Input() AllToastData=[];
  // toastData:any;
  // @ViewChild('articles') articles: any;
  // @ViewChild('heads') heads: any;
  @Input() show = false;
  h='<b>hello world</b>'
  v = '';
  AllToastData: any = [];
  content: any[] = [
    { title: 'header1', title2: 'header1', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam ullam aliquid non, hic possimus cumque architecto quaerat autem quod in, dignissimos itaque deserunt iusto officiis assumenda culpa minus modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est quasi possimus velit magnam rerum obcaecati facilis culpa cum? Odio eaque quo sequi ea, praesentium sed vitae odit molestiae id.' },
    { title: 'header2', title2: 'header2', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam ullam aliquid non, hic possimus cumque architecto quaerat autem quod in, dignissimos itaque deserunt iusto officiis assumenda culpa minus modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est quasi possimus velit magnam rerum obcaecati facilis culpa cum? Odio eaque quo sequi ea, praesentium sed vitae odit molestiae id.' },
    { title: 'header3', title2: 'header3', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam ullam aliquid non, hic possimus cumque architecto quaerat autem quod in, dignissimos itaque deserunt iusto officiis assumenda culpa minus modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est quasi possimus velit magnam rerum obcaecati facilis culpa cum? Odio eaque quo sequi ea, praesentium sed vitae odit molestiae id.' },
    { title: 'header4', title2: 'header4', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam ullam aliquid non, hic possimus cumque architecto quaerat autem quod in, dignissimos itaque deserunt iusto officiis assumenda culpa minus modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est quasi possimus velit magnam rerum obcaecati facilis culpa cum? Odio eaque quo sequi ea, praesentium sed vitae odit molestiae id.' }
  ]
  isChoose:boolean=false
  ans=[
    {value:'radio1',check:false},
    {value:'radio2',check:false},
    {value:'radio3',check:false},
    {value:'radio4',check:false},
  ]
  ans2=[
    {value:'check1',check:false},
    {value:'check2',check:false},
    {value:'check3',check:false},
    {value:'check4',check:false},
  ]
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }
  formchoose=this.fb.group({
    a:[''],
    anss : new FormArray([]),
  })
  // ngAfterViewInit() {
  //   let article = this.articles.nativeElement.querySelectorAll('.cont');
  //   var scrollPosition = this.articles.nativeElement.scrollTop;

  //   article.forEach((sec: any) => {
  //     if (scrollPosition >= sec.offsetTop && scrollPosition < sec.offsetTop + sec.offsetHeight) {
  //       // let currentId=sec.id
  //       console.log(sec.id);
  //       // remove active class
  //       this.heads.nativeElement.querySelectorAll('.head').forEach((e:any) => {
  //         console.log(e);
  //         e.classList.remove('active')
  //       });
  //       // add active class
  //       this.heads.nativeElement.querySelectorAll('.head').forEach((e:any) => {
  //         let headId='#'+sec.id
  //         if(e.id==headId){
  //           e.classList.add('active')
  //         }
  //       });
  //     }
  //   });

  // }

  onToggleSideNav(data: SideNavToggle) {
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
  toastData = this.fb?.group({
    title: ["", [Validators.required]],
    desc: ["", [Validators.required]],
    s: ["", [Validators.required]],
    d: [this.v, [Validators.required]],
    show: false
  });
  Closed() {
    this.toastData.value.show = true
    this.AllToastData.push(this.toastData.value)
    console.log(this.toastData.value);
  }
  submit():void{
    console.log(this.formchoose.value);
    // console.log(this.formchoose.value.anss);
  }
  add(i:any,arr:any[]){
    arr.forEach((e:any)=>{
      e.check=false
    })
    arr[i].check=true
  }
  onCheckboxChange(event: any) {
    const anss = (this.formchoose.controls['anss'] as unknown as FormArray);
    if (event.target.checked) {
      anss.push(new FormControl(event.target.value));
    } else {
      const index = anss.controls
      .findIndex(x => x.value === event.target.value);
      anss.removeAt(index);
    }
  }
}
