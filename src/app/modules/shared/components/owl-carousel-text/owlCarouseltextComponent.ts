import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-owl-carousel-text',
  templateUrl: './owl-carousel-text.component.html',
  styleUrls: ['./owl-carousel-text.component.scss']
})
export class owlCarouselTextComponent implements OnInit {
  customOptions: OwlOptions = {
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };
  @Input() arrayList: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
