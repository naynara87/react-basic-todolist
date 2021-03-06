import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
// import { addTodo, completeTodo, showComplete } from './redux/actions';
import ReduxContext from './contexts/ReduxContext';

store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store);
// store.dispatch(addTodo('할일'));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());


ReactDOM.render( 
  <React.StrictMode >
    <ReduxContext.Provider value={store}>
      <App />  
    </ReduxContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();