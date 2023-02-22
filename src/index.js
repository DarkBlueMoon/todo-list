// const prompt = require("prompt-sync")({ sigint: true });
// import createTodo from "./todoItem";

import createTodo from "./todoItem";

function init() {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(createTodo("A", "A", 1));
  }

  // const test = createTodo();
  // console.log(test.getTitle());
  // test.setTitle("Title");
  // console.log(test.getTitle());
  // console.log(test);

  console.dir(arr);
}

init();
// function init() {
//   console.log("Welcome to your todo list!");

//   let running = true;

//   while (running) {
//     console.log("Would you like to...");
//     console.log("1: View default project?");
//     console.log("2: Create a new project?");

//     let choice = Number(prompt("Choice here: "));

//     if (choice === 1) {
//       accessProject();
//     } else {
//       return;
//     }
//   }
// }

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

//   let choice = Number(prompt("Choice here: "));

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

// init();
