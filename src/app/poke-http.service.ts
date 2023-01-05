import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokeClass';

@Injectable({
  providedIn: 'root'
})
export class PokeHttpService {

  constructor(private http:HttpClient) { }

  giveName() : string{
    return 'nothing'
  }

  findName(id:number): Observable<Pokemon>{

    const url='https://pokeapi.co/api/v2/pokemon/'+ id;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    
    const params = new HttpParams()
  /*    .set('name', name)
      .set('id',id);*/

    return this.http.get<Pokemon>(url,{headers,params});
  }

  findID(name: string): Observable<Pokemon>{
    
    const url='https://pokeapi.co/api/v2/pokemon/'+ name;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    
    const params = new HttpParams()
  /*    .set('name', name)
      .set('id',id);*/

    return this.http.get<Pokemon>(url,{headers,params});
  }

}
