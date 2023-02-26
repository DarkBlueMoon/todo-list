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

const todoItem = (title, desc, priority) => {
  const todo = Object.create(todoMethods);
  todo.title = title;
  todo.desc = desc;
  todo.priority = priority;
  todo.completed = false;

  return todo;
};

export default todoItem;
