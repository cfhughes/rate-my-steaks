import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Steak } from '../models/steak.model';
import { SteakService } from '../steak.service';

@Component({
  selector: 'app-displaysteak',
  templateUrl: './displaysteak.component.html',
  styleUrls: ['./displaysteak.component.css']
})
export class DisplaysteakComponent implements OnInit {
  @Input() steak:Steak;
  @Output() savedRating = new EventEmitter<boolean>();

  constructor(private steakService:SteakService) { }

  ngOnInit() {
  }

  saveRating(steak){
    this.steakService.saveRating(steak._id, steak.newRating).subscribe(()=>{
      this.savedRating.emit(true);
    })
  }

}
