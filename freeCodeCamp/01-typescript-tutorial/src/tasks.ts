const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskList = document.querySelector<HTMLUListElement>('.list');
type Task = {
  description: string;
  isCompleted: boolean;
};
const tasks: Task[] = loadTasks();
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}
tasks.forEach(renderTask);
function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    console.log(taskDescription);
    // Add task to the list
    const task: Task = {
      description: taskDescription,
      isCompleted: false
    }
    addTask(task);
    // Render tasks
    renderTask(task);
    // Update local storage
    updateStorage();
    formInput.value = '';
    return;
  }
  alert('Please enter a task description');
}
function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}
function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;
  // Checkbox
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.checked = task.isCompleted;
  taskElement.appendChild(taskCheckbox);
  // Toggle checkbox
  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });
  taskList?.appendChild(taskElement);
}
function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
taskForm?.addEventListener('submit', createTask);