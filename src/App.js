import './App.css';
import BoxList from './BoxList';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>Boxes</h1>
      <BoxList/>
      <br/>
      <br/>
      <h1>Todo List:</h1>
      <TodoList/>
    </div>
  );
}

export default App;
