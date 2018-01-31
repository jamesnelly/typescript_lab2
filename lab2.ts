
let Arraytasks: Array<string> = [];


function AddTask(task:string):number{

    let count:number = Arraytasks.push(task);
    console.log("Item"+task+"added to the array");
    
    return count;
}

function ListAllTasks(){

    for(let item in Arraytasks){

        console.log(item);
    }
   
}

function deleteTask(task:string):number{
    let index:number = Arraytasks.indexOf(task);
    if(index > -1){

        Arraytasks.splice(index,1);
        console.log("we have deleted"+task);
        }

        return Arraytasks.length;
    
}

let x:number = AddTask("test");

console.log(x);
ListAllTasks();
