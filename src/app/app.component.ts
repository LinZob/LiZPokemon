import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Pokemon, ShortPokemon } from './pokeClass';
import { PokeHttpService } from './poke-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  varName = 'Name';
  varID = 0;
  arrImg : string[] = [];
  arrMoves : string[] = [];
  varPokemon1 = new Pokemon;
  varPokemon2 = new ShortPokemon;  


  constructor(private sDataserv:PokeHttpService) {

  }

  ngOnInit(): void {

  }

  

  impID(id : number){
    this.varID = id;
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

  impName(name : string){
    this.varName = name;
    this.sDataserv.findID(this.varName).subscribe({
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
