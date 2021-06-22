import logo from './logo.svg';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContianer from './containers/TodoFormContainer';

function App() {
  return (         
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoListContainer />
        <TodoFormContianer />
      </header>
    </div>
  );

}

export default App;
