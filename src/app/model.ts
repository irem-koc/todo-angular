export class Model{
    username:any;
    items: Item[];
    constructor(){
        
        this.items = [
            
        ];
        
    }
}
export class Item{
    description;
    completed;
    constructor(description:string, completed:boolean){
        this.description = description;
        this.completed = completed;
    }
}