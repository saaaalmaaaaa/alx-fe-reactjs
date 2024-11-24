// src/App.jsx

import React from 'react';
import TodoList from './components/TodoList';  // Importing the TodoList component

function App() {
  return (
    <div className="App">
      <TodoList />  {/* Render TodoList component */}
    </div>
  );
}

export default App;
