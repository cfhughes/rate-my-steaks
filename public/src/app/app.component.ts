import { Component, OnInit } from '@angular/core';
import { SteakService } from './steak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  steaks:any;
  newSteak:any = {"title": "" , "description" : "" , "image" : ""}

  constructor(private steakService:SteakService){}

  ngOnInit(){
    this.getSteaksFromService();
  }

  getSteaksFromService(){
    this.steakService.getSteaks().subscribe((data:any[])=>{
      for (let steak of data){
        steak.newRating = {comment:"",rating:""};
      }
      this.steaks = data;
    })
  }

  saveSteak(){
    this.steakService.saveSteak(this.newSteak).subscribe(()=>{
      this.getSteaksFromService();
    })
    this.newSteak = {"title": "" , "description" : "" , "image" : ""}
  }

  saveRating(steak){
    this.steakService.saveRating(steak._id, steak.newRating).subscribe(()=>{
      this.getSteaksFromService();
    })
  }
}
