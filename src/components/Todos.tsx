import React, {useEffect, useState} from "react";
import {TodoForm} from "./TodoForm";
import {TodoList} from "./TodoList";
import {ITodo} from "../interfaces";

export const Todos: React.FC<{ tasksType: string }> = ({tasksType}) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(tasksType) || '[]') as ITodo[];

    setTodos(saved);
  }, [tasksType]);

  useEffect(() => {
    localStorage.setItem(tasksType, JSON.stringify(todos))
  }, [tasksType, todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    };

    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  };

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm("Ви впевнені, що хочети видалити завдання?");
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  };

  return (
    <>
      <TodoForm onAdd={addHandler}/>
      <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
    </>
  )
};

