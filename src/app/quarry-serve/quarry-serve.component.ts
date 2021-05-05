import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-quarry-serve',
  templateUrl: './quarry-serve.component.html',
  styleUrls: ['./quarry-serve.component.css']
})
export class QuarryServeComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    
   }

  ngOnInit(): void {
   
  }
  getUserValue(value:any){
    console.warn(value)
  }
  quarryForm =  this.fb.group({
    QuarryName: ['quarryyy1'],
    PlotLocation: ['', Validators.required],
    RiverName: [''],
    PlotOwnership: [''],
    Government: [''],
    Department: [''],
    District: [''],
    Taluka: [''],
    Village: [''],
  });
  onSubmit() {
    console.warn(this.quarryForm.value);
  }

}
