import { Component, OnInit, OnChanges } from '@angular/core';
import { Pokemon, ShortPokemon } from './pokeClass';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PokeHttpService } from './poke-http.service';
import { Observable } from 'rxjs';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  varName = 'dummy';
  varID = 1;
  arrImg : string[] = [];
  arrMoves : string[] = [];
  varPokemon1 = new Pokemon;
  varPokemon2 = new ShortPokemon;


  constructor(private sDataserv:PokeHttpService) {

  }

  ngOnInit(): void {

  }


  search():void{

    this.sDataserv.findName(this.varID).subscribe({
      next:(value)=>{
        this.varPokemon1=value;
      },
  
      error:(err)=>{
        console.debug('Error',err);
      }
    });

    this.varPokemon2.fromPokemon(this.varPokemon1);
    this.arrImg = this.varPokemon2.getImageUrl();
    this.arrMoves = this.varPokemon2.getMoves();
    this.varName = this.varPokemon2.getName();
    this.varID = this.varPokemon2.getID();


    }




}
