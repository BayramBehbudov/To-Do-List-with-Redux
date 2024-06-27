import React, { useState } from "react";
import style from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setDoneList, removeTodoItem } from "../store/DataSlice";

const TodoItem = ({ active, item, index }) => {
  const [doneIcon, setDoneIcon] = useState(false);
  const dispatch = useDispatch();

  return (
    <li className={`${active && style.li}`}>
      <p>{item}</p>
      <div className={style.icons}>
        {doneIcon && (
          <FontAwesomeIcon
            icon={faCheck}
            className={style.doneIcon}
            onClick={() => {
              dispatch(setDoneList(item));
              dispatch(removeTodoItem(index));
              setDoneIcon(false);
            }}
          />
        )}
        <FontAwesomeIcon
          icon={faPlus}
          className={style.addIcon}
          onClick={() => {
            setDoneIcon(!doneIcon);
          }}
        />
      </div>
    </li>
  );
};

export default TodoItem;
