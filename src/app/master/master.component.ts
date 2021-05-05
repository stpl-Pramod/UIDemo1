import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})

export class MasterComponent implements OnInit {
  @Input() hero:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
