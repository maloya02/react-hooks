import React from 'react';
import TaskContext from './TaskContext';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './AAuseContext7.css';

//Scaling up with context and a reducer

const AAuseContext7 = () => {
  return (
    <TaskContext>
    <h1>Day off in Japan</h1>
    <AddTask />
    <TaskList />
  </TaskContext>
);
}


export default AAuseContext7