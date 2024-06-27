import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../App.module.css";
import { setTodoActive } from "../store/BooleanSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector((state) => state.data.todoList);
  const todoActive = useSelector((state) => state.bool.todoActive);
  const dispatch = useDispatch();

  return (
    <div className={style.listContext}>
      <div
        className={style.header}
        onClick={() => {
          todoList.length > 0 && dispatch(setTodoActive());
        }}
      >
        <p>TODO LIST</p>
        <span>{todoList.length}</span>
      </div>
      <div className={`${todoActive ? style.dataContext : style.close}`}>
        <ul>
          {todoList.map((item, index) => (
            <TodoItem
              active={todoActive}
              key={item + index}
              item={item}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
