   export interface myQueue
{
    Arraytasks: Array<string>;
    AddTask(task:string):number;
    ListAllTasks():void;
    deleteTask(task:string):number;

}