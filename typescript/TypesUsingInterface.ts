
// using interface for types:

interface ComicBookChracter {
    secretIdentity?:string; // ? denotes optional 
    alias:string;
    health:number;
    attack:AttackFunction
}

interface AttackFunction {
    (opponent:{
        alias:string;
        health:number;

    }, attackWith:number):number;
}

function attackFunc(opponent:object,attackWith:number) {
    console.log(opponent);
    return attackWith;
}

let superHero:ComicBookChracter = {
    alias:"Hulk",
    health:500000,
    attack:attackFunc
}

let superVillian:ComicBookChracter = {
    secretIdentity:'jhon walker',
    alias:'Tron',
    health:75,
    attack:attackFunc
}

