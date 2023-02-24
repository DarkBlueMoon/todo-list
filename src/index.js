import "./style.css";
import screenController from "./screenController";

screenController();

// import todoItemFactory from "./todoItem";
// import projectItemFactory from "./projectItem";

// const todoItem = todoItemFactory("Title", "Desc", 1);
// const todoItem2 = todoItemFactory("Title2", "Desc2", 1);
// const todoItem3 = todoItemFactory("Title3", "Desc3", 1);

// const defaultProj = projectItemFactory("Default");
// defaultProj.addTodoToArray(todoItem);
// defaultProj.addTodoToArray(todoItem2);
// defaultProj.addTodoToArray(todoItem3);
// console.dir(defaultProj);

// console.log(defaultProj.getNumOfTodos());

// const defaultProj = createProjectItem();
// defaultProj.addTodoToArray(createTodoItem("Title", "Desc", 1));
// defaultProj.addTodoToArray(createTodoItem("Title2", "Desc2", 2));
// defaultProj.addTodoToArray(createTodoItem("Title3", "Desc3", 3));

// console.log(defaultProj.getNumOfTodos());
// console.log(defaultProj.getArrayOfTodos());

// function init() {
// const arr = [];
// for (let i = 0; i < 10; i += 1) {
//   arr.push(createTodoItem("A", "A", 1));
// }
// console.dir(arr);
// }

// init();

// function createTodo() {
//   //    Prompt for todo name, description, priority.
//   //    Create a new todo item. Assign ID to todo item. (maybe?)
//   //    Add todo item to Default Project's array.
// }

// function listTodos() {
//   //    Iterate through the Default Project's array.
//   //    Log all Todo Items within that array to the console.
// }

// function deleteTodo() {
//   //    View all todos w/ index number
//   //    Prompt for an index number
//   //    Delete (splice) that index out of the array.
// }

// function accessProject() {
//   console.log("Would you like to...");
//   console.log("1: Create a todo?");
//   console.log("2: View all todos?");
//   console.log("3: Delete a todo?");

//   // let choice = Number(prompt("Choice here: "));

//   switch (choice) {
//     case 1:
//       createTodo();
//       break;
//     case 2:
//       listTodos();
//       break;
//     case 3:
//       deleteTodo();
//       break;
//     default:
//       break;
//   }
// }

// function init() {
//   console.log("Welcome to your todo list!");

//   let running = true;

//   // while (running) {
//   //   console.log("Would you like to...");
//   //   console.log("1: View default project?");
//   //   console.log("2: Create a new project?");
//   // }
// }

// init();
