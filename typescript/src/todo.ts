const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();
tasks.forEach(renderTask);

function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    addTask(task);
    renderTask(task);
    formInput.value = "";
    return;
  }
  alert("please enter a task description");
}

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener("submit", createTask);

function addTask(task: Task): void {
  tasks.push(task);
  console.log(task);
  updateStorae();
}

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  const taskCkeckbox = document.createElement("input");
  taskCkeckbox.type = "checkbox";
  taskCkeckbox.checked = task.isCompleted;

  taskCkeckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorae();
  });

  taskElement.appendChild(taskCkeckbox);
  taskListElement?.appendChild(taskElement);
}

function updateStorae(): void {
  localStorage.setItem("task", JSON.stringify(tasks));
}
