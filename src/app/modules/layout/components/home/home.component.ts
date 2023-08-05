import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  bg = '#ef305e33'
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      name: '',
      skills: this.fb.array([]),
    });

  }

  get skills(): FormArray {
    return this.form.get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.form.value);
  }

  ngOnInit(): void {
    this.addSkills()
  }









  added: any = [];



  items = [
    {
      name: "Allergy and Immunology",
      description: "Specialists in allergy and immunology work with both adult and pediatric patients suffering from allergies and diseases of the respiratory tract or immune system. They may help patients suffering from common diseases such as asthma, food and drug allergies, immune deficiencies, and diseases of the lung. Specialists in allergy and immunology can pursue opportunities in research, education, or clinical practice.",
      logo: "23020207253075_Sponsor_300-1.jpg",
      services: [
        {
          name: "Service Name",
          description: "11",
          prescriptionRequired: true,
          id: 1
        }
      ],
      id: 1
    },
    {
      name: "Dermatology",
      description: "Dermatologists are physicians who treat adult and pediatric patients with disorders of the skin, hair, nails, and adjacent mucous membranes. They diagnose everything from skin cancer, tumors, inflammatory diseases of the skin, and infectious diseases. They also perform skin biopsies and dermatological surgical procedures.",
      logo: "23020207261224_Sponsor_300-29.jpg",
      services: [
        {
          name: "Service Test",
          description: "Service Test Service Test Servic",
          prescriptionRequired: true,
          id: 2
        },
        {
          name: "Service",
          description: "1",
          prescriptionRequired: true,
          id: 3
        }
      ],
      id: 3
    },
    {
      name: "Diagnostic radiology",
      description: "Physicians specializing in diagnostic radiology are trained to diagnose illnesses in patients through the use of x-rays, radioactive substances, sound waves in ultrasounds, or the body’s natural magnetism in magnetic resonance images (MRIs).",
      logo: "23020207255917_Sponsor_300-21.jpg",
      services: [
        {
          name: "Service",
          description: "1",
          prescriptionRequired: true,
          id: 3
        }
      ],
      id: 4
    }
  ]


  i() {
    this.items?.forEach((e: any) => {
      e.services.forEach((el: any, index: any) => {
        if (el.id == 2) {
          console.log(index);
          console.log(el);
          e.services?.splice(index, 1);
          this.added.push(el);
        }
      });
    })
    console.log(this.added);
  }

  d() {
    this.added?.forEach((e: any, index: any) => {
      if (e.id == 2) {
        this.added?.splice(index, 1);
      }

      this.items.forEach((it: any, index) => {
        if (it.id == 3) {
          it.services.push(e)
        }
      })

      // e.services.forEach((el: any, index: any) => {
      //   if (el.id == 2) {
      //     console.log(index);
      //     console.log(el);
      //     e.services?.splice(index, 1);
      //     this.items.push(el);
      //   }
      // });
    })
    console.log(this.added);
  }
}

