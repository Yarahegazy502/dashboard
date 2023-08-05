import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {
  windowScrolled: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    // console.log(document.documentElement.scrollTop);
    // console.log(window.pageYOffset);
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 200
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }
  scrollToTop(): void {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.scrollTo(0, 0);
      }
    })();
  }

  ngOnInit(): void {
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll(): void {
  //   let s = document.querySelector(".scroll") as HTMLElement;
  //     if(window.scrollY>=300){
  //       s.classList.add("active");
  // }else{
  //   s.classList.remove("active");
  // }
// }


  // scroll(){
  //   window.scrollTo(0,0)
  // }

}
