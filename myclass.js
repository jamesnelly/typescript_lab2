"use strict";
exports.__esModule = true;
var myClass = /** @class */ (function () {
    function myClass() {
        this.Arraytasks = [];
    }
    myClass.prototype.AddTask = function (task) {
        var count = this.Arraytasks.push(task);
        console.log("Item" + task + "added to the array");
        return count;
    };
    myClass.prototype.ListAllTasks = function () {
        for (var item in this.Arraytasks) {
            console.log(item);
        }
    };
    myClass.prototype.deleteTask = function (task) {
        var index = this.Arraytasks.indexOf(task);
        if (index > -1) {
            this.Arraytasks.splice(index, 1);
            console.log("we have deleted" + task);
        }
        return this.Arraytasks.length;
    };
    return myClass;
}());
var newClass = new myClass();
var x = newClass.AddTask("Test");
