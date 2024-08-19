"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
;
axios_1.default.get(url).then(function (response) {
    var data = response.data;
    logToDo(data);
});
var logToDo = function (toDo) {
    console.log("\n    To Do with id: ".concat(toDo.id, "\n    Has a title of: ").concat(toDo.title, "\n    Is it finished? ").concat(toDo.completed, "\n  "));
};
