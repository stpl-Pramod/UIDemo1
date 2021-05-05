import { Component, OnInit} from '@angular/core';
import { AbtServiceService } from '../abt-service.service';
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  
  servName:string;
  data:any;
  constructor(private serv:AbtServiceService) { 
    console.warn(this.serv.getdata());
     this.servName= this.serv.getdata().servName;
    this.serv.getApi().subscribe(data=>{
      console.log(data);
      this.data=data
    })
    
  }

  ngOnInit(): void {
  }
  chackngif=false;
  title = 'Angular 11 Project!';
  todaydate = new Date(); 
  gender=2;
  months = ["Jan", "Feb", "Mar", "Apr"]
  btnClick(){
    alert("You Click me !");
  }
  userName:string = "Sam"; 
  myCSSClass = "red"; 
  applyCSSClass = "false"; 
  myColor = 'brown';
  transform(val : number) : number {  
    return Math.sqrt(val);  
   }  

}
// export class AboutComponent implements PipeTransform {  
//   transform(val : number) : number {  
//     return Math.sqrt(val);  
//   }  
// }  