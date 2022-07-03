import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const data = [
  { id: "todo-0", name: "React", completed: false },
  { id: "todo-1", name: "VueJs", completed: true },
  { id: "todo-2", name: "iOS", completed: false },
  { id: "todo-3", name: "Android", completed: false },
  { id: "todo-4", name: "React Native", completed: false },
  { id: "todo-5", name: "AWS", completed: false },
]
root.render(
  <React.StrictMode>
    <App tasks={data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
