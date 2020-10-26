import React, { useState } from 'react';
import { Todo } from './todo.model';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos(preTodos => 
      [...preTodos, 
      {id: Math.random().toString(), text: text}]);
  }
  const todoDeleteHandler = (todoTd: string) => {
    setTodos(preTodos => {
      return preTodos.filter(todo => todo.id !== todoTd)
    })
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
