import {myQueue} from "./interface";

class myClass implements myQueue{

    Arraytasks: Array<string> = [];


     AddTask(task:string):number{
    
        let count:number = this.Arraytasks.push(task);
        console.log("Item"+task+"added to the array");
        
        return count;
    }
    
     ListAllTasks(){
    
        for(let item in this.Arraytasks){
    
            console.log(item);
        }
       
    }
    
     deleteTask(task:string):number{
        let index:number = this.Arraytasks.indexOf(task);
        if(index > -1){
    
            this.Arraytasks.splice(index,1);
            console.log("we have deleted"+task);
            }
    
            return this.Arraytasks.length;
        
    }


}
let newClass = new myClass();
let x = newClass.AddTask("Test");
