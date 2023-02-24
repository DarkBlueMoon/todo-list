// export default function createTodoItem(itemTitle, itemDesc, itemPriority) {
//   let title = itemTitle;
//   let desc = itemDesc;
//   let priority = itemPriority;
//   let completed = false;

//   const setTitle = (newTitle) => {
//     title = newTitle;
//   };
//   const getTitle = () => title;

//   const setDesc = (newDesc) => {
//     desc = newDesc;
//   };
//   const getDesc = () => desc;

//   const setPriority = (newPriority) => {
//     priority = newPriority;
//   };
//   const getPriority = () => priority;

//   const getCompletedStatus = () => completed;
//   const toggleCompleted = () => {
//     completed = true;
//   };

//   return {
//     setTitle,
//     getTitle,
//     setDesc,
//     getDesc,
//     setPriority,
//     getPriority,
//     getCompletedStatus,
//     toggleCompleted,
//   };
// }

const todoMethods = {
  setTitle(newTitle) {
    this.title = newTitle;
  },
  getTitle() {
    return this.title;
  },
  setDesc(newDesc) {
    this.desc = newDesc;
  },
  getDesc() {
    return this.desc;
  },
  setPriority(newPriority) {
    this.priority = newPriority;
  },
  getPriority() {
    return this.priority;
  },
  toggleCompleted() {
    this.completed = true;
  },
  getCompletedStatus() {
    return this.completed;
  },
};

const todoItemFactory = (title, desc, priority) => {
  const todo = Object.create(todoMethods);
  todo.title = title;
  todo.desc = desc;
  todo.priority = priority;
  todo.completed = false;

  return todo;
};

export default todoItemFactory;
