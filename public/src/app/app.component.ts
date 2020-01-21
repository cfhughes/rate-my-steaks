import { Component, OnInit } from '@angular/core';
import { SteakService } from './steak.service';
import { Steak } from './models/steak.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  steaks:Steak[];
  newSteak:Steak = new Steak();

  constructor(private steakService:SteakService){}

  ngOnInit(){
    this.getSteaksFromService();
  }

  getSteaksFromService(){
    this.steakService.getSteaks().subscribe((data:Steak[])=>{
      for (let steak of data){
        steak.newRating = {comment:"",rating:""};
      }
      this.steaks = data;
    })
    console.log("Getting Steaks")
  }

  saveSteak(){
    this.steakService.saveSteak(this.newSteak).subscribe(()=>{
      this.getSteaksFromService();
    })
    this.newSteak = new Steak();
  }

}
