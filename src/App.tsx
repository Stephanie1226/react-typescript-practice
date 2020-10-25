import React from 'react';

import TodoList from './components/TodoList';

function App() {
  const todos = [{id: 't1', text: 'Finist the course'}, {id: 't2', text: 'Cook dinner'}]
  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
}

export default App;
