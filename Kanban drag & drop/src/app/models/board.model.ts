import { Column } from './column.model';

export class Board{ //Létrehozunk egy új boardot
    constructor(public name: string,  public columns: Column[]){
        
    }
}

