var Arraytasks = [];
function AddTask(task) {
    var count = Arraytasks.push(task);
    console.log("Item" + task + "added to the array");
    return count;
}
function ListAllTasks() {
    for (var item in Arraytasks) {
        console.log(item);
    }
}
function deleteTask(task) {
    var index = Arraytasks.indexOf(task);
    if (index > -1) {
        Arraytasks.splice(index, 1);
        console.log("we have deleted" + task);
    }
    return Arraytasks.length;
}
var x = AddTask("test");
console.log(x);
ListAllTasks();
