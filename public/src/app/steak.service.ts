import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SteakService {
  

  constructor(private _http:HttpClient) { }

  getSteaks(){
    return this._http.get("/steaks");
  }

  saveSteak(newSteak: any) {
    return this._http.post("/steaks",newSteak);
  }

  saveRating(id, rating){
    return this._http.post(`/steaks/${id}/ratings`, rating);
  }

}
