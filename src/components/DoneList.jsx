import React from "react";
import style from "../App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setDoneActive } from "../store/BooleanSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { removeDoneListItem } from "../store/DataSlice";

const DoneList = () => {
  const doneList = useSelector((state) => state.data.doneList);
  const doneActive = useSelector((state) => state.bool.doneActive);
  const dispatch = useDispatch();

  return (
    <div className={style.listContext}>
      <div
        className={style.header}
        onClick={() => {
          doneList.length > 0 && dispatch(setDoneActive());
        }}
      >
        <p>DONE LIST</p>
        <span>{doneList.length}</span>
      </div>
      <div className={`${doneActive ? style.dataContext : style.close}`}>
        <ul>
          {doneList.map((item, index) => (
            <li key={item + index} className={`${doneActive && style.li}`}>
              <p>{item}</p>
              <div className={style.icons}>
                <FontAwesomeIcon
                  icon={faXmark}
                  className={style.addIcon}
                  onClick={() => {
                    dispatch(removeDoneListItem(index));
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoneList;
