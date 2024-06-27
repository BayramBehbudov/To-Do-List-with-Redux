import React, { useRef } from "react";
import style from "../App.module.css";
import { useDispatch } from "react-redux";
import { setTodoList } from "../store/DataSlice";

const Input = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  return (
    <div className={style.inputContainer}>
      <input type="text" placeholder="Add todo..." ref={inputRef} />
      <button
        onClick={() => {
          const value = inputRef.current.value;
          value.trim() != "" && dispatch(setTodoList(value));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
