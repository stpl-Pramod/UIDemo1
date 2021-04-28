import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  chackngif=false;
  title = 'Angular 11 Project!';
  months = ["Jan", "Feb", "Mar", "Apr"]
  btnClick(){
    alert("You Click me !");
  }
  userName:string = "Sam"; 
  myCSSClass = "red"; 
  applyCSSClass = "false"; 
  myColor = 'brown';

}
