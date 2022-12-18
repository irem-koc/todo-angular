export class Model{
    username:any;
    items;
    constructor(){
        
        this.items = [
            new Item("yemek ye", true),
            new Item("örgü ör", false),
            new Item("yemek ye", false),
            new Item("örgü ör", true),
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