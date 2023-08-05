import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // start editor
  htmlContent=``;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  // end editor
  myTime: Date = new Date();
  showMin = true;
  showSec = true;

  bsValue = new Date();
  selectedCars = [3];
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';
  show: any = false

  productForm=this.fb.group({
    name:['',[Validators.required]],
    price:[null,[Validators.required]],
    img:[this.imageSrc,[Validators.required]],
    date:[this.bsValue,[Validators.required]],
    time:[null,[Validators.required]],
    size:['',[Validators.required]]
  })
  get productFormControls(){
    return this.productForm?.controls
  }
  constructor(private fb:FormBuilder) { }
  ngOnInit() {}
  handleDragEnter() {
    this.dragging = true;
    this.show = true
  }

  handleDragLeave() {
    this.dragging = false;
    this.show = false
  }

  handleDrop(e: any) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
    this.show = true
  }

  handleImageLoad() {
    this.imageLoaded = true;
    this.show = true
  }

  handleInputChange(e: any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;
    this.show = true

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
    //     if(file.size>2000){
    //       alert('file size must be more than 2000');
    //     this.show=false
    // this.imageSrc = '';
    //     }
  }

  _handleReaderLoaded(e: any) {
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
  }
  toggleDisabled() {
    const car: any = this.cars[1];
    car.disabled = !car.disabled;
  }
  toggleMinutes(): void {
    this.showMin = !this.showMin;
  }

  toggleSeconds(): void {
    this.showSec = !this.showSec;
  }
  save(){
    console.log(this.productForm.value);

  }
}
