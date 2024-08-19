import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
};

axios.get(url).then(response => {
  const data = response.data as ToDo;
  logToDo(data);
});

const logToDo = (toDo: ToDo) => {
  console.log(`
    To Do with id: ${toDo.id}
    Has a title of: ${toDo.title}
    Is it finished? ${toDo.completed}
  `);
};
