/*  PokeSprites enthält url Verweise von Bildern
     unter other werden die Bilder abgefangen, die hier nicht benutzt werden */

export class PokeSprites {
    public front_default : string ='';
    public front_shiny : string ='';
    public front_female : string = '';
    public front_shiny_female : string = '';
    public back_default : string = '';	
    public back_shiny : string = '';	
    public back_female : string = '';
    public back_shiny_female : string = '';
    private other : string[] = [];

}

/* PokeStatsStat schlüsselt den Status auf, der als Array in PokeStats vorkommt */

export class PokeStatsStat{
    public name : string = '';
    public url : string = '';
}

/* PokeStats kommt als Array in der Klasse Pokemon auf und beinhaltet den Status*/

export class PokeStats {
    public base_stat : number = 0;
    public effort : number = 0;
    public stat = new PokeStatsStat;
}

/* PokeMov schlüsselt Attacken auf, die als Array in PokeMoves vorkommen */

export class PokeMov {
    public name : string = '';
    public url : string = '';
}

/* PokeMoves kommt als Array in der Klasse Pokemon auf und beinhaltet Attacken(Moves) eines Pokemon */

export class PokeMoves {
    public move = new PokeMov;
    public version_group_details : string[] = [];
}

/*  Pokemon enthält alle Daten, die mit Http ausgelesen werden
    für Datenarrays werden passende Klassen weiter Oben definiert  */

export class Pokemon {
    public abilities : string[] = [];
    public base_experience : number = 0;
    public forms : string[] = [];
    public game_indices : string[] = [];
    public height: number = 0;
    public held_items :string [] = [];
    public id : number = 0;
    public is_default : boolean = true;
    public location_area_encounters : string = '';
/*    moves : string[] = []; */
    public moves : Array<PokeMoves> = [] ;
    public name : string = '';
    public order : number = 0;
    public past_types : string[] = [];
    public species : string[] = [];
    public sprites  = new PokeSprites;
    public stats : Array<PokeStats> = [];
    public types : string[] = [];
    public weight : number = 0;

    constructor(){

    }


}

/* Stats kommt als Array in ShortPokemon vor und beinhaltet Status mit Basiswert */

export class Stats{
    public name : string = '';
    public base : number = 0;

}

/*  ShortPokemon enthält nur die Daten, die für die App notwendig sind */

export class ShortPokemon{

    private name : string = '';
    private id : number = 0;
    private images = new PokeSprites;
    private stats : Array<Stats> = [];
    private moves : Array<string> = [];

    constructor(){
    }

    public fromPokemon(value : Pokemon){

        let i = 0;

        this.id = value.id;
        this.name = value.name;
        this.images = value.sprites;

       
        for(i=0; i<6;i++){
            let vStats = new Stats;
            vStats.name = value.stats[i].stat.name;
            vStats.base = value.stats[i].base_stat;
            this.stats[i] = vStats;          
        }

        for(i=0; i<value.moves.length;i++){
            this.moves[i] = value.moves[i].move.name;
        }

        
    }

    public getImageUrl(){

        let arrUrl : string[] =[];

        arrUrl[0] = this.images.front_default;
        arrUrl[1] = this.images.front_female;
        arrUrl[2] = this.images.front_shiny;
        arrUrl[3] = this.images.front_shiny_female;
        arrUrl[4] = this.images.back_default;
        arrUrl[5] = this.images.back_female;
        arrUrl[6] = this.images.back_shiny;
        arrUrl[7] = this.images.front_shiny_female;
        
        return arrUrl;
    
      }

    public getMoves(){
        
        return this.moves;
    
      }

    public getName(){
        
        return this.name;
    
      }
    
    public getID(){
        
        return this.id;
    
      }
      
    public getStats(){
        
        return this.stats;
    
      }
    
}
