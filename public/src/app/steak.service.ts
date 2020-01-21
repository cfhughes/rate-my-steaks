import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Steak } from './models/steak.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteakService {
  

  constructor(private _http:HttpClient) { }

  getSteaks():Observable<Steak[]>{
    return this._http.get<Steak[]>("/steaks_json");
  }

  saveSteak(newSteak: Steak) {
    return this._http.post<Steak>("/steaks_json",newSteak);
  }

  saveRating(id, rating){
    return this._http.post(`/steaks_json/${id}/ratings`, rating);
  }

}
