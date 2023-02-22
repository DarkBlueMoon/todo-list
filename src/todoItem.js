// const todoItemProto = {
//   getTitle() {
//     return this.title;
//   },
//   setTitle(newTitle) {
//     this.title = newTitle;
//   },
//   getDesc() {
//     return this.desc;
//   },
//   setDesc(newDesc) {
//     this.desc = newDesc;
//   },
//   getPriority() {
//     return this.priority;
//   },
//   setPriority(newPriority) {
//     this.priority = newPriority;
//   },
// };

// function createTodo(title, desc, priority) {
//   const todo = Object.create(todoItemProto);
//   todo.title = title;
//   todo.desc = desc;
//   todo.priority = priority;
//   return todo;
// }

function createTodo() {
  let title = "";
  let desc = "";
  let priority = 0;

  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const getTitle = () => title;

  const setDesc = (newDesc) => {
    desc = newDesc;
  };
  const getDesc = () => desc;

  const setPriority = (newPriority) => {
    priority = newPriority;
  };
  const getPriority = () => priority;

  return {
    setTitle,
    getTitle,
    setDesc,
    getDesc,
    setPriority,
    getPriority,
  };
}

export default createTodo;
