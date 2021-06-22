import logo from './logo.svg';
import './App.css';
import { addTodo } from './redux/actions';
import useReduxDispatch from './hooks/useReduxDispatch';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const dispatch = useReduxDispatch();

  return (         
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList />
        <TodoForm />
      </header>
    </div>
  );

}

export default App;
