import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];

const todoContainer = document.querySelector("#container2") as HTMLDivElement;

const input = document.getElementById("inputField") as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: input.value,
    isCompleted: false,
    id: String(Math.floor(Math.random() * 20)),
  };

  todos.push(todo);
  input.value = "";

  generateTodo(todos);
};

const generateTodoItems = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  // Creating a checkbox
  const checkbox: HTMLInputElement = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "isCompleted";
  checkbox.checked = isCompleted;

  checkbox.onchange = () => {
    para.className = checkbox.checked ? "textCut" : "textNoCut";
  };

  // Creating a para
  const para: HTMLParagraphElement = document.createElement("p");
  para.innerText = title;
  para.className = "paraText";

  // Creating a button
  const btn: HTMLButtonElement = document.createElement("button");
  btn.innerText = "❌";
  btn.className = "deleteBtn";
  btn.onclick = () => {
    deleteTask(id);
  };

  todo.append(checkbox, para, btn);

  todoContainer.append(todo);
};

const generateTodo = (todos: Todo[]) => {
  todoContainer.innerText = "";
  todos.forEach((item) => {
    generateTodoItems(item.title, item.isCompleted, item.id);
  });
};

const deleteTask = (id: string) => {
  const index = todos.findIndex((item) => item.id === id);
  todos.splice(index, 1);
  generateTodo(todos);
};
